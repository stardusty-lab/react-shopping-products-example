import { useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type CartItemType,
} from "./remote";

import ProductList, { ProductItem } from "./ProductList";
import Header, { CartIcon, CartItemCount } from "./Header";

export default function ProductListPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    getCartItems().then(setCartItems);
  }, []);

  const handleToggleCartItem = async (productId: number) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === productId,
    );

    if (existingCartItem) {
      await deleteCartItem(existingCartItem.id);
    } else {
      await addCartItem(productId);
    }

    const updatedCartItems = await getCartItems();
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Header>
        <CartIcon />
        <CartItemCount count={cartItems.length} />
      </Header>
      <ProductList
        renderProducts={(products) => {
          return products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isInCart={cartItems.some(
                (item) => item.product.id === product.id,
              )}
              onToggleCart={() => handleToggleCartItem(product.id)}
            />
          ));
        }}
      >
        {}
      </ProductList>
    </>
  );
}
