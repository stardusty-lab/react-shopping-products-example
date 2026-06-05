import type { ReactNode } from "react";

export default function Header(props: { children: ReactNode }) {
  return <>{props.children}</>;
}

export function CartIcon() {
  return <div>🛒</div>;
}

export function CartItemCount(props: { count: number }) {
  return <div>{props.count} items</div>;
}
