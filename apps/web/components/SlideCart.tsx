'use client';

import { useState } from 'react';
import { requestCheckoutOrchestration } from '@/lib/agents/client';

export function SlideCart() {
  const [status, setStatus] = useState('Idle');

  async function runCheckoutFlow() {
    setStatus('Preparing 1-click checkout…');
    try {
      await requestCheckoutOrchestration({
        userId: 'demo-user',
        cartId: 'demo-cart',
        paymentMethods: ['ApplePay', 'GooglePay']
      });
      setStatus('Checkout optimized with Peaches tier + shipping selection.');
    } catch {
      setStatus('Checkout orchestrator unavailable.');
    }
  }

  return (
    <section aria-label="Cart" style={{ position: 'fixed', left: 0, top: '30%', padding: '1rem' }}>
      <h3>Async Cart</h3>
      <button type="button" onClick={runCheckoutFlow}>Apple Pay</button>
      <button type="button" onClick={runCheckoutFlow}>Google Pay</button>
      <p>{status}</p>
    </section>
  );
}
