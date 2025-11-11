import Image from 'next/image';

export const revalidate = 300;

async function fetchImages() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/imagekit-files`, {
    next: { revalidate },
  });

  if (!response.ok) {
    console.error('Failed to fetch images from ImageKit:', response.statusText);
    return [];
  }

  const data = await response.json();
  return data.images ?? [];
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
