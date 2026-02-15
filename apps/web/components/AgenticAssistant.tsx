'use client';

import { useState } from 'react';
import { requestConciergePlan } from '@/lib/agents/client';

interface ConciergeResponse {
  agent: string;
  model: string;
  status: string;
  capabilities: string[];
}

export function AgenticAssistant() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState('I need a sleek outfit for a gallery opening in Paris');
  const [previewImage, setPreviewImage] = useState<string | undefined>();
  const [result, setResult] = useState<ConciergeResponse | null>(null);
  const [pending, setPending] = useState(false);

  async function curateLook() {
    setPending(true);
    try {
      const payload = { intent, inspirationImage: previewImage };
      const data = await requestConciergePlan(payload);
      setResult(data as ConciergeResponse);
    } finally {
      setPending(false);
    }
  }

  return (
    <aside style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 500 }}>
export function AgenticAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <aside style={{ position: 'fixed', right: 16, bottom: 16 }}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        Agentic AI Stylist
      </button>
      {open && (
        <div className="assistant-panel">
          <h3>Autonomous Shopping Concierge</h3>
          <label htmlFor="intent">Intent</label>
          <textarea id="intent" value={intent} onChange={(event) => setIntent(event.target.value)} rows={4} />

          <label htmlFor="inspiration">Inspiration image</label>
          <input
            id="inspiration"
            type="file"
            accept="image/*"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }

              const encoded = await file.arrayBuffer();
              const bytes = new Uint8Array(encoded);
              let binary = '';
              bytes.forEach((b) => {
                binary += String.fromCharCode(b);
              });
              setPreviewImage(`data:${file.type};base64,${btoa(binary)}`);
            }}
          />

          {previewImage && <img src={previewImage} alt="Inspiration preview" style={{ width: '100%' }} />}

          <button type="button" onClick={curateLook} disabled={pending}>
            {pending ? 'Curating…' : 'Curate look'}
          </button>

          {result && (
            <div>
              <p>Agent: {result.agent}</p>
              <p>Model: {result.model}</p>
              <p>Status: {result.status}</p>
              <p>Capabilities: {result.capabilities.join(', ')}</p>
            </div>
          )}
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
