"use client";

import { cn } from "@/lib/utils/cn";

type ProductGiftWrappingProps = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

export function ProductGiftWrapping({
  enabled,
  onChange,
}: ProductGiftWrappingProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-[6px] bg-[#f4f0eb] p-[20px]">
      <div className="flex max-w-[380px] flex-col items-start gap-[4px]">
        <p className="text-[13px] font-semibold text-[#1a1a1a]">
          Complimentary Signature Gift Wrapping
        </p>
        <p className="text-[12px] font-normal text-[#605a54]">
          Encased in linen paper box with custom wax seal stamp.
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label="Complimentary signature gift wrapping"
        onClick={() => onChange(!enabled)}
        className="relative h-[24px] w-[44px] shrink-0"
      >
        {enabled ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/icons/gift-switch-on.svg"
            alt=""
            width={44}
            height={24}
          />
        ) : (
          <span
            className={cn(
              "block h-[24px] w-[44px] rounded-[12px] bg-[#ebe6de]",
            )}
          >
            <span className="absolute top-[2px] left-[2px] size-[20px] rounded-full bg-white" />
          </span>
        )}
      </button>
    </div>
  );
}
