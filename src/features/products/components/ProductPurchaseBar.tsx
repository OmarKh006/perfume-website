"use client";

import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductPurchaseBarProps = {
  quantity: number;
  price: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onAddToCart: () => void;
};

export function ProductPurchaseBar({
  quantity,
  price,
  onDecrement,
  onIncrement,
  onAddToCart,
}: ProductPurchaseBarProps) {
  return (
    <div className="flex w-full items-center gap-[16px]">
      <div className="flex items-center gap-[20px] rounded-[4px] border border-solid border-[#ebe6de] px-[16px] py-[14px]">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={onDecrement}
          className="text-[16px] font-normal text-[#605a54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
        >
          -
        </button>
        <span className="text-[14px] font-semibold text-[#1a1a1a]">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={onIncrement}
          className="text-[16px] font-normal text-[#605a54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={onAddToCart}
        className="flex min-w-px flex-1 items-center justify-center rounded-[4px] bg-[#1a1a1a] py-[16px] text-[13px] font-bold text-white uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
      >
        Add to Cart / {formatWholePrice(price)}
      </button>
    </div>
  );
}
