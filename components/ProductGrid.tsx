import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import type { Product } from "@/data/products";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product, i) => (
        <Reveal key={product.id} delay={(i % 3) * 120} className="h-full">
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
