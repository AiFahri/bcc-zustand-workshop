import type { Product } from "@/types/shop";

type ProductCardProps = {
  product: Product;
  index: number;
};

type ProductIllustrationProps = {
  productId: Product["id"];
};

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function ProductIllustration({ productId }: ProductIllustrationProps) {
  const sharedProps = {
    className: "h-32 w-full sm:h-36",
    viewBox: "0 0 320 160",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (productId === "key-01") {
    return (
      <svg {...sharedProps}>
        <path d="M55 53h210l18 64H37l18-64Z" fill="white" />
        <path d="M66 68h21M98 68h21M130 68h21M162 68h21M194 68h21M226 68h21M72 84h21M104 84h21M136 84h21M168 84h21M200 84h21M232 84h21M79 101h34M122 101h76M207 101h34" />
      </svg>
    );
  }

  if (productId === "aud-02") {
    return (
      <svg {...sharedProps}>
        <path d="M99 91V76a61 61 0 0 1 122 0v15" />
        <path d="M102 82h18v50h-18a17 17 0 0 1-17-17V99a17 17 0 0 1 17-17ZM218 82h-18v50h18a17 17 0 0 0 17-17V99a17 17 0 0 0-17-17Z" fill="white" />
        <path d="M120 126c11 10 24 15 40 15s29-5 40-15" />
      </svg>
    );
  }

  if (productId === "mse-03") {
    return (
      <svg {...sharedProps}>
        <path d="M160 28c-35 0-58 25-58 62v13c0 32 23 51 58 51s58-19 58-51V90c0-37-23-62-58-62Z" fill="white" />
        <path d="M160 29v47M145 60h30M102 94h116" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <rect x="72" y="29" width="176" height="98" rx="5" fill="white" />
      <path d="M83 40h154v76H83zM145 127l-19 20h68l-19-20M97 147h126" />
      <circle cx="160" cy="122" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="flex min-h-[31rem] flex-col bg-[#fcfaf5] p-5 sm:p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="font-mono text-xs font-medium text-[#637082]">
          {String(index + 1).padStart(2, "0")} / {product.id.toUpperCase()}
        </span>
        <span className="text-xs font-medium text-[#526071]">{product.category}</span>
      </div>

      <div
        className="mb-7 flex min-h-48 items-center justify-center overflow-hidden rounded-lg border border-current/20 px-4"
        style={{
          backgroundColor: `${product.accentColor}12`,
          color: product.accentColor,
        }}
      >
        <ProductIllustration productId={product.id} />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="max-w-xs text-2xl font-semibold leading-7 tracking-[-0.035em]">
          {product.name}
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-[#647080]">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#10233f]/15 pt-5">
          <p className="text-base font-semibold tracking-[-0.02em]">
            {rupiahFormatter.format(product.price)}
          </p>
          {/* TODO: Connect this button to the Zustand add-to-cart action. */}
          <button
            type="button"
            className="min-h-11 rounded-lg bg-[#f15a29] px-4 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#d94718] focus-visible:ring-2 focus-visible:ring-[#10233f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf5]"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
