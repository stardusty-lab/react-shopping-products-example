// ProductList.tsx
import { useState, type ReactNode } from "react";
import { type ProductType } from "./remote";
import { mockProducts } from "../mocks/products";

export default function ProductList({
  renderProducts,
}: {
  renderProducts: (products: ProductType[]) => ReactNode;
}) {
  const [products] = useState<ProductType[]>(mockProducts);

  return renderProducts(products);
}

export function ProductItem({
  product,
  isInCart,
  onToggleCart,
}: {
  product: ProductType;
  isInCart: boolean;
  onToggleCart: () => void;
}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={onToggleCart}>
        {isInCart ? "장바구니에서 삭제" : "장바구니에 담기"}
      </button>
    </div>
  );
}
