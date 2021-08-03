import React from 'react';
import Header from '../components/Header';
import { useCart } from '../hooks/useCart';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { format } from '../services/formattingService';
import '../styles/cart.css';

function Cart() {
  const { cart, updateProductAmount, removeProductFromCart } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    subTotal: format(product.price * product.amount)
  }));

  const total = format(cart.reduce((sumTotal, product) => {
    return Number(sumTotal + product.price * product.amount);
  }, 0));

  function handleDecreaseItem(product) {
    const amount = product.amount - 1;
    updateProductAmount(product.id, product, amount);
  }

  function handleIncreaseItem(product) {
    const amount = product.amount + 1;
    updateProductAmount(product.id, product, amount);
  }

  function handleRemoveProduct(productId) {
    removeProductFromCart(productId);
  };

  return (
		<>
			<Header />
			<div className='cart-container'>
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
									<div className='btns-container'>
										<button
											className='cart-btn'
											type='button'
                      disabled={ product.amount <= 1}
											onClick={() => handleDecreaseItem(product)}
										>
											<MdRemoveCircleOutline size={30} />
										</button>
										<input type='text' readOnly value={product.amount} />
										<button
											className='cart-btn'
											type='button'
											onClick={() => handleIncreaseItem(product)}
										>
											<MdAddCircleOutline size={30} />
										</button>
									</div>
								</td>
								<td>
									<strong>{product.subTotal}</strong>
								</td>
								<td>
									<button
										className='cart-btn'
										type='button'
										onClick={() => handleRemoveProduct(product.id)}
									>
										<MdDelete size={30} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<footer className="cart-footer">
					<button
            className="btn"
            type='button'
          >
            Fechar compra
          </button>
					<div className="total-container">
						<span>Total</span>
						<strong>{total}</strong>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Cart;
