import {Link} from '@shopify/hydrogen';
import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";


export default function Home() {
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum'> 
          <div className="grid grid-cols-3 pt-14 pb-14 w-screen h-screen">
            <div className="invisible hover:visible bg-red-500">SAMPLE GRID</div>
            <div className="bg-orange-500">SAMPLE GRID</div>
            <div className="bg-yellow-500">SAMPLE GRID</div>
            <div className="bg-green-500">SAMPLE GRID</div>
            <div className="bg-emerald-500">SAMPLE GRID</div>
            <div className="bg-blue-500">SAMPLE GRID</div>
            <div className="bg-indigo-500">SAMPLE GRID</div>
            <div className="bg-purple-500">SAMPLE GRID</div>
            <div className="bg-pink-500">SAMPLE GRID</div>
          </div>
      </div>
    </Suspense>
  </Layout>);
}