import React, { createContext, useRef, useState, useEffect } from 'react';

export const CartContext = createContext({});

function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saveCartInLocalStorage = localStorage.getItem('@O2-Store:cart');
    if (saveCartInLocalStorage) {
      return JSON.parse(saveCartInLocalStorage);
    }
    return [];
  });

  // Atualizando o carrinho com o useRef e useEffect
  const updateCartRef = useRef();

  useEffect(() => {
    updateCartRef.current = cart;
  }, [cart]);

  const cartPreviousValue = updateCartRef.current ?? cart;

  useEffect(() => {
    if (cartPreviousValue !== cart) {
      localStorage.setItem('@O2-Store:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviousValue]);
  


  return (
    <div>
      
    </div>
  )
}

export default CartContextProvider;
