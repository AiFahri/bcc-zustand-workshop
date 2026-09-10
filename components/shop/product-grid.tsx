import { ProductCard } from "@/components/shop/product-card";
import type { Product } from "@/types/shop";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[10px] border border-[#10233f]/20 bg-[#10233f]/20 sm:grid-cols-2">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
