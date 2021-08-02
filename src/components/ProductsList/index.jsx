import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
// import './styles';

function ProductsList({ products }) {
  return (
		<ul className='products-list'>
			<li>
				<img src={camiseta} alt='camiseta corrida' />
				<strong>Camiseta corrida</strong>
				<span>
					De <span>R$49,90</span>
				</span>
        {' '}
				<span>R$19,90</span>
			</li>
			{products.map((product) => (
				<li key={product.id}>
					<img src={product.thumbnail} alt={product.title} />
					<strong>{product.title}</strong>
					<span>{product.price}</span>
				</li>
			))}
		</ul>
	);
}

export default ProductsList;
