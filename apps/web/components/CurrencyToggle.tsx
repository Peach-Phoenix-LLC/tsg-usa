'use client';

import { useEffect, useState } from 'react';

type Currency = 'USD' | 'AUD';

function parseCurrencyCookie(): Currency {
  if (typeof document === 'undefined') {
    return 'USD';
  }

  const match = document.cookie.match(/(?:^|; )tsg_currency=(USD|AUD)/);
  return (match?.[1] as Currency | undefined) ?? 'USD';
}

export function CurrencyToggle() {
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    setCurrency(parseCurrencyCookie());
  }, []);

  function toggleCurrency() {
    const next: Currency = currency === 'USD' ? 'AUD' : 'USD';
    setCurrency(next);
    document.cookie = `tsg_currency=${next}; path=/; SameSite=Lax; Max-Age=31536000`;
  }

  return (
    <button type="button" onClick={toggleCurrency} aria-label="Toggle display currency">
      {currency}
    </button>
  );
}
