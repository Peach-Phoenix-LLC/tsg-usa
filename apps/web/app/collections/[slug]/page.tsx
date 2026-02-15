interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const isPinkFlamingo = slug === 'pink-flamingo-noir';

  return (
    <section className={isPinkFlamingo ? 'luxury-streetwear' : ''} style={{ padding: '2rem' }}>
      <h1>{slug.replaceAll('-', ' ')}</h1>
      <p>Spatial carousel and collection experience placeholder.</p>
    </section>
  );
}
