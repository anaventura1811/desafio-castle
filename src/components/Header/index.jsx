import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <header className="title">
      <Link to="/">
        O2 STORE
      </Link>
      <Link to="/cart">
        <strong>Meu carrinho</strong>
        <span></span>
      </Link>
    </header>
  )
}

export default Header;
