import { CartBadge } from "@/components/shop/cart-badge";

export function ShopHeader() {
  return (
    <header className="border-b border-[#10233f]/20 bg-[#f6f2e9]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-3.5">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 grid-cols-2 gap-0.5 bg-[#10233f] p-1.5"
          >
            <span className="bg-[#00a9ce]" />
            <span className="bg-[#f15a29]" />
            <span className="col-span-2 bg-white" />
          </span>
          <div className="min-w-0">
            <p className="text-base font-semibold leading-tight tracking-[-0.02em]">
              BCC Supply
            </p>
            <p className="truncate text-xs leading-5 text-[#667282]">
              Technology for better work
            </p>
          </div>
        </div>
        <CartBadge />
      </div>
    </header>
  );
}
