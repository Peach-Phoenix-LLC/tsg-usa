'use client';

import { motion } from 'framer-motion';

export function DynamicHero() {
  return (
    <section className="hero" aria-live="polite">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hyper-personalized styles for your next statement moment.
      </motion.h1>
      <p>
        Layout and featured products adapt to real-time affinity signals from the Dynamic Merchandising Agent.
      </p>
    </section>
  );
}
