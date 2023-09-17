import { Link, Image, Money } from "@shopify/hydrogen";

export default function ProductCard({ product }) {
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/products/${product.handle}`}>
        <div className="grid gap-2 md:gap-6 border border-dotted border-trinh-green hover:rotate-1">
            <div className="px-2 pt-2 md:px-12 md:py-4">
                <div className="shadow-sm rounded">
                {/* {isDiscounted && (
                    <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs">
                    Sale
                    </label>
                )} */}
                <Image
                    className="aspect-[5/5]"
                    data={product.variants.nodes[0].image}
                    alt="Alt Tag"
                />
                </div>
            </div>
            <div className="flex justify-between pb-2 px-4 md:pb-6">
                <h3 className="text-2xl overflow-hidden text-base md:text-2xl text-ellipsis ">
                    {product.title}
                </h3>
                <div className="flex text-base md:text-2xl">
                    $ {price.amount * 1} USD
                </div>
            </div>
      </div>
    </Link>
  );
}
