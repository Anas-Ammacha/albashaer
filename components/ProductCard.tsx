import ProductImage from "@/components/ProductImage";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { name, description, image, colors } = product;

  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-secondary/40 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden bg-secondary-soft">
        <ProductImage key={image} src={image} alt={name} />
        <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-primary">{name}</h3>
        <p className="mt-2 text-sm leading-7 text-foreground/70">{description}</p>
        {Array.isArray(colors) ? (
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {colors.map((color) => (
              <li key={color} className="rounded-full bg-secondary-soft px-3 py-1 text-xs font-medium text-primary">
                {color}
              </li>
            ))}
          </ul>
        ) : (
          <span className="mt-3 inline-block rounded-full bg-secondary-soft px-4 py-1 text-sm font-medium text-primary">
            متوفر بجميع الألوان
          </span>
        )}
      </div>
    </article>
  );
}
