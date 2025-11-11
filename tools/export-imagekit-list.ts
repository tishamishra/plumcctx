import fs from 'fs';

const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
const URL_ENDPOINT = process.env.IMAGEKIT_URL_ENDPOINT;

if (!PRIVATE_KEY || !URL_ENDPOINT) {
  console.error('Missing env vars');
  process.exit(1);
}

async function exportImages() {
  try {
    const auth = Buffer.from(`${PRIVATE_KEY}:`).toString('base64');
    const response = await fetch('https://api.imagekit.io/v1/files?limit=500', {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`ImageKit request failed: ${response.status} ${text}`);
    }

    const data = await response.json();

    const images = Array.isArray(data)
      ? data.map((f) => ({
          id: f.fileId,
          name: f.name,
          url: `${URL_ENDPOINT}${f.filePath}`,
          filePath: f.filePath,
          updatedAt: f.updatedAt,
        }))
      : [];

    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync(
      'public/imagekit-images.json',
      JSON.stringify({ images }, null, 2),
    );

    console.log(`✅ Exported ${images.length} images to public/imagekit-images.json`);
  } catch (error) {
    console.error('Failed to export ImageKit images:', error);
    process.exit(1);
  }
}

exportImages();
