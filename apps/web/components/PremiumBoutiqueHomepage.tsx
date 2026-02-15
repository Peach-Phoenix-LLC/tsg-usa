'use client';

import { useMemo, useState } from 'react';

type Product = {
  id: string;
  title: string;
  priceUsd: number;
  image: string;
};

const links = ['Home', 'New Products', 'Catalog', 'Home Décor', 'Accessories', 'Contact'] as const;

const products: Product[] = [
  {
    id: 'paris-bag',
    title: 'Paris - Notre-Dame Cathedral Crossbody Bag',
    priceUsd: 189,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'louvre-glass',
    title: 'Louvre Pyramid Stemless Wine Glass',
    priceUsd: 54,
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'arc-backpack',
    title: 'Arc de Triomphe Minimalist Backpack',
    priceUsd: 172,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'transflower-leggings',
    title: 'TransFLOWer™ Leggings',
    priceUsd: 78,
    image: 'https://images.unsplash.com/photo-1506629905607-d405b7a3b7d4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dad-hat',
    title: 'Minimalist Dad Hat',
    priceUsd: 46,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80'
  }
];

export function PremiumBoutiqueHomepage() {
  const [search, setSearch] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((product) => [product.id, 1]))
  );
  const [cart, setCart] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return products;
    }

    return products.filter((product) => product.title.toLowerCase().includes(query));
  }, [search]);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, quantity) => sum + quantity, 0),
    [cart]
  );

  function addToCart(productId: string) {
    const quantity = quantities[productId] ?? 1;
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + quantity }));
  }

  return (
    <>
      <header className="boutique-nav" aria-label="Global Navigation">
        <div className="boutique-brand">
          <span className="script">tsgabrielle®</span>
        </div>

        <nav>
          <ul className="boutique-nav-links">
            {links.map((link) => (
              <li key={link}>
                <a href={link === 'New Products' ? '#new-products' : '#'}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="boutique-nav-tools">
          <div className="search-shell">
            <input
              aria-label="Search products"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="button" onClick={() => setSearch('')}>Clear</button>
          </div>
          <button type="button" aria-label="User profile">👤</button>
          <button type="button" aria-label="Shopping cart">🛒 {cartCount}</button>
        </div>
      </header>

      <section className="boutique-hero">
        <p className="script">quiet luxury in motion</p>
        <h1>tsgabrielle® .net</h1>
        <p>Premium essentials curated by Peach Phoenix, LLC for modern statement living.</p>
        <a className="cta" href="#new-products">Discover New Products</a>
      </section>

      <section id="new-products" className="products-section">
        <h2>New Products · Paris Collection</h2>
        <div className="product-grid">
          {filtered.map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-meta">
                <h3>{product.title}</h3>
                <p>${product.priceUsd.toFixed(2)} USD</p>
                <label htmlFor={`qty-${product.id}`}>Quantity</label>
                <select
                  id={`qty-${product.id}`}
                  value={quantities[product.id] ?? 1}
                  onChange={(event) =>
                    setQuantities((prev) => ({ ...prev, [product.id]: Number(event.target.value) }))
                  }
                >
                  {[1, 2, 3, 4, 5].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>

                <div className="product-actions">
                  <button type="button" onClick={() => addToCart(product.id)}>Add to Cart</button>
                  <a href="#">View Details</a>
                </div>

                <div className="fast-checkout">
                  <button type="button">PayPal</button>
                  <button type="button">Shop Pay</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="boutique-footer">
        <div className="footer-logo" aria-label="tsgabrielle logo">tg</div>
        <p>2026© tsgabrielle®</p>
        <p>tsgabrielle® is a trademark operated under Peach Phoenix, LLC.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </footer>
    </>
  );
}
