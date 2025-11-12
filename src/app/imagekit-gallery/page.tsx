import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import type { ImageKitFile } from '@/lib/imagekit';

export const revalidate = 300;

async function loadSnapshot(): Promise<ImageKitFile[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'imagekit-images.json');
    const raw = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.images)) {
      return parsed.images as ImageKitFile[];
    }
  } catch (error) {
    console.warn('[imagekit-gallery] Unable to read snapshot file', error);
  }
  return [];
}

async function fetchImages(): Promise<Array<{ id: string; url: string; name?: string }>> {
  const baseUrl = (() => {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return undefined;
  })();

  if (baseUrl) {
    try {
      const response = await fetch(`${baseUrl}/api/imagekit-files`, {
        next: { revalidate },
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data?.images)) {
          return data.images;
        }
      } else {
        console.warn('[imagekit-gallery] ImageKit API responded with', response.status);
      }
    } catch (error) {
      console.warn('[imagekit-gallery] Failed to fetch images from API route', error);
    }
  }

  const snapshot = await loadSnapshot();
  return snapshot.map((image) => {
    const url = image.url
      || (process.env.IMAGEKIT_URL_ENDPOINT && image.filePath
        ? `${process.env.IMAGEKIT_URL_ENDPOINT}${image.filePath}`
        : '');
    return {
      id: image.id,
      name: image.name,
      url,
    };
  }).filter((image) => Boolean(image.url));
}

export default async function ImageKitGalleryPage() {
  const images = await fetchImages();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>Auto-Fetched Images from ImageKit</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}
      >
        {images.map((image: { id: string; url: string; name?: string }) => (
          <div key={image.id} style={{ borderRadius: 10, overflow: 'hidden' }}>
            <Image
              src={image.url}
              alt={image.name || 'ImageKit asset'}
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
