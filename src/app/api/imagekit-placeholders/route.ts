import { NextResponse } from 'next/server';
import { listPlaceholderImages, PlaceholderName } from '@/data/imagePlaceholders';
import { fetchImageKitFiles, selectDeterministicImage, ImageKitFile } from '@/lib/imagekit';
import fs from 'fs/promises';
import path from 'path';

const MANUAL_PLACEHOLDERS: PlaceholderName[] = [
  'floatingCtaPlumberIcon',
  'footerFleetVan',
];

type ResolvedPlaceholder = {
  placeholder: PlaceholderName;
  url: string;
  alt: string;
  filePath?: string;
  name?: string;
};

export async function GET() {
  const { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT } = process.env;
  const urlEndpoint = IMAGEKIT_URL_ENDPOINT ?? '';

  const placeholders = listPlaceholderImages();
  const manualSet = new Set(MANUAL_PLACEHOLDERS);

  const snapshot = await loadSnapshot();

  if (!IMAGEKIT_PRIVATE_KEY && !snapshot) {
    const response = placeholders.reduce<Record<PlaceholderName, ResolvedPlaceholder>>(
      (acc, placeholder) => {
        acc[placeholder.key] = {
          placeholder: placeholder.key,
          url: placeholder.defaultUrl,
          alt: placeholder.alt,
        };
        return acc;
      },
      {} as Record<PlaceholderName, ResolvedPlaceholder>,
    );

    return NextResponse.json({ placeholders: response });
  }

  const grouped = placeholders.reduce<Record<string, PlaceholderName[]>>((acc, placeholder) => {
    if (manualSet.has(placeholder.key)) return acc;
    const category = placeholder.category || '';
    if (!acc[category]) acc[category] = [];
    acc[category].push(placeholder.key);
    return acc;
  }, {});

  
async function loadSnapshot(): Promise<ImageKitFile[] | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'imagekit-images.json');
    const raw = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.images)) {
      return parsed.images as ImageKitFile[];
    }
  } catch (error) {
    console.warn('[imagekit-placeholders] Unable to read snapshot file', error);
  }
  return null;
}

function normalizeCategory(category: string): string {
  return category.trim().replace(/^\/+|\/+$/g, '');
}

function fileMatchesCategory(file: ImageKitFile, category: string): boolean {
  if (!category) return true;
  const normalizedCategory = normalizeCategory(category);
  const filePath = (file.filePath ?? file.name ?? '').trim().replace(/^\/+/, '');
  if (!filePath) return false;
  if (filePath === normalizedCategory) return true;
  return filePath.startsWith(`${normalizedCategory}/`);
}

async function getFilesForCategory(
  category: string,
  snapshot: ImageKitFile[] | null,
  privateKey: string | undefined
): Promise<ImageKitFile[]> {
  const normalizedCategory = normalizeCategory(category);
  if (snapshot) {
    const matches = snapshot.filter((file) => fileMatchesCategory(file, normalizedCategory));
    if (matches.length > 0) {
      return matches;
    }
  }

  if (!privateKey) {
    return [];
  }

  try {
    return await fetchImageKitFiles(normalizedCategory, {
      privateKey,
      limit: 500,
    });
  } catch (error) {
    console.error(`[imagekit-placeholders] Failed live fetch for category ${category}`, error);
    return [];
  }
}

const resolved: Record<PlaceholderName, ResolvedPlaceholder> = {} as Record<PlaceholderName, ResolvedPlaceholder>;

  for (const placeholder of placeholders) {
    if (manualSet.has(placeholder.key)) {
      resolved[placeholder.key] = {
        placeholder: placeholder.key,
        url: placeholder.defaultUrl,
        alt: placeholder.alt,
      };
    }
  }

  for (const [category, keys] of Object.entries(grouped)) {
    const files = await getFilesForCategory(category, snapshot, IMAGEKIT_PRIVATE_KEY);

    for (const key of keys) {
      const placeholder = placeholders.find((item) => item.key === key);
      if (!placeholder) continue;

      const seed = `${placeholder.key}-${category}`;
      const match = selectDeterministicImage(files, seed);

      if (match) {
        resolved[key] = {
          placeholder: key,
          url: match.url || (urlEndpoint && match.filePath ? `${urlEndpoint}${match.filePath}` : placeholder.defaultUrl),
          alt: placeholder.alt,
          filePath: match.filePath,
          name: match.name,
        };
      } else {
        resolved[key] = {
          placeholder: key,
          url: placeholder.defaultUrl,
          alt: placeholder.alt,
        };
      }
    }
  }

  return NextResponse.json({ placeholders: resolved });
}
