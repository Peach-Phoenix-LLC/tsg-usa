'use client';

import { useEffect, useState } from 'react';
import { requestCroIntervention } from '@/lib/agents/client';

export function ProactiveCROTrigger() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 4) {
        requestCroIntervention({ signal: 'exit-intent', path: window.location.pathname })
          .then(() => setMessage('Limited-time: unlock complimentary express shipping at checkout.'))
          .catch(() => setMessage(null));
      }
    };

    const onActivity = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        requestCroIntervention({ signal: 'cart-hesitation', dwellMs: 16000 })
          .then(() => setMessage('Need help choosing? Your stylist can assemble a complete look in one tap.'))
          .catch(() => setMessage(null));
      }, 16000);
    };

    document.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousemove', onActivity);
    onActivity();

    return () => {
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousemove', onActivity);
      clearTimeout(idleTimer);
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <div role="status" aria-live="polite" className="assistant-panel" style={{ position: 'fixed', bottom: 88, left: 16, zIndex: 450 }}>
      <strong>Personalized assist</strong>
      <p>{message}</p>
    </div>
  );
}
