import {useUrl, Link} from '@shopify/hydrogen';
import { Suspense } from "react";
import { Layout } from "../../components/Layout.server";


export default function Home() {
  const { pathname } = useUrl();
  const recycleText = (
  <div className='flex w-full flex-row'>
    <div>
      Recyclable
      {/* <div className='underline'>Recyclable</div>  */}
        <br/> ♲ Cardboard mailer 
        <br/> ♲ Backing board 
        <br/> ♲ Packing tape 
        <br/> ♲ Cardstock headers
    </div>
    <div className='pl-12'>
      Compostable
      {/* <div className='underline'>Compostable</div> */}
        <br/> ♲ Clear bags 
    </div>
  </div>)
  return (
    <Layout>
      <Suspense>
        <div className='font-nanum text-xs md:text-2xl'> 
            <div className="flex flex-col gap-3 px-8 py-20 md:gap-8 md:px-14 md:py-24 w-screen h-screen">
              <QandA question={"Frequently asked questions"} answer={"Answers"} underlined={true} />
              <QandA question={"How much is shipping?"} answer={"Shipping varies depending on what country you reside in. Please"} underlined={false} />
              <QandA question={"Can I cancel my order?"} answer={"Orders cannot be cancelled after placing the order. Please review your order over carefully before placing an order."} underlined={false} />
              <QandA question={"Do you accept returns?"} answer={"Returns are not accepted. If there is an issue with the order, please reach out."} underlined={false} />
              <QandA question={"Are the packaging materials recyclable or compostable?"} answer={recycleText} underlined={false} />
              <QandA question={"What are the holes at the top of your sticker sheets?"} answer={"The holes are from a stapleless stapler in order to reduce waste."} underlined={false} />
            </div>
            <div className="container font-nanum">
              <div className='flex justify-end pb-1.5 pt-1.5 pr-4 pl-4 fixed bottom-0 w-screen border-solid border border-t-trinh-green bg-white'>
                <div className='flex pb-1.5 pt-1.5 text-base md:text-2xl space-x-6 text-trinh-green'>
                <div className="hover:italic">
                  <Link to='/about'>About</Link>
                </div>
                <div className={pathname === "/faq" ? "bg-faq-background px-4 text-white bg-contain bg-center bg-no-repeat hover:italic" : "hover:italic"}>
                <Link to='/faq'>FAQs</Link>
                </div>
              </div>
              </div>
            </div>
        </div>
    </Suspense>
  </Layout>);
}

function QandA({ question, answer, underlined }) {
  return (
      <div className={underlined ? "grid grid-cols-2 gap-4 pb-8 md:gap-32 w-full underline" : "grid grid-cols-2 gap-4 md:gap-32 w-full"}>
        <div>
          {question}
        </div>
        <div>
          {answer}
        </div>
      </div>
  );
}