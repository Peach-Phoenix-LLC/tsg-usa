'use client';

import { motion } from 'framer-motion';

const collections = [
  {
    title: 'tsgabrielle® Infinite (Aura N° 01)',
    description: 'Defining modern luxury with high-performance fashion.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Velvet Revolution (Collection 2025)',
    description: 'Soft textures meeting hard lines. The new standard of elegance.',
    image:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Urban Nomads (City Series)',
    description: 'Designed for the movement of the metropolis.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Ethereal Glow (Summer Edit)',
    description: 'Lightweight fabrics that breathe with you.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Pink Flamingo Noir',
    description: "Luxury men's streetwear collection.",
    image:
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export function CollectionGrid() {
  return (
    <section id="boutique" className="bg-white px-6 py-20 text-onyx">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl md:text-5xl">The Atelier Selection</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 hidden gap-5 md:grid md:grid-cols-12"
        >
          {collections.map((collection, index) => (
            <motion.article
              key={collection.title}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 ${
                index % 3 === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'
              }`}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="font-serif text-2xl">{collection.title}</h3>
                <p className="mt-1 text-sm text-white/80">{collection.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:hidden">
          {collections.map((collection) => (
            <article key={collection.title} className="min-w-[85vw] snap-center overflow-hidden rounded-2xl border border-slate-200">
              <img src={collection.image} alt={collection.title} className="h-72 w-full object-cover" />
              <div className="bg-slate px-5 py-4 text-white">
                <h3 className="font-serif text-xl">{collection.title}</h3>
                <p className="text-sm text-white/80">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
