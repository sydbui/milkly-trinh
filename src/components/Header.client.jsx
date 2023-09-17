import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";
import { CartDetails } from "./CartDetails.client";

export default function Header({ shop }) {
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  const isHome = pathname === "/";
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid h-full overflow-hidden overflow-scroll">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
            <CartDetails onClose={closeDrawer} />
          </Drawer.Title>
        </div>
      </Drawer>
      <header>
        <div className="container fixed font-nanum w-screen">
            
            <div className="flex justify-between pb-1.5 pt-1.5 pr-4 pl-4 fixed w-screen border-solid border border-b-trinh-green bg-white"> 
                <div className={isHome ? 'shrink justify-start pb-1.5 pt-1.5 pr-2 pl-2 text-base md:text-2xl text-white hover:italic bg-contain bg-center bg-no-repeat bg-home-background font-bold' : 'shrink justify-start pb-1.5 pt-1.5 pr-2 pl-2 text-base md:text-2xl text-black hover:italic font-bold'}>
                    <Link to='/'>✿ {shop.name} ✿</Link>
                </div>
                <div className="flex flex-row justify-between text-base md:text-2xl pt-1.5 font-trinh-green font-bold">
                    <div className={pathname === "/collections/frontpage" ? " px-4 text-white bg-contain bg-center bg-no-repeat hover:italic bg-shop-background" : "hover:italic"}>
                        <Link to='/collections/frontpage'>Shop</Link>
                    </div>
                    <div className="pl-10">
                        <button
                        onClick={openDrawer}
                        className="relative flex items-center justify-between hover:italic"
                        >
                            Cart <CartBadge/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container font-nanum font-bold">
              <div className='flex justify-end pb-1.5 pt-1.5 pr-4 pl-4 fixed bottom-0 w-screen border-solid border border-t-trinh-green bg-white'>
                <div className='flex pb-1.5 pt-1.5 text-base md:text-2xl space-x-6 text-trinh-green'>
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
      </header>
      {/* <header
        role="banner"
        className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${
          isHome ? "bg-black/80 text-white" : "bg-white/80"
        }`}
      >
        <div className="flex gap-12">
          <Link className="font-bold" to="/">
            {shop.name}
          </Link>
        </div>

        <button
          onClick={openDrawer}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconBag />
          <CartBadge dark={isHome} />
        </button>
      </header> */}
    </>
  );
}


function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return <span className="flex pl-2"> (0) </span>;
  }
  return (
    <div className="flex pl-2">
      <span> ({totalQuantity}) </span>
    </div>
  );
}

function IconClose() {
    return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
    );
    }