import { CartPanel } from "@/components/shop/cart-panel";
import { ProductGrid } from "@/components/shop/product-grid";
import { ShopHeader } from "@/components/shop/shop-header";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2e9] text-[#10233f]">
      <ShopHeader />

      <main className="mx-auto w-full max-w-[1360px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-24">
        <section aria-labelledby="catalog-heading">
          <div className="mb-10 grid gap-6 border-b border-[#10233f]/20 pb-9 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-semibold tracking-[0.14em] text-[#087f99]">
                Desk essentials / 04 pieces
              </p>
              <h1
                id="catalog-heading"
                className="max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em]"
              >
                Build a desk that works.
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#526071] md:pb-1">
              A compact edit of dependable tools for clearer calls, faster work,
              and a more comfortable setup.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-14">
            <ProductGrid products={products} />
            <CartPanel />
          </div>
        </section>
      </main>
    </div>
  );
}
