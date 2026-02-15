'use client';

import { useEffect, useState } from 'react';
import type { AdminSettings } from '@/lib/admin/types';

const emptySettings: AdminSettings = {
  apiRateLimitPerMinute: 0,
  apiTimeoutMs: 0,
  productSyncIntervalMinutes: 0,
  dbPoolMax: 0,
  dbPoolMin: 0,
  webhookEndpoint: '',
  agentOrchestratorUrl: '',
  supportRagUrl: '',
  requireMfaForAdmins: false,
  allowGuestCheckout: false,
  cacheEnabled: false,
  clearCacheOnDeploy: false,
  defaultRegion: 'us',
  defaultCurrency: 'USD'
};

export function AdminPanel() {
  const [settings, setSettings] = useState<AdminSettings>(emptySettings);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((response) => response.json())
      .then((data) => setSettings(data.settings as AdminSettings));
  }, []);

  function setNumber<K extends keyof AdminSettings>(key: K, value: string) {
    setSettings((prev) => ({ ...prev, [key]: Number(value) }));
  }

  async function save() {
    setSaving(true);
    const response = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });

    const data = await response.json();
    setSettings(data.settings as AdminSettings);
    setMessage(`Saved at ${new Date().toLocaleTimeString()}`);
    setSaving(false);
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>System Admin Panel</h1>
      <p>Configure operational controls for APIs, sync jobs, RBAC, cache, and agent services.</p>

      <div className="grid">
        <article className="card">
          <h2>API Controls</h2>
          <label>Rate limit / minute</label>
          <input value={settings.apiRateLimitPerMinute} onChange={(e) => setNumber('apiRateLimitPerMinute', e.target.value)} />
          <label>Timeout (ms)</label>
          <input value={settings.apiTimeoutMs} onChange={(e) => setNumber('apiTimeoutMs', e.target.value)} />
        </article>

        <article className="card">
          <h2>Commerce Sync</h2>
          <label>Product sync interval (minutes)</label>
          <input value={settings.productSyncIntervalMinutes} onChange={(e) => setNumber('productSyncIntervalMinutes', e.target.value)} />
          <label>Webhook endpoint</label>
          <input value={settings.webhookEndpoint} onChange={(e) => setSettings((p) => ({ ...p, webhookEndpoint: e.target.value }))} />
        </article>

        <article className="card">
          <h2>Database Pooling</h2>
          <label>Pool min</label>
          <input value={settings.dbPoolMin} onChange={(e) => setNumber('dbPoolMin', e.target.value)} />
          <label>Pool max</label>
          <input value={settings.dbPoolMax} onChange={(e) => setNumber('dbPoolMax', e.target.value)} />
        </article>

        <article className="card">
          <h2>Agent Endpoints</h2>
          <label>Agent Orchestrator URL</label>
          <input value={settings.agentOrchestratorUrl} onChange={(e) => setSettings((p) => ({ ...p, agentOrchestratorUrl: e.target.value }))} />
          <label>Support RAG URL</label>
          <input value={settings.supportRagUrl} onChange={(e) => setSettings((p) => ({ ...p, supportRagUrl: e.target.value }))} />
        </article>

        <article className="card">
          <h2>Security / RBAC</h2>
          <label><input type="checkbox" checked={settings.requireMfaForAdmins} onChange={(e) => setSettings((p) => ({ ...p, requireMfaForAdmins: e.target.checked }))} /> Require MFA for admins</label>
          <label><input type="checkbox" checked={settings.allowGuestCheckout} onChange={(e) => setSettings((p) => ({ ...p, allowGuestCheckout: e.target.checked }))} /> Allow guest checkout</label>
        </article>

        <article className="card">
          <h2>Cache / Storage</h2>
          <label><input type="checkbox" checked={settings.cacheEnabled} onChange={(e) => setSettings((p) => ({ ...p, cacheEnabled: e.target.checked }))} /> Enable cache</label>
          <label><input type="checkbox" checked={settings.clearCacheOnDeploy} onChange={(e) => setSettings((p) => ({ ...p, clearCacheOnDeploy: e.target.checked }))} /> Clear cache on deploy</label>
          <label>Default region</label>
          <select value={settings.defaultRegion} onChange={(e) => setSettings((p) => ({ ...p, defaultRegion: e.target.value as 'us' | 'au' }))}>
            <option value="us">US</option>
            <option value="au">AU</option>
          </select>
          <label>Default currency</label>
          <select value={settings.defaultCurrency} onChange={(e) => setSettings((p) => ({ ...p, defaultCurrency: e.target.value as 'USD' | 'AUD' }))}>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
          </select>
        </article>
      </div>

      <button type="button" onClick={save} disabled={saving}>
        {saving ? 'Saving…' : 'Save Settings'}
      </button>
      <p>{message}</p>
    </section>
  );
}
