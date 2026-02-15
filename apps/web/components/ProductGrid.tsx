'use client';

interface ProductGridProps {
  category: string;
  predictiveSortEndpoint: string;
}

export function ProductGrid({ category, predictiveSortEndpoint }: ProductGridProps) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{category}</h2>
      <p>Products auto-sorted by predictive analytics from: {predictiveSortEndpoint}</p>
      <p>3D/AR viewer hook enabled for Hats and Phone Cases SKUs.</p>
    </section>
  );
}
