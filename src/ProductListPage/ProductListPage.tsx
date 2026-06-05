import { useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type ProductType,
  type CartItemType,
} from "./remote";

import ProductList from "./ProductList";
import Header from "./Header";

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
      <Header cartItems={cartItems} />
      <ProductList
        cartItems={cartItems}
        onToggleCartItem={handleToggleCartItem}
      />
    </>
  );
}
