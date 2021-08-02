import React from 'react';
import './styles';

function ProductsList({ products }) {
  return (
    <ul className="products-list">
      { products.map((product) => (
        <li key={ product.id}>
          <img src={product.image} alt={ product.title }/>
          <strong>{ product.title }</strong>
          <span>{ product.priceFormatted }</span>
        </li>
      ))}
    </ul>
  )
}

export default ProductsList;
