import React from 'react';
import Header from '../components/Header';
// import { useCart } from '../hooks/useCart';
// import { format } from '../services/formattingService';

function Cart() {
  // const { cart, updateProductAmount, removeProduct } = useCart();

  // const cartFormatted = cart.map((product) => ({
  //   ...product,
  //   subTotal: format(product.price * product.amount)
  // }));

  // const total = cart.reduce((sumTotal, product) => {
  //   return sumTotal + product.price * product.amount
  // }, 0);

  // function handleAddOrRemoveProduct(product) {

  // }

  return (
		<>
      <Header />
			<table>
				<thead>
          <tr>
            <th aria-label='product image' />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th aria-label='delete product icon' />
          </tr>
          <tbody>
            <tr>
              <td>Linha 1</td>
            </tr>
          </tbody>
				</thead>
			</table>
      Teste página
		</>
	);
}

export default Cart;
