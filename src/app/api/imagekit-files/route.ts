import { NextResponse } from 'next/server';

const API_URL = 'https://api.imagekit.io/v1/files?limit=100';

export async function GET() {
  const { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT, IMAGEKIT_PATH_PREFIX } = process.env;

  if (!IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_URL_ENDPOINT) {
    return NextResponse.json(
      { error: 'Missing ImageKit environment variables' },
      { status: 500 },
    );
  }

  try {
    const auth = Buffer.from(`${IMAGEKIT_PRIVATE_KEY}:`).toString('base64');

    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const text = await response.text();
      return new NextResponse(text, { status: response.status });
    }

    const data = await response.json();
    const prefix = IMAGEKIT_PATH_PREFIX || '';

    const files = Array.isArray(data)
      ? data.filter((f) => {
          if (!prefix) return true;
          return f.filePath && f.filePath.startsWith(prefix);
        })
      : [];

    const images = files.map((f) => ({
      id: f.fileId,
      name: f.name,
      url: `${IMAGEKIT_URL_ENDPOINT}${f.filePath}`,
      filePath: f.filePath,
      updatedAt: f.updatedAt,
    }));

    const res = NextResponse.json({ images });
    res.headers.set('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res;
  } catch (err) {
    console.error('Error fetching ImageKit files:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
