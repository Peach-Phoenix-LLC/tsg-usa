'use client';

export function CurrencyToggle() {
  return (
    <button
      type="button"
      onClick={() => {
        const current = document.cookie.includes('tsg_currency=AUD') ? 'AUD' : 'USD';
        const next = current === 'USD' ? 'AUD' : 'USD';
        document.cookie = `tsg_currency=${next}; path=/; SameSite=Lax`;
      }}
    >
      USD / AUD
    </button>
  );
}
