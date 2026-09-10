const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export function CartPanel() {
  return (
    <aside
      aria-labelledby="cart-heading"
      className="rounded-[10px] bg-[#10233f] p-6 text-white shadow-[0_14px_32px_rgba(16,35,63,0.12)] lg:sticky lg:top-6"
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/20 pb-5">
        <div>
          <h2 id="cart-heading" className="text-xl font-semibold tracking-[-0.03em]">
            Your cart
          </h2>
          <p className="mt-1 text-sm text-[#b8c4d3]">Ready when you are.</p>
        </div>
        {/* TODO: Read the cart item count from the Zustand store. */}
        <span className="font-mono text-xs text-[#83deea]">0 items</span>
      </div>

      {/* TODO: Render cart items and totals from the Zustand store. */}
      <div className="flex min-h-52 flex-col items-center justify-center py-8 text-center">
        <span className="mb-5 flex size-14 items-center justify-center rounded-full border border-[#83deea]/50 text-[#83deea]">
          <svg
            aria-hidden="true"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M3.5 4.5h2l1.6 10.1a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 1.9-1.4L21 8H6.1" />
            <circle cx="9.5" cy="20" r="1" />
            <circle cx="17.5" cy="20" r="1" />
          </svg>
        </span>
        <p className="font-medium">Your cart is empty</p>
        <p className="mt-2 max-w-[15rem] text-sm leading-6 text-[#aebbc9]">
          Add a product from the catalog to start your order.
        </p>
      </div>

      <div className="border-t border-white/20 pt-5">
        <div className="mb-5 flex items-end justify-between gap-4">
          <span className="text-sm text-[#b8c4d3]">Total</span>
          <span className="text-2xl font-semibold tracking-[-0.04em]">
            {rupiahFormatter.format(0)}
          </span>
        </div>
        {/* TODO: Connect this button to the Zustand clear-cart action. */}
        <button
          type="button"
          disabled
          className="min-h-11 w-full rounded-lg border border-white/25 px-4 text-sm font-semibold text-white/40 disabled:cursor-not-allowed"
        >
          Clear Cart
        </button>
      </div>
    </aside>
  );
}
