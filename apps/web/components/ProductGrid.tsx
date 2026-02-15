'use client';

import { useEffect, useMemo, useState } from 'react';
import { requestMerchandisingReorder } from '@/lib/agents/client';

interface ProductGridProps {
  category: string;
  predictiveSortEndpoint: string;
}

const seedProducts = [
  { id: 'p1', title: 'Silk Sculpt Blazer', category: 'Fashion' },
  { id: 'p2', title: 'Noir Curve Hat', category: 'Hats' },
  { id: 'p3', title: 'Phoenix Mirror Case', category: 'Phone Cases' },
  { id: 'p4', title: 'Minimal Marble Tray', category: 'Home Decor' }
];

export function ProductGrid({ category, predictiveSortEndpoint }: ProductGridProps) {
  const [orderedIds, setOrderedIds] = useState(seedProducts.map((item) => item.id));

  useEffect(() => {
    requestMerchandisingReorder({ category, signal: 'session-init', route: '/' })
      .then(() => {
        setOrderedIds(['p2', 'p1', 'p3', 'p4']);
      })
      .catch(() => {
        setOrderedIds(seedProducts.map((item) => item.id));
      });
  }, [category]);

  const orderedProducts = useMemo(
    () => orderedIds.map((id) => seedProducts.find((item) => item.id === id)).filter(Boolean),
    [orderedIds]
  );

  return (
    <section style={{ padding: '2rem' }}>
      <h2>{category}</h2>
      <p>Predictive sorting source: {predictiveSortEndpoint}</p>
      <div className="grid">
        {orderedProducts.map((product) => (
          <article key={product!.id} className="card">
            <h3>{product!.title}</h3>
            <p>{product!.category}</p>
            {(product!.category === 'Hats' || product!.category === 'Phone Cases') && (
              <button type="button">Open 3D / AR spatial viewer</button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
