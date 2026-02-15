'use client';

import { useState } from 'react';
import { requestConciergePlan } from '@/lib/agents/client';

export function AgenticAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <aside style={{ position: 'fixed', right: 16, bottom: 16 }}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        Agentic AI Stylist
      </button>
      {open && (
        <div style={{ width: '360px', border: '1px solid #ccc', padding: '1rem', borderRadius: '1rem' }}>
          <h3>Autonomous Shopping Concierge</h3>
          <button
            type="button"
            onClick={() => requestConciergePlan('I need a sleek outfit for a gallery opening in Paris')}
          >
            Curate Look
          </button>
          <p>Rich-media canvas supports uploaded inspiration images + shoppable bundle results.</p>
        </div>
      )}
    </aside>
  );
}
