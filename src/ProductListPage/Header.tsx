import { type CartItemType } from "./remote";

export default function Header(props: { cartItems: CartItemType[] }) {
  return (
    <>
      <CartIcon />
      <CartItemCount count={props.cartItems.length} />
    </>
  );
}

function CartIcon() {
  return <div>🛒</div>;
}

function CartItemCount(props: { count: number }) {
  return <div>{props.count} items</div>;
}
