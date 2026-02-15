'use client';

import Link from 'next/link';

const collections = [
  { name: 'Paris', slug: 'paris' },
  { name: 'Peach Phoenix', slug: 'peach-phoenix' },
  { name: 'Pink Flamingo Noir', slug: 'pink-flamingo-noir' }
];

export function ExclusiveCollectionsCarousel() {
  return (
    <section aria-label="Exclusive collections" style={{ padding: '2rem' }}>
      <h2>Exclusive Collections</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
        {collections.map((c) => (
          <Link key={c.slug} href={`/collections/${c.slug}`} style={{ minWidth: '220px' }}>
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
