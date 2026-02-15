'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

const swatches = [
  { name: 'Onyx', hex: '#0B0C0E' },
  { name: 'Slate', hex: '#1C1F26' },
  { name: 'Stark White', hex: '#F9FAFB' },
  { name: 'Flamingo Pink', hex: '#FF5FA6' }
];

function Model({ type, color }: { type: 'phone-case' | 'hat'; color: string }) {
  if (type === 'hat') {
    return (
      <mesh>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
      </mesh>
    );
  }

  return (
    <mesh>
      <boxGeometry args={[1.5, 2.6, 0.2]} />
      <meshStandardMaterial color={color} roughness={0.28} metalness={0.2} />
    </mesh>
  );
}

export function ProductCustomizer3D() {
  const [type, setType] = useState<'phone-case' | 'hat'>('phone-case');
  const [color, setColor] = useState(swatches[0].hex);

  return (
    <section className="relative min-h-[78vh] bg-onyx px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_340px]">
        <div className="h-[64vh] overflow-hidden rounded-2xl border border-white/15">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model type={type} color={color} />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>

        <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="font-serif text-2xl">3D Customizer</h2>
          <p className="mt-1 text-sm text-white/75">Rotate 360°, apply color variants, and save your final custom look.</p>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-[0.2em]">Product</label>
            <select className="mt-2" value={type} onChange={(e) => setType(e.target.value as 'phone-case' | 'hat')}>
              <option value="phone-case">Phone Case</option>
              <option value="hat">Hat</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.2em]">Color Swatches</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {swatches.map((swatch) => (
                <button
                  key={swatch.hex}
                  className="flex items-center gap-2 rounded-lg border border-white/20 px-2 py-2 text-left"
                  onClick={() => setColor(swatch.hex)}
                >
                  <span className="h-5 w-5 rounded-full border border-white/20" style={{ background: swatch.hex }} />
                  <span className="text-xs">{swatch.name}</span>
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 w-full rounded-full border border-white/40 px-4 py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-onyx">
            Add to Cart ({color})
          </button>
        </aside>
      </div>
    </section>
  );
}
