"use client";

import { useMemo, useState } from "react";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductFooter } from "@/features/products/components/ProductFooter";
import { ProductGallery } from "@/features/products/components/ProductGallery";
import { ProductGiftWrapping } from "@/features/products/components/ProductGiftWrapping";
import { ProductInfo } from "@/features/products/components/ProductInfo";
import { ProductPurchaseBar } from "@/features/products/components/ProductPurchaseBar";
import { ProductRelated } from "@/features/products/components/ProductRelated";
import { ProductScentAnatomySection } from "@/features/products/components/ProductScentAnatomy";
import { ProductStoreHeader } from "@/features/products/components/ProductStoreHeader";
import { ProductVolumeSelector } from "@/features/products/components/ProductVolumeSelector";
import { useProduct } from "@/features/products/hooks/useProduct";
import { useProducts } from "@/features/products/hooks/useProducts";
import { productPaths } from "@/features/products/paths";
import type {
  Product,
  ProductVolume,
} from "@/features/products/types/product.types";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  price: number;
};

type ProductDetailsPageProps = {
  productId: string;
  onAddToCart?: (context: ProductDetailsActionsContext) => void;
};

function defaultVolume(volumes: ProductVolume[]): ProductVolume | undefined {
  return (
    volumes.find((volume) => volume.label === "100 ml") ??
    volumes[volumes.length - 1]
  );
}

export function ProductDetailsPage({
  productId,
  onAddToCart,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const catalogQuery = useProducts({});
  const product = productQuery.data;
  const [selectedVolumeLabel, setSelectedVolumeLabel] = useState<string>();
  const [giftWrapping, setGiftWrapping] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const selectedVolume = useMemo(() => {
    if (!product?.volumes?.length) {
      return undefined;
    }
    return (
      product.volumes.find((volume) => volume.label === selectedVolumeLabel) ??
      defaultVolume(product.volumes)
    );
  }, [product, selectedVolumeLabel]);

  const unitPrice = selectedVolume?.price ?? product?.price ?? 0;

  const selectedOptions = useMemo(() => {
    const options: Record<string, string> = {};
    if (selectedVolume) {
      options.volume = selectedVolume.label;
    }
    options.giftWrapping = giftWrapping ? "on" : "off";
    return options;
  }, [giftWrapping, selectedVolume]);

  const relatedProducts = useMemo(() => {
    const catalog = catalogQuery.data?.items ?? [];
    if (!product?.relatedIds?.length) {
      return [];
    }
    return product.relatedIds
      .map((id) => catalog.find((item) => item.id === id))
      .filter((item): item is Product => Boolean(item));
  }, [catalogQuery.data?.items, product]);

  if (productQuery.isLoading) {
    return <p className="px-4 py-8 text-sm text-zinc-600">Loading product...</p>;
  }

  if (!product) {
    return (
      <p className="px-4 py-8 text-sm text-zinc-600">Product not found.</p>
    );
  }

  const addContext: ProductDetailsActionsContext = {
    product,
    selectedOptions,
    quantity,
    price: unitPrice,
  };

  return (
    <article className="flex w-full flex-col items-start bg-[#faf8f5]">
      <ProductStoreHeader />
      <ProductBreadcrumbs
        className="w-full gap-[8px] px-4 py-[24px] md:px-10 lg:px-[80px]"
        chevronSrc="/icons/chevron-right-details.svg"
        items={[
          { label: "Home", href: productPaths.list },
          { label: "Shop", href: productPaths.list },
          { label: "Fragrances", href: productPaths.list },
          { label: product.name },
        ]}
      />
      <div className="flex w-full flex-col items-start gap-[48px] px-4 pb-[64px] md:px-10 lg:flex-row lg:gap-[64px] lg:px-[80px] lg:pb-[100px]">
        <ProductGallery name={product.name} images={product.images} />
        <div className="flex w-full flex-col items-start gap-[32px] lg:w-[560px] lg:shrink-0">
          <ProductInfo
            scentFamilyLabel={product.scentFamilyLabel}
            occasionLabel={product.occasionLabel}
            name={product.name}
            price={unitPrice}
            availabilityLabel={product.availabilityLabel}
          />
          <div className="h-px w-full bg-[#ebe6de]" />
          {product.volumes ? (
            <ProductVolumeSelector
              volumes={product.volumes}
              selectedLabel={selectedVolume?.label ?? ""}
              onChange={(volume) => setSelectedVolumeLabel(volume.label)}
            />
          ) : null}
          <ProductGiftWrapping
            enabled={giftWrapping}
            onChange={setGiftWrapping}
          />
          <ProductPurchaseBar
            quantity={quantity}
            price={unitPrice}
            onDecrement={() =>
              setQuantity((current) => Math.max(1, current - 1))
            }
            onIncrement={() => setQuantity((current) => current + 1)}
            onAddToCart={() => onAddToCart?.(addContext)}
          />
          <div className="h-px w-full bg-[#ebe6de]" />
          {product.anatomy ? (
            <ProductScentAnatomySection anatomy={product.anatomy} />
          ) : null}
        </div>
      </div>
      <ProductRelated products={relatedProducts} />
      <ProductFooter />
    </article>
  );
}
