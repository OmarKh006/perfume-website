import type { ProductScentAnatomy } from "@/features/products/types/product.types";

type ProductScentAnatomyProps = {
  anatomy: ProductScentAnatomy;
};

export function ProductScentAnatomySection({
  anatomy,
}: ProductScentAnatomyProps) {
  const layers = [
    { label: "Top Notes", value: anatomy.top },
    { label: "Heart Notes", value: anatomy.heart },
    { label: "Base Notes", value: anatomy.base },
  ];

  return (
    <div className="flex w-full flex-col items-start gap-[20px]">
      <h2 className="font-[family-name:var(--font-instrument-serif)] text-[32px] whitespace-nowrap text-[#1a1a1a]">
        Scent Anatomy
      </h2>
      <p className="w-full text-[14px] leading-[1.6] font-normal text-[#605a54]">
        {anatomy.description}
      </p>
      <div className="flex w-full flex-col items-start gap-[12px]">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="flex w-full items-start justify-between border-b border-solid border-[#ebe6de] py-[8px]"
          >
            <p className="text-[12px] font-bold text-[#1a1a1a] uppercase">
              {layer.label}
            </p>
            <p className="text-right text-[13px] font-normal text-[#605a54]">
              {layer.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
