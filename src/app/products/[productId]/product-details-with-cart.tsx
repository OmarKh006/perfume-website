"use client";

import { useCart } from "@/features/cart";
import { ProductDetailsPage } from "@/features/products";

type ProductDetailsWithCartProps = {
  productId: string;
};

export function ProductDetailsWithCart({
  productId,
}: ProductDetailsWithCartProps) {
  const { addItem } = useCart();

  return (
    <ProductDetailsPage
      productId={productId}
      onAddToCart={({ product, selectedOptions, quantity, price }) => {
        const input = {
          productId: product.id,
          name: product.name,
          price,
          image: product.images[0],
          selectedOptions,
        };
        for (let index = 0; index < quantity; index += 1) {
          addItem(input);
        }
      }}
    />
  );
}
