import { ProductCard } from "@/features/products/components/ProductCard";
import type { Product } from "@/features/products/types/product.types";

type ProductRelatedProps = {
  products: Product[];
};

export function ProductRelated({ products }: ProductRelatedProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="flex w-full flex-col items-start gap-[48px] bg-[#f4f0eb] px-4 py-[64px] md:px-10 lg:px-[80px] lg:py-[100px]">
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2 className="w-full font-[family-name:var(--font-instrument-serif)] text-[36px] text-[#1a1a1a] lg:text-[48px]">
          Olfactory Companions
        </h2>
        <p className="w-full text-[14px] font-normal text-[#605a54]">
          FRAGRANCES OF SYNONYMOUS SOPHISTICATION
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-[24px] md:grid md:grid-cols-2 lg:flex lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
