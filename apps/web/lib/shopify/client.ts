import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storefrontDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? 'example.myshopify.com';
const publicToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? 'public-token-placeholder';

export const shopifyClient = createStorefrontApiClient({
  storeDomain: storefrontDomain,
  apiVersion: '2025-10',
  publicAccessToken: publicToken
});

export async function fetchCollectionHandles() {
  const query = `#graphql
    query CollectionHandles {
      collections(first: 12) {
        nodes {
          id
          title
          handle
        }
      }
    }
  `;

  return shopifyClient.request(query);
}
