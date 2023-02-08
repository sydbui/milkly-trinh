import {Link} from '@shopify/hydrogen';
import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";


export default function Home() {
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum'> 
            <div className="pt-14 pb-14 w-screen h-screen">
                This is where the faq page is
            </div>
        </div>
    </Suspense>
  </Layout>);
}