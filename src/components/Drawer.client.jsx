import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


/**
 * A Drawer component that opens on user click.
 * @param open - Boolean state. If `true`, then the drawer opens.
 * @param onClose - Function should set the open state.
 * @param children - React children node.
 */
function Drawer({ open, onClose, children }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed mt-28" />
        </Transition.Child>

        <div className="fixed mt-28">
          <div className="absolute inset-0 overflow-scroll">
            <div className="fixed top-0 right-0 flex w-screen md:12/12 lg:w-6/12 h-full pl-0 md:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-full transform text-left align-middle mt-14 mb-14 transition-all antialiased bg-neutral-50 border border-black text-base md:text-2xl font-nanum font-trinh-green font-bold overflow-hidden">
                  <header className="sticky top-0 flex items-center justify-between px-4 md:px-8 py-2 md:py-4 border-b border-dotted border-trinh-green">
                    <h2
                      id="cart-contents"
                      className="whitespace-pre-wrap max-w-prose"
                    >
                      Cart
                    </h2>
                    <button
                      type="button"
                      className="p-4 -m-4 transition text-primary hover:text-primary/50"
                      onClick={onClose}
                    >
                      Close ⓧ
                    </button>
                  </header>
                  <div className="h-full pt-6 mb-14">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export { Drawer };

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}

function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-5 h-5"
    >
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
