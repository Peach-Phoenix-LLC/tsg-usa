import { MultimodalSearch } from './MultimodalSearch';

const categories = ['Fashion', 'Hats', 'Phone Cases', 'Home Decor'];

export function MegaMenu() {
  return (
    <nav aria-label="Primary" style={{ padding: '0 1rem 1rem' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <MultimodalSearch />
    </nav>
  );
}
