/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { productPaths } from "@/features/products/paths";
import { cn } from "@/lib/utils/cn";

export type ProductBreadcrumbItem = {
  label: string;
  href?: string;
};

const LISTING_ITEMS: ProductBreadcrumbItem[] = [
  { label: "Home", href: productPaths.list },
  { label: "Shop", href: productPaths.list },
  { label: "All Fragrances" },
];

type ProductBreadcrumbsProps = {
  items?: ProductBreadcrumbItem[];
  className?: string;
  chevronSrc?: string;
};

export function ProductBreadcrumbs({
  items = LISTING_ITEMS,
  className,
  chevronSrc = "/icons/chevron-right.svg",
}: ProductBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-2 px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-20",
        className,
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-[12px] font-normal whitespace-nowrap text-[#605a54]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "text-[12px] font-semibold whitespace-nowrap text-[#1a1a1a]"
                    : "text-[12px] font-normal whitespace-nowrap text-[#605a54]"
                }
              >
                {item.label}
              </span>
            )}
            {!isLast ? (
              <img src={chevronSrc} alt="" width={10} height={10} />
            ) : null}
          </span>
        );
      })}
    </nav>
  );
}
