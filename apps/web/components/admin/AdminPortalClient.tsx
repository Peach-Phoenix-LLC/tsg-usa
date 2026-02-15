'use client';

import { useMemo, useState } from 'react';

type ProductRow = {
  id: string;
  collection: string;
  sku: string;
  price: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Backorder';
  exclusiveTier: boolean;
  visible: boolean;
};

const initialRows: ProductRow[] = [
  { id: '1', collection: 'Pink Flamingo Noir', sku: 'PFN-1001', price: 129, stockStatus: 'In Stock', exclusiveTier: true, visible: true },
  { id: '2', collection: 'Peach Phoenix', sku: 'PP-2033', price: 98, stockStatus: 'Low Stock', exclusiveTier: false, visible: true },
  { id: '3', collection: 'The Atelier Selection', sku: 'AT-3331', price: 172, stockStatus: 'Backorder', exclusiveTier: true, visible: false }
];

const sidebar = ['Overview', 'Inventory', 'Orders', 'Analytics'] as const;

export function AdminPortalClient({ adminName }: { adminName: string }) {
  const [rows, setRows] = useState<ProductRow[]>(initialRows);
  const [active, setActive] = useState<(typeof sidebar)[number]>('Inventory');
  const [bullets, setBullets] = useState('Breathable fabric\nTailored silhouette\nStreet-lux appeal');

  const inStockCount = useMemo(() => rows.filter((row) => row.stockStatus === 'In Stock').length, [rows]);

  function updateRow(id: string, patch: Partial<ProductRow>) {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  return (
    <div className="min-h-screen bg-onyx text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-slate p-5">
          <h1 className="font-serif text-2xl">tsgabrielle® Admin</h1>
          <p className="mt-1 text-xs text-white/70">Welcome, {adminName}</p>
          <nav className="mt-6 space-y-2">
            {sidebar.map((item) => (
              <button
                key={item}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${active === item ? 'bg-white text-onyx' : 'hover:bg-white/10'}`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <main className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-slate p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">Product Management</h2>
              <span className="text-sm text-white/70">In-stock SKUs: {inStockCount}</span>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-white/70">
                    <th className="py-2">Collection</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>Exclusive Tier</th>
                    <th>Visible</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-t border-white/10">
                      <td className="py-3">{row.collection}</td>
                      <td>{row.sku}</td>
                      <td>
                        <input
                          className="w-24"
                          value={row.price}
                          onChange={(e) => updateRow(row.id, { price: Number(e.target.value) })}
                        />
                      </td>
                      <td>
                        <select value={row.stockStatus} onChange={(e) => updateRow(row.id, { stockStatus: e.target.value as ProductRow['stockStatus'] })}>
                          <option>In Stock</option>
                          <option>Low Stock</option>
                          <option>Backorder</option>
                        </select>
                      </td>
                      <td>
                        <input type="checkbox" checked={row.exclusiveTier} onChange={(e) => updateRow(row.id, { exclusiveTier: e.target.checked })} />
                      </td>
                      <td>
                        <input type="checkbox" checked={row.visible} onChange={(e) => updateRow(row.id, { visible: e.target.checked })} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-slate p-6">
            <h3 className="font-serif text-xl">AI Product Description Generator</h3>
            <p className="mt-1 text-sm text-white/70">Vertex AI endpoint placeholder for high-converting product copy generation.</p>
            <textarea value={bullets} onChange={(e) => setBullets(e.target.value)} className="mt-4 h-32" />
            <div className="mt-3 flex gap-3">
              <button className="rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.18em]">Generate Copy</button>
              <code className="rounded-md bg-black/30 px-3 py-2 text-xs">POST /api/agents/concierge/plan (vertex placeholder)</code>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
