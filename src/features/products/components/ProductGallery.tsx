"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const thumbs = images.slice(1, 4);
  const [mainSrc, setMainSrc] = useState(images[0]);
  const [selectedThumb, setSelectedThumb] = useState(0);

  if (!mainSrc) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center rounded-[8px] bg-[#ebe6de] text-[#605a54]">
        No product images yet
      </div>
    );
  }

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[16px]">
      <div className="relative h-[320px] w-full overflow-hidden rounded-[8px] md:h-[420px] lg:h-[600px]">
        <Image
          src={mainSrc}
          alt={name}
          fill
          priority
          className="rounded-[8px] object-cover"
          sizes="(min-width: 1024px) 656px, 100vw"
        />
      </div>
      {thumbs.length > 0 ? (
        <div className="flex w-full items-start gap-[16px]">
          {thumbs.map((src, index) => {
            const selected = index === selectedThumb;
            return (
              <button
                key={src}
                type="button"
                aria-label={`View image ${index + 1}`}
                aria-pressed={selected}
                onClick={() => {
                  setSelectedThumb(index);
                  setMainSrc(src);
                }}
                className={cn(
                  "relative h-[80px] min-w-px flex-1 overflow-hidden rounded-[4px] md:h-[100px] lg:h-[120px]",
                  selected
                    ? "border-2 border-solid border-[#c5a880]"
                    : "border-2 border-solid border-transparent",
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="rounded-[4px] object-cover"
                  sizes="220px"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
