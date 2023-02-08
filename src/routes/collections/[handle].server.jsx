import {
    gql,
    useShopQuery,
    useRouteParams,
    useServerAnalytics,
    ShopifyAnalyticsConstants,
    Seo,
  } from "@shopify/hydrogen";
  
  import { Layout } from "../../components/Layout.server";
  import ProductCard from "../../components/ProductCard.server";
  import { Suspense } from "react";
  
  export default function Collection() {
    const { handle } = useRouteParams();
  
    const {
      data: { collection },
    } = useShopQuery({
      query: QUERY,
      variables: {
        handle,
      },
    });
  
    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.collection,
        resourceId: collection.id,
      },
    });
  
    return (
      <Layout>
        <Suspense>
          <Seo type="collection" data={collection} />
        </Suspense>
            <div className="font-nanum pt-24 pb-24">
                <section className="w-full px-8">
                    <div className="grid grid-cols-2 gap-12">
                        {collection.products.nodes.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
      </Layout>
    );
  }
  
  const QUERY = gql`
    query CollectionDetails($handle: String!) {
      collection(handle: $handle) {
        id
        title
        description
        seo {
          description
          title
        }
        image {
          id
          url
          width
          height
          altText
        }
        products(first: 8) {
          nodes {
            id
            title
            publishedAt
            handle
            variants(first: 1) {
              nodes {
                id
                image {
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  amount
                  currencyCode
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  `;
  