import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
import './styles.css';
import Card from '../Card';

function ProductsList({ products }) {
 

  const productTest = {
    id: 'MLB11111-1',
    thumbnail: camiseta,
    title: 'Camiseta Manga Curta Corrida',
    price: 19.90,
    original_price: 49.90,
    installments: {
      quantity: 1,
      amount: 19.90
    },
    available_quantity: 10,
  };

  return (
		<ul className='products-list'>
      <Card product={productTest} />

			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</ul>
	);
}

export default ProductsList;
