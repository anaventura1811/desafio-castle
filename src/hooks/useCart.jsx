import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

export function useCart() {
  const value = useContext(CartContext);
  return value;
}
