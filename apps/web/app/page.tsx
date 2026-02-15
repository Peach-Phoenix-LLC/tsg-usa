'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PromoBanner } from '@/components/PromoBanner';
import { Hero } from '@/components/Hero';
import { CollectionGrid } from '@/components/CollectionGrid';

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="bg-white text-onyx">
      <PromoBanner />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-serif text-2xl">tsgabrielle®</div>

          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            <a href="#boutique">Boutique</a>
            <a href="#collections">Collections</a>
            <a href="#atelier">The Atelier Selection</a>
            <a href="/customizer">Customizer</a>
            <a href="/peaches">Peaches</a>
            <a href="/admin/portal">Admin</a>
          </nav>

          <div className="flex items-center gap-4 text-xl">
            <button aria-label="Open search" onClick={() => setSearchOpen(true)}>⌕</button>
            <button aria-label="Account">◌</button>
            <button aria-label="Open cart" onClick={() => setCartOpen(true)}>👜</button>
          </div>
        </div>
      </header>

      <Hero />
      <CollectionGrid />

      <section className="bg-onyx px-6 py-16 text-white" id="collections">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/15 bg-slate p-8 md:grid-cols-[220px_1fr]">
          <div className="grid place-items-center">
            <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
              <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.2)" strokeWidth="10" fill="none" />
              <circle
                cx="60"
                cy="60"
                r="52"
                stroke="white"
                strokeLinecap="round"
                strokeDasharray="327"
                strokeDashoffset="78"
                strokeWidth="10"
                fill="none"
              />
            </svg>
            <span className="-mt-20 text-2xl font-semibold">76%</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Peaches Membership</p>
            <h3 className="mt-3 font-serif text-3xl">Unlock Exclusive Tiers</h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Access private capsule drops, early atelier reservations, and adaptive concierge support tailored to your movement profile.
            </p>
            <button className="mt-6 rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-onyx">
              Join Peaches
            </button>
          </div>
        </div>
      </section>

      <footer id="atelier" className="border-t border-slate-200 bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-slate-700 md:grid-cols-4">
          <div>
            <h4 className="font-serif text-lg text-onyx">tsgabrielle®</h4>
            <p className="mt-2">Inquiries: contact@tsgabrielle.us</p>
          </div>
          <div>
            <h5 className="font-semibold uppercase tracking-[0.16em] text-onyx">Boutique</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Performance Tailoring</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold uppercase tracking-[0.16em] text-onyx">Collections</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#">Velvet Revolution</a></li>
              <li><a href="#">Urban Nomads</a></li>
              <li><a href="#">Pink Flamingo Noir</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold uppercase tracking-[0.16em] text-onyx">Connect</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li>© 2026 tsgabrielle®. All rights reserved.</li>
            </ul>
          </div>
        </div>
      </footer>

      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-onyx/95 px-6 py-10 text-white"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-3xl">Multimodal Search</h3>
              <button onClick={() => setSearchOpen(false)} aria-label="Close search">✕</button>
            </div>
            <input
              className="w-full rounded-xl border border-white/30 bg-white/5 px-5 py-4 text-lg"
              placeholder="Search by text, upload image, or voice intent"
            />
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-white/40 px-4 py-2">Voice</button>
              <button className="rounded-full border border-white/40 px-4 py-2">Image Upload</button>
            </div>
          </div>
        </motion.div>
      )}

      <motion.aside
        initial={false}
        animate={{ x: cartOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-slate-300 bg-white p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl">Cart</h3>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart">✕</button>
        </div>
        <p className="mt-6 text-slate-600">Your curated selections will appear here.</p>
      </motion.aside>
    </div>
  );
}
