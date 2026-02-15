'use client';

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => {
        const current = document.documentElement.dataset.theme;
        document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark';
      }}
    >
      Light/Dark
    </button>
  );
}
