import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
import './styles.scss';
import Card from '../Card';

function ProductsList({ products }) {

  const productTest = {
    id: '01',
    thumbnail: camiseta,
    title: 'Camiseta Manga Curta de Corrida',
    price: 'R$ 19,90',
    original_price: 'R$ 49,90'
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
