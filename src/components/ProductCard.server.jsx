import { Link, Image, Money } from "@shopify/hydrogen";

export default function ProductCard({ product }) {
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/products/${product.handle}`}>
        <div className="grid gap-6">
            <div className="border border-dashed px-12 py-4">
                <div className="shadow-sm rounded">
                {/* {isDiscounted && (
                    <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs">
                    Sale
                    </label>
                )} */}
                <Image
                    className="aspect-[4/5]"
                    data={product.variants.nodes[0].image}
                    alt="Alt Tag"
                />
                </div>
            </div>
            <div className="flex justify-between">
                <h3 className="text-2xl overflow-hidden text-ellipsis ">
                    {product.title}
                </h3>
                <div className="flex text-2xl">
                    $ {price.amount} USD
                </div>
            </div>
      </div>
    </Link>
  );
}
