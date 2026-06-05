// ProductList.tsx
import { useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type ProductType,
  type CartItemType,
} from "./remote";
import { mockProducts } from "../mocks/products";

export default function ProductList({
  cartItems,
  onToggleCartItem,
}: {
  cartItems: CartItemType[];
  onToggleCartItem: (productId: number) => void;
}) {
  const [products] = useState<ProductType[]>(mockProducts);

  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isInCart={cartItems.some((item) => item.product.id === product.id)}
          onToggleCart={() => onToggleCartItem(product.id)}
        />
      ))}
    </>
  );
}

function ProductItem({
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
