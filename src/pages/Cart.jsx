import React from 'react';
import Header from '../components/Header';
import { useCart } from '../hooks/useCart';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { format } from '../services/formattingService';

function Cart() {
  const { cart, updateProductAmount, removeProductFromCart } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    subTotal: format(product.price * product.amount)
  }));

  const total = cart.reduce((sumTotal, product) => {
    return format(sumTotal + product.price * product.amount)
  }, 0);

  function handleAddOrRemoveProduct(product, event) {
    const type = event.target.getAttribute('data-type');

    if (type === 'increase' ) {
      const amount = product.amount + 1;
      updateProductAmount( product.id, product, amount )
    };

    if (type === 'decrease') {
      const amount = product.amount - 1;
      updateProductAmount(product.id, product, amount);
    };
  }

  function handleAddProduct(product) {
    const amount = product.amount + 1;
    updateProductAmount(product.id, product, amount)
  }

  function handleRemoveProduct(productId) {
    removeProductFromCart(productId);
  };

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
				</thead>
				<tbody>
					{cartFormatted.map((product) => (
						<tr key={product.id}>
							<td>
								<img src={product.thumbnail} alt={product.title} />
							</td>
							<td>
								<strong>{product.title}</strong>
								<span>{format(product.price)}</span>
							</td>
							<td>
								<div>
									<button
										data-type='decrease'
										type='button'
										onClick={(ev) => handleAddOrRemoveProduct(product, ev)}
									>
										<MdRemoveCircleOutline size={20} />
									</button>
									<input type='text' readOnly value={product.amount} />
									<button
										type='button'
										data-type='increase'
										onClick={(ev) => handleAddProduct(product)}
									>
										<MdAddCircleOutline size={20} />
									</button>
								</div>
							</td>
							<td>
								<strong>{product.subTotal}</strong>
							</td>
							<td>
								<button type='button' onClick={() => handleRemoveProduct(product.id)}>
									<MdDelete size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<footer>
				<button type='button'>Fechar compra</button>
				<div>
					<span>Total</span>
					<strong>{total}</strong>
				</div>
			</footer>
		</>
	);
}

export default Cart;
