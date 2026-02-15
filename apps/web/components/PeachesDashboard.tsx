'use client';

const tiers = [
  { name: 'Blush', min: 0, perks: 'Early access to selected drops' },
  { name: 'Nectar Gold', min: 10000, perks: 'Priority support + shipping boost' },
  { name: 'Phoenix Black', min: 25000, perks: 'Private capsule + concierge styling' }
];

export function PeachesDashboard() {
  const points = 14260;
  const activeTier = tiers.slice().reverse().find((tier) => points >= tier.min) ?? tiers[0];

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Peaches Rewards</h2>
      <p>Current tier: {activeTier.name}</p>
      <p>Points: {points.toLocaleString()}</p>
      <p>Points per $1: 12</p>
      <p>Current perks: {activeTier.perks}</p>
    </section>
  );
}
