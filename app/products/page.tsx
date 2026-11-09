import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "المنتجات",
  description: "تشكيلة حجابات البشائر: حجاب ليكرا وقطن، قطعة وقطعتين، وراسية، بجميع الألوان.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="منتجاتنا" subtitle="جميع منتجاتنا متوفرة بجميع الألوان." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ProductGrid items={products} />
      </section>
    </>
  );
}
