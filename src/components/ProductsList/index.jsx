import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
import './styles.scss';
import Card from '../Card';

function ProductsList({ products }) {

  const productTest = {
    id: '01',
    thumbnail: camiseta,
    title: 'Camiseta Manga Curta de Corrida',
    price: 19.90,
    original_price: 49.90,
    installments: {
      quantity: 1,
      amount: 19.90
    }
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
