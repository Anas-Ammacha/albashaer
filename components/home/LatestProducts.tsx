import ButtonLink from "@/components/Button";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import { featuredProducts } from "@/data/products";

export default function LatestProducts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title="أحدث المنتجات" subtitle="لمحة من تشكيلتنا، وجميعها بجميع الألوان." />
      <ProductGrid items={featuredProducts} />
      <div className="mt-10 text-center">
        <ButtonLink href="/products">عرض كل المنتجات</ButtonLink>
      </div>
    </section>
  );
}
