'use client';

export function SlideCart() {
  return (
    <section aria-label="Cart" style={{ position: 'fixed', left: 0, top: '30%', padding: '1rem' }}>
      <h3>Async Cart</h3>
      <button type="button">Apple Pay</button>
      <button type="button">Google Pay</button>
    </section>
  );
}
