import {useUrl, Link} from '@shopify/hydrogen';
import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";


export default function Home() {
  const { pathname } = useUrl();
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum text-base md:text-2xl'> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 px-14 py-24 w-screen h-screen">
                <div>
                  <div className='underline pb-14'>
                    About
                  </div> 
                  <div className='pb-8'>
                    I made this shop to share with everyone my favorite hobbies. I made this shop to share with everyone my favorite hobbies. 
                    I made this shop to share with everyone my favorite hobbies. I made this shop to share with everyone my favorite hobbies. 
                    I made this shop to share with everyone my favorite hobbies. I made this shop to share with everyone my favorite hobbies. 
                  </div>
                  <div> 
                    Pricing on ceramics can be inquired through email. I made this shop to share with everyone my favorite hobbies.
                  </div>
                </div>
                <div>
                  <div className='underline pb-14'>
                  Contact information
                  </div> 
                  <div className='pb-4'>
                    Email ~ hello@trinh.studio
                  </div>
                  <div className='pb-4'>
                    Instagram ~ @milkytrinh
                  </div>
                  <div className='pb-4'>
                    Twitter ~ @milkytrinh
                  </div>
                </div>
            </div>
            <div className="container font-nanum">
              <div className='flex justify-end pb-1.5 pt-1.5 pr-4 pl-4 fixed bottom-0 w-screen border-solid border border-t-trinh-green bg-white'>
                <div className='flex pb-1.5 pt-1.5  text-base md:text-2xl space-x-6 text-trinh-green'>
                <div className={pathname === "/about" ? "bg-about-background rounded-full px-4 text-white bg-contain bg-center bg-no-repeat hover:italic" : "hover:italic"}>
                  <Link to='/about'>About</Link>
                </div>
                <div className="hover:italic">
                <Link to='/faq'>FAQs</Link>
                </div>
              </div>
              </div>
            </div>
        </div>
    </Suspense>
  </Layout>);
}