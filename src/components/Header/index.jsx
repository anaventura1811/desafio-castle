import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import './styles.css';
import { useCart } from '../../hooks/useCart';
// import { useHistory } from 'react-router-dom';

function Header() {
  const { cart } = useCart();
  
  const cartSize = cart.length;

  return (
		<header className='title'>
			<Link to='/'>O2 STORE</Link>
			<div className="icons-container">
				<Link to='/favorites'>
					<IoMdHeart size={30} color={'#ff3576'} />
				</Link>
				<Link to='/cart'>
					<div>
						<strong>Meu carrinho</strong>
						<span>{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</span>
					</div>
					<MdShoppingBasket size={36} color={'#ff3576'} />
				</Link>
			</div>
		</header>
	);
}

export default Header;
