export function CartBadge() {
  return (
    <div
      className="flex items-center gap-2.5 border-l border-[#10233f]/20 pl-5"
      aria-label="Shopping cart with 0 items"
    >
      <svg
        aria-hidden="true"
        className="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3.5 4.5h2l1.6 10.1a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 1.9-1.4L21 8H6.1" />
        <circle cx="9.5" cy="20" r="1" />
        <circle cx="17.5" cy="20" r="1" />
      </svg>
      <span className="text-sm font-medium">Cart</span>
      {/* TODO: Read the cart item count from the Zustand store. */}
      <span className="flex size-7 items-center justify-center rounded-full bg-[#10233f] text-xs font-semibold text-white">
        0
      </span>
    </div>
  );
}
