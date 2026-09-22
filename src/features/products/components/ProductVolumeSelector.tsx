"use client";

import type { ProductVolume } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import { cn } from "@/lib/utils/cn";

type ProductVolumeSelectorProps = {
  volumes: ProductVolume[];
  selectedLabel: string;
  onChange: (volume: ProductVolume) => void;
};

export function ProductVolumeSelector({
  volumes,
  selectedLabel,
  onChange,
}: ProductVolumeSelectorProps) {
  if (volumes.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-start gap-[12px]">
      <p className="text-[12px] font-bold text-[#1a1a1a] uppercase">
        Select Volume
      </p>
      <div className="flex w-full items-start gap-[12px]">
        {volumes.map((volume) => {
          const selected = volume.label === selectedLabel;
          return (
            <button
              key={volume.label}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(volume)}
              className={cn(
                "flex min-w-px flex-1 flex-col items-center gap-[4px] rounded-[4px] p-[12px]",
                selected
                  ? "border-2 border-solid border-[#1a1a1a] bg-white"
                  : "border border-solid border-[#ebe6de]",
              )}
            >
              <span
                className={cn(
                  "text-[14px] text-[#1a1a1a]",
                  selected ? "font-bold" : "font-medium",
                )}
              >
                {volume.label}
              </span>
              <span className="text-[11px] font-normal text-[#605a54]">
                {formatWholePrice(volume.price)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
