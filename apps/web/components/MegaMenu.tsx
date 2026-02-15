import Link from 'next/link';
import { MultimodalSearch } from './MultimodalSearch';

const categories = [
  { name: 'Fashion', href: '/collections/fashion' },
  { name: 'Hats', href: '/collections/hats' },
  { name: 'Phone Cases', href: '/collections/phone-cases' },
  { name: 'Home Decor', href: '/collections/home-decor' },
  { name: 'Admin Panel', href: '/admin' }
] as const;

export function MegaMenu() {
  return (
    <nav aria-label="Primary" style={{ padding: '0 1rem 1rem' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.href}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <MultimodalSearch />
    </nav>
  );
}
