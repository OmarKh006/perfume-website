import Link from "next/link";
import { productPaths } from "@/features/products/paths";

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "https://x.com", label: "X", icon: "/icons/circle-x.svg" },
  { href: "https://facebook.com", label: "Facebook", icon: "/icons/facebook.svg" },
] as const;

const COLUMNS = [
  {
    title: "Collections",
    links: [
      "La Maison",
      "Private Reserve",
      "Scented Candles",
      "Discovery Sets",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Olfactory Consultation",
      "Shipping & Returns",
      "Atelier Appointments",
      "Care Guide",
    ],
  },
  {
    title: "About Us",
    links: [
      "Our Philosophy",
      "Sourcing Standards",
      "Sustainability Commitments",
      "Journal",
    ],
  },
] as const;

const PAYMENTS = ["visa", "mastercard", "amex"] as const;

export function ProductFooter() {
  return (
    <footer className="flex w-full flex-col items-start gap-[64px] bg-[#1a1a1a] px-4 pt-[80px] pb-[40px] md:px-10 lg:px-[80px]">
      <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row">
        <div className="flex w-full max-w-[400px] flex-col items-start gap-[24px]">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[40px] whitespace-nowrap text-white">
            O D O R A T U S
          </p>
          <p className="w-full text-[14px] leading-[1.6] font-normal text-[#f2ede4] opacity-80">
            An independent olfactory house cultivating slow-luxury liquid
            narratives. Every bottle is hand-poured in small batches using
            sustainably sourced botanicals.
          </p>
          <div className="flex items-start gap-[16px]">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-[100px] bg-[rgba(255,255,255,0.1)] p-[8px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={social.icon} alt="" width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-10 sm:flex-row lg:w-auto lg:gap-[80px]">
          {COLUMNS.map((column) => (
            <div
              key={column.title}
              className="flex w-full flex-col items-start gap-[20px] sm:w-[180px]"
            >
              <p className="text-[12px] font-bold whitespace-nowrap text-[#c5a880] uppercase">
                {column.title}
              </p>
              {column.links.map((label) => (
                <Link
                  key={label}
                  href={productPaths.list}
                  className="w-full text-[13px] font-normal text-white opacity-70"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-[24px]">
        <div className="h-px w-full bg-[rgba(255,255,255,0.13)]" />
        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[12px] font-normal whitespace-nowrap text-white opacity-50">
            © 2026 Odoratus. All rights reserved.
          </p>
          <div className="flex items-center gap-[12px]">
            <p className="text-[11px] font-normal whitespace-nowrap text-white uppercase opacity-40">
              Secured checkout via
            </p>
            {PAYMENTS.map((label) => (
              <span
                key={label}
                className="rounded-[4px] border border-solid border-[rgba(255,255,255,0.13)] px-[8px] py-[4px] text-[9px] font-semibold text-white uppercase opacity-60"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
