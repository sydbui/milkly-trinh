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
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <header>
        <div className="container fixed font-nanum w-screen">
            
            <div className="flex justify-between pb-1.5 pt-1.5 pr-16 pl-4 fixed w-screen border-solid border border-b-trinh-green bg-white"> 
                <div className='shrink justify-start pb-1.5 pt-1.5 pr-2 pl-2 text-2xl text-white hover:italic bg-contain bg-center bg-no-repeat bg-home-background'>
                    <Link to='/'>✿ {shop.name} ✿</Link>
                </div>
                <div className="flex flex-row justify-between text-2xl w-36 pt-1.5">
                    <div className="hover:italic">
                        <Link to='/shop'>Shop</Link>
                    </div>
                    <div className="hover:italic">
                        <button
                        onClick={openDrawer}
                        className="relative flex items-center justify-center w-8 h-8"
                        >
                            Cart <CartBadge/>
                        </button>
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
    return <span> (0) </span>;
  }
  return (
    <div
    >
      <span> ({totalQuantity}) </span>
    </div>
  );
}
