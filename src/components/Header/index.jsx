import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import './styles.scss';

function Header() {
  return (
    <header className="title">
      <Link to="/">
        O2 STORE
      </Link>
      <Link to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span></span>
        </div>
        <MdShoppingBasket size={ 36 } color={ "#fff"} />
      </Link>
    </header>
  )
}

export default Header;
