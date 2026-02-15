'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-onyx text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-fashion-model-1579/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6"
      >
        <p className="font-serif text-lg text-white/80">tsgabrielle® | Modern Luxury Performance.</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Designed for those who move. The pinnacle of modern luxury.
        </h1>
        <div className="mt-8">
          <a
            href="#boutique"
            className="group inline-flex items-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm uppercase tracking-[0.2em] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-onyx"
          >
            Explore Boutique
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
