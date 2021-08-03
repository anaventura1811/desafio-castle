import React, { createContext, useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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

  const addProduct = async (productId, productEl) => {
		try {
			const updatedCart = [...cart]; // para não alterar o array original
			const productExists = updatedCart.find((product) => product.id === productId);
			const stock = productEl.available_quantity;
			const currentAmount = productExists ? productExists.amount : 0; // quantidade do produto no carrinho;

			const amount = currentAmount + 1; // quantidade desejada

			if (amount > stock) {
				toast.error('Quantidade solicitada fora de estoque');
				return;
			}

			if (productExists) {
				productExists.amount = amount; // atualiza automaticamente o updated cart, atualiza quantidade do produto
			} else {
		   // se for novo produto, atualiza
				const newProduct = {
					...productEl,
					amount: 1, // primeira vez que tá sendo adicionado ao carrinho
				};

				updatedCart.push(newProduct);
			}

			setCart(updatedCart); // pra perpetuar as alterações no estado do carrinho
			
		} catch {
			toast.error('Erro na adição do produto');
		}
	};

  const removeProductFromCart = async (productId) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.find((product) => product.id === productId);
      if (productIndex) {
       const newCart = updatedCart.filter((product) => product.id !== productId);
        setCart(newCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ( productId, productEl, quantity ) => {
    try {
      if (quantity <= 0) {
        return;
      }

      const stock = productEl.available_quantity;

      if (quantity > stock) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find((product) => product.id === productId);

      if (productExists) {
        productExists.amount = quantity;
        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na alteração da quantidade do produto');
    }
  }

  const contextValue = {
    cart,
    addProduct,
    removeProductFromCart,
    updateProductAmount
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;

// Source:
// Lógica ligeiramente adaptada dos seguintes projetos anteriores:
// Repositório Projeto LetmeEat: https://github.com/anaventura1811/letmeeat
// Repositório feito para concluir Desafio da Especialização Ignite Trilha - ReactJS: https://github.com/anaventura1811/rocketseat-shopping-cart-challenge