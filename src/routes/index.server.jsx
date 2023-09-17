import {Link, Image} from '@shopify/hydrogen';
import { Suspense, useState } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import HomeImage from "../components/HomeImage.client";



export default function Home() {
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum'> 
          <HomeImage />
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
    </Suspense>
  </Layout>);
}