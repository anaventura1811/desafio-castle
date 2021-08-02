import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">
        <img src="" alt="O2 Store" />
      </Link>
      <div>
        <strong>Meu carrinho</strong>
        <span></span>
      </div>
    </div>
  )
}

export default Header;
