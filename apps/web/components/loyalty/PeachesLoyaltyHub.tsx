'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tiers = [
  { name: 'Member', min: 0 },
  { name: 'VIP', min: 8000 },
  { name: 'Elite', min: 16000 }
] as const;

const points = 12460;

export function PeachesLoyaltyHub() {
  const [copied, setCopied] = useState(false);
  const activeTier = [...tiers].reverse().find((tier) => points >= tier.min) ?? tiers[0];
  const nextTier = tiers.find((tier) => tier.min > points);
  const pct = nextTier ? Math.min(100, Math.round((points / nextTier.min) * 100)) : 100;

  return (
    <section className="min-h-screen bg-onyx px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-6 rounded-3xl border border-white/15 bg-slate p-8 md:grid-cols-[240px_1fr]">
          <div className="grid place-items-center">
            <svg viewBox="0 0 120 120" className="h-40 w-40 -rotate-90">
              <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.2)" strokeWidth="10" fill="none" />
              <circle cx="60" cy="60" r="52" stroke="white" strokeWidth="10" fill="none" strokeDasharray="327" strokeDashoffset={327 - (327 * pct) / 100} strokeLinecap="round" />
            </svg>
            <span className="-mt-24 text-2xl font-semibold">{pct}%</span>
          </div>

          <div>
            <p className="text-sm text-white/70">Welcome back, Gabrielle</p>
            <h1 className="mt-2 font-serif text-4xl">Peaches Loyalty Hub</h1>
            <p className="mt-2 text-white/75">Current tier: {activeTier.name} · Points: {points.toLocaleString()}</p>
            <p className="mt-1 text-sm text-white/65">{nextTier ? `${nextTier.min - points} points to ${nextTier.name}` : 'Top tier unlocked'}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-5 ${points >= tier.min ? 'border-white/40 bg-white/10' : 'border-white/10 bg-black/20'}`}
            >
              <h2 className="font-serif text-2xl">{tier.name}</h2>
              <p className="text-sm text-white/70">Unlock threshold: {tier.min.toLocaleString()} pts</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-slate p-6">
            <h3 className="font-serif text-2xl">Reward History</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>• +240 pts · Paris Collection purchase</li>
              <li>• +120 pts · Accessories order</li>
              <li>• +500 pts · Seasonal campaign bonus</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/15 bg-slate p-6">
            <h3 className="font-serif text-2xl">Exclusive Drops</h3>
            {activeTier.name === 'Elite' ? (
              <p className="mt-3 text-sm text-white/80">You have unlocked invitation-only releases and private runway capsules.</p>
            ) : (
              <p className="mt-3 text-sm text-white/70">Reach Elite tier to access invitation-only capsule drops.</p>
            )}
            <button
              className="mt-5 rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.18em]"
              onClick={async () => {
                await navigator.clipboard.writeText('https://tsgabrielle.us/refer?code=PEACHES-VIP');
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? 'Link Copied' : 'Refer a Friend'}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
