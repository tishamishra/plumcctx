const fs = require('fs');
const fetch = require('node-fetch');

const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
const URL_ENDPOINT = process.env.IMAGEKIT_URL_ENDPOINT;

if (!PRIVATE_KEY || !URL_ENDPOINT) {
  console.error('Missing env vars');
  process.exit(1);
}

const AUTH_HEADER = Buffer.from(`${PRIVATE_KEY}:`).toString('base64');
const API_URL = 'https://api.imagekit.io/v1/files';
const PAGE_LIMIT = 1000;

async function fetchBatch(skip) {
  const params = new URLSearchParams({ limit: String(PAGE_LIMIT), skip: String(skip) });
  const response = await fetch(`${API_URL}?${params.toString()}`, {
    headers: { Authorization: `Basic ${AUTH_HEADER}` },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`ImageKit request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    return [];
  }
  return data;
}

async function fetchAllFiles() {
  const files = [];
  let skip = 0;

  while (true) {
    const batch = await fetchBatch(skip);
    if (!batch.length) break;

    files.push(...batch);
    if (batch.length < PAGE_LIMIT) break;
    skip += batch.length;
  }

  return files.map((file) => ({
    id: file.fileId,
    name: file.name,
    url: file.url ?? `${URL_ENDPOINT}${file.filePath ?? ''}`,
    filePath: file.filePath,
    updatedAt: file.updatedAt,
  }));
}

(async function () {
  try {
    const images = await fetchAllFiles();
    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/imagekit-images.json', JSON.stringify({ images }, null, 2));
    console.log(`✅ Exported ${images.length} images to public/imagekit-images.json`);
  } catch (error) {
    console.error('Failed to export ImageKit images:', error);
    process.exit(1);
  }
})();
