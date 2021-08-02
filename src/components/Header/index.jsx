import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';
import { MdShoppingBasket } from 'react-icons/md';
import './styles.scss';
import { useCart } from '../../hooks/useCart';

function Header() {
  const { cart } = useCart();
  // const { history } = useHistory();
  // const handleRedirectToCart = () => {
  //   history.push('/cart');
  // }
  const cartSize = cart.length;

  return (
		<header className='title'>
			<Link to='/'>O2 STORE</Link>
			<Link to='/cart'>
				<div>
					<strong>Meu carrinho</strong>
					<span>{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</span>
				</div>
				<MdShoppingBasket size={36} color={'#ff3576'} />
			</Link>
		</header>
	);
}

export default Header;
