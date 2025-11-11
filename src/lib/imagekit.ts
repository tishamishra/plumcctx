import crypto from 'crypto';

export type ImageKitFile = {
  id: string;
  name?: string;
  url: string;
  filePath?: string;
  updatedAt?: string;
};

type ImageKitApiFile = {
  fileId: string;
  name?: string;
  filePath?: string;
  url?: string;
  updatedAt?: string;
};

type FetchOptions = {
  privateKey: string;
  limit?: number;
};

const IMAGEKIT_FILES_ENDPOINT = 'https://api.imagekit.io/v1/files';

export async function fetchImageKitFiles(prefix: string, options: FetchOptions): Promise<ImageKitFile[]> {
  const { privateKey, limit = 500 } = options;

  const authHeader = Buffer.from(`${privateKey}:`).toString('base64');

  const params = new URLSearchParams({ limit: String(limit) });
  if (prefix && prefix.trim()) {
    const normalized = prefix.trim().replace(/^\/+|\/+$/g, '');
    params.set('path', `/${normalized}`);
  }

  const response = await fetch(`${IMAGEKIT_FILES_ENDPOINT}?${params.toString()}`, {
    headers: {
      Authorization: `Basic ${authHeader}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`ImageKit request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const normalizedPrefix = prefix.replace(/\/*$/, '');

  return Array.isArray(data)
    ? (data as ImageKitApiFile[])
        .filter((file) => {
          if (!normalizedPrefix) return true;
          const filePath = file.filePath ?? '';
          return filePath.startsWith(`/${normalizedPrefix}`) || filePath.startsWith(normalizedPrefix);
        })
        .map((file) => ({
          id: file.fileId,
          name: file.name,
          url: file.url ?? '',
          filePath: file.filePath,
          updatedAt: file.updatedAt,
        }))
    : [];
}

export function selectDeterministicImage(files: ImageKitFile[], seed: string): ImageKitFile | null {
  if (!files.length) return null;
  const sorted = [...files].sort((a, b) => {
    const aPath = (a.filePath ?? a.name ?? '').toLowerCase();
    const bPath = (b.filePath ?? b.name ?? '').toLowerCase();
    return aPath.localeCompare(bPath);
  });

  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const index = parseInt(hash.slice(0, 8), 16) % sorted.length;
  return sorted[index];
}
