import React from 'react';
import { useCart } from '../hooks/useCart';

function Cart() {
  const { cart } = useCart();

  // const cartFormatted = cart.map((product) => ({
  //   ...product,
  //   subTotal: product.price * product.amount
  // }));

  // const total = cart.reduce((sumTotal, product) => {
  //   return sumTotal + product.price * product.amount
  // }, 0);

  // function handleAddOrRemoveProduct(product) {

  // }

  return (
		<div>
			{/* <table>
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
			</table> */}
      Teste página
		</div>
	);
}

export default Cart;
