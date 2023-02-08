import {Link} from '@shopify/hydrogen';
import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";
import FeaturedCollections from "../../components/FeaturedCollections.server";


export default function Home() {
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum'> 
            <div className="pt-14 pb-14 w-screen h-screen overflow-scroll">
                This is where the shop is
                <FeaturedCollections />
            </div>
        </div>
    </Suspense>
  </Layout>);
}