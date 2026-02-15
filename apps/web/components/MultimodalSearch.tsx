'use client';

import { useState } from 'react';

export function MultimodalSearch() {
  const [query, setQuery] = useState('');

  return (
    <div style={{ display: 'grid', gap: '.5rem', maxWidth: '720px' }}>
      <label htmlFor="search">Multimodal search</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by text or speech transcript"
      />
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button type="button" aria-label="Search with voice">Voice</button>
        <button type="button" aria-label="Upload image for visual search">Upload inspiration image</button>
      </div>
      <small>Current query: {query || '—'}</small>
    </div>
  );
}
