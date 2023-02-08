import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  ProductPrice,
  BuyNowButton,
  AddToCartButton,
} from "@shopify/hydrogen";

export default function ProductDetails({ product }) {
  // const { options, selectedVariant } = useProductOptions();
  return (
    <ProductOptionsProvider data={product}>
      <section className="px-12 py-24 w-full grid grid-cols-2 gap-12 justify-between font-nanum">
        <div className="">
          <ProductGallery media={product.media.nodes} />
        </div>
        <div className="">
          <ProductForm product={product} />
        </div>
      </section>
    </ProductOptionsProvider>
  );
}

function  ProductForm({ product }) {
  const { options, selectedVariant } = useProductOptions();

  return (
    <form className="grid gap-10">
      {/* {
        <div className="grid gap-4">
          {options.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }
            return (
              <div
                key={name}
                className="flex flex-wrap items-baseline justify-start gap-6"
              >
                <legend className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">
                  {name}
                </legend>
                <div className="flex flex-wrap items-baseline gap-4">
                  <OptionRadio name={name} values={values} />
                </div>
              </div>
            );
          })}
        </div>
      } */}
      <div className="mt-8">
        <div className="flex w-full justify-between">
          <div className="text-2xl underline">
            {product.title}
          </div>
          <ProductPrice
              className="text-gray-900 text-2xl font-nanum"
              variantId={selectedVariant.id}
              data={product}
          />
          </div>
          <div
            className="prose border-gray-200 pt-6 text-black text-2xl font-light"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
          <div className="text-lg">
          ♡ Items are handmade with care but may have slight imperfections.
          </div>
      </div>
      <div className="grid items-stretch gap-4">
        <PurchaseMarkup />
      </div>
    </form>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        type="button"
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
      >
        {isOutOfStock ? (
        <span className="bg-trinh-green text-white line-through inline-block rounded-sm text-2xl text-center py-3 max-w-xl leading-none w-full">
          ✽ Sold out ✽
        </span>) : (
          <div className="flex grid grid-cols-4">
            <span className="bg-white text-black border border-black inline-block rounded-sm text-2xl text-center py-3 max-w-xl leading-none w-full">
              Qty: 1
            </span>
            <span className="col-span-3 bg-trinh-green text-white inline-block rounded-sm text-2xl text-center py-3 max-w-xl leading-none w-full">
              ✽ Add to cart ✽
            </span>
          </div>
        )}
      </AddToCartButton>
      {/* {isOutOfStock ? (
        <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
          Available in 2-3 weeks
        </span>
      ) : (
        <BuyNowButton variantId={selectedVariant.id}>
          <span className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none border w-full">
            Buy it now
          </span>
        </BuyNowButton>
      )} */}
    </>
  );
}

function OptionRadio({ values, name }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label key={id} htmlFor={id}>
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => setSelectedOption(name, value)}
            />
            <div
              className={`leading-none border-b-[2px] py-1 cursor-pointer transition-all duration-200 ${
                checked ? "border-gray-500" : "border-neutral-50"
              }`}
            >
              {value}
            </div>
          </label>
        );
      })}
    </>
  );
}

function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}
    >
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === "MODEL_3D") {
          extraProps = {
            interactionPromptThreshold: "0",
            ar: true,
            loading: "eager",
            disableZoom: true,
          };
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image",
          },
        };

        return (
          <div
            className={`${
              i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}
            key={med.id || med.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={`w-full h-full aspect-square object-cover`}
              data={data}
              options={{
                crop: "center",
              }}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}
