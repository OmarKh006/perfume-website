"use client";

import Link from "next/link";
import { cartPaths, useCart } from "@/features/cart";
import { productPaths } from "@/features/products/paths";

const NAV_LINKS = [
  { label: "Home", href: productPaths.list, active: true },
  { label: "Shop", href: productPaths.list, active: false },
  { label: "Categories", href: productPaths.list, active: false },
  { label: "The Atelier", href: productPaths.list, active: false },
] as const;

export function ProductStoreHeader() {
  const { quantity } = useCart();

  return (
    <header className="flex w-full shrink-0 flex-col items-start bg-[#faf8f5]">
      <div className="flex w-full items-start justify-center bg-[#1a1a1a] py-[12px]">
        <p className="text-[11px] font-semibold whitespace-nowrap text-white uppercase">
          Complimentary signature gift wrapping on all orders above $150
        </p>
      </div>
      <div className="flex h-[90px] w-full items-center justify-between border-b border-solid border-[#ebe6de] px-4 md:px-10 lg:px-[80px]">
        <nav
          aria-label="Primary"
          className="hidden items-center gap-[40px] text-[13px] uppercase lg:flex lg:w-[347px]"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "font-semibold text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
                  : "font-medium text-[#605a54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={productPaths.list}
          className="font-[family-name:var(--font-instrument-serif)] text-[38px] whitespace-nowrap text-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
        >
          O D O R A T U S
        </Link>
        <div className="flex items-center justify-end gap-[32px] lg:w-[328px]">
          <label className="hidden h-[32px] w-[200px] items-center gap-[8px] rounded-[100px] border border-solid border-[#ebe6de] px-[12px] py-[8px] md:flex">
            <span className="sr-only">Search fragrances</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/search.svg"
              alt=""
              width={14}
              height={14}
            />
            <input
              type="search"
              placeholder="Search fragrances..."
              className="w-full bg-transparent text-[12px] font-normal text-[#605a54] outline-none placeholder:text-[#605a54]"
            />
          </label>
          <button
            type="button"
            aria-label="Account"
            className="flex size-[20px] items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/user.svg" alt="" width={20} height={20} />
          </button>
          <Link
            href={cartPaths.cart}
            aria-label={
              quantity > 0 ? `Cart, ${quantity} items` : "Cart"
            }
            className="flex items-center gap-[6px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/shopping-bag.svg"
              alt=""
              width={20}
              height={20}
            />
            {quantity > 0 ? (
              <span className="rounded-[100px] bg-[#c5a880] px-[6px] py-[2px] text-[10px] font-bold text-white">
                {quantity}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </header>
  );
}
