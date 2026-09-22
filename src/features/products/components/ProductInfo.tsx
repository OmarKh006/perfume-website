import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductInfoProps = {
  scentFamilyLabel?: string;
  occasionLabel?: string;
  name: string;
  price: number;
  availabilityLabel?: string;
};

export function ProductInfo({
  scentFamilyLabel,
  occasionLabel,
  name,
  price,
  availabilityLabel,
}: ProductInfoProps) {
  return (
    <div className="flex w-full flex-col items-start gap-[12px]">
      <div className="flex items-center gap-[8px]">
        {scentFamilyLabel ? (
          <span className="rounded-[100px] bg-[#f2ede4] px-[10px] py-[4px] text-[11px] font-semibold text-[#1a1a1a] uppercase">
            Scent Family: {scentFamilyLabel}
          </span>
        ) : null}
        {occasionLabel ? (
          <span className="rounded-[100px] bg-[#f4f0eb] px-[10px] py-[4px] text-[11px] font-semibold text-[#605a54] uppercase">
            Occasion: {occasionLabel}
          </span>
        ) : null}
      </div>
      <h1 className="w-full font-[family-name:var(--font-instrument-serif)] text-[40px] text-[#1a1a1a] lg:text-[48px]">
        {name}
      </h1>
      <div className="flex w-full items-center justify-between">
        <p className="text-[24px] font-semibold whitespace-nowrap text-[#1a1a1a]">
          {formatWholePrice(price)}
        </p>
        {availabilityLabel ? (
          <p className="flex items-center gap-[6px] text-[13px] font-semibold whitespace-nowrap text-[#10b981]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/availability-dot.svg"
              alt=""
              width={8}
              height={8}
            />
            {availabilityLabel}
          </p>
        ) : null}
      </div>
    </div>
  );
}
