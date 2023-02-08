import {
    useShopQuery,
    CacheLong,
    gql,
    useUrl,
    Link,
    Seo,
  } from "@shopify/hydrogen";
  import { Suspense } from "react";
  import Header from "./Header.client";
  /**
   * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
   */
  export function Layout({ children }) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";
  
    const {
      data: { shop },
    } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
    });
  
    return (
      <>
        <Suspense>
          <Seo
            type="defaultSeo"
            data={{
              title: shop.name,
              description: shop.description,
            }}
          />
        </Suspense>
        <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
          <div className="">
            <a href="#mainContent" className="sr-only">
              Skip to content
            </a>
          </div>
          <Header shop={shop} />
          {/* <div className="container fixed top-0 font-nanum">
                <div className="grid grid-cols-2 w-screen pb-1.5 pt-1.5 pr-4 pl-4 border-solid border border-b-trinh-green bg-white"> 
                  <div className="flex justify-start">
                    <div className='shrink pb-1.5 pt-1.5 pr-2 pl-2 text-2xl text-white hover:italic bg-contain bg-center bg-no-repeat bg-home-background'>
                    <Link to='/'>✿ Trinh's Studio ✿</Link>
                    </div>
                  </div>
                  <div className="flex justify-end pb-1.5 pt-1.5 text-2xl space-x-6 text-trinh-green">
                    <div className="hover:italic">
                      <Link to='/shop'>Shop</Link>
                    </div>
                    <div className="hover:italic">
                      <Link to='/cart'>Cart</Link>
                    </div>
                  </div>
            </div>
          </div> */}
  
          <main role="main" id="mainContent" className="flex-grow">
            <Suspense>{children}</Suspense>
          </main>
          <div className="container font-nanum">
              <div className='flex justify-end pb-1.5 pt-1.5 pr-4 pl-4 fixed bottom-0 w-screen border-solid border border-t-trinh-green bg-white'>
                <div className='flex pb-1.5 pt-1.5 text-2xl space-x-6 text-trinh-green'>
                <div className="hover:italic">
                  <Link to='/about'>About</Link>
                </div>
                <div className="hover:italic">
                <Link to='/faq'>FAQs</Link>
                </div>
              </div>
              </div>
            </div>
        </div>
      </>
    );
  }
  const SHOP_QUERY = gql`
    query ShopInfo {
      shop {
        name
        description
      }
    }
  `;