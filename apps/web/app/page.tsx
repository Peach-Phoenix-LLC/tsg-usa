import { PremiumBoutiqueHomepage } from '@/components/PremiumBoutiqueHomepage';

export default function HomePage() {
  return <PremiumBoutiqueHomepage />;
import { DynamicHero } from '@/components/DynamicHero';
import { ExclusiveCollectionsCarousel } from '@/components/ExclusiveCollectionsCarousel';
import { ProductGrid } from '@/components/ProductGrid';
import { PeachesDashboard } from '@/components/PeachesDashboard';

export default function HomePage() {
  return (
    <>
      <DynamicHero />
      <ExclusiveCollectionsCarousel />
      <ProductGrid
        category="Fashion"
        predictiveSortEndpoint="/api/agents/merchandising/reorder"
      />
      <PeachesDashboard />
    </>
  );
}
