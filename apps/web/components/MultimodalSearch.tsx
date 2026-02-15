'use client';

export function MultimodalSearch() {
  return (
    <div style={{ display: 'grid', gap: '.5rem', maxWidth: '720px' }}>
      <label htmlFor="search">Multimodal search</label>
      <input id="search" placeholder="Search by text or speech transcript" />
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button type="button">Voice</button>
        <button type="button">Upload inspiration image</button>
      </div>
    </div>
  );
}
