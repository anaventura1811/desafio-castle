import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
import './styles.scss';

function ProductsList({ products }) {
  return (
		<ul className='products-list'>
			<li className='list-item'>
				<span>O2 Store</span>
				<img src={camiseta} alt='camiseta corrida' />
				<div className='separator' />
				<strong>Camiseta Manga Curta de Corrida</strong>
				<span>
					De <span className='product-old-price'>R$49,90</span>
				</span>{' '}
				<span>R$19,90</span>
				<button type='button'>
					<div>
						<span>COMPRAR</span>
					</div>
				</button>
			</li>
			{products.map((product) => (
				<li key={product.id} className='list-item'>
					<img src={product.thumbnail} alt={product.title} />
					<div className='separator' />
					<strong>{product.title}</strong>
					<span>{product.price}</span>
					<button type='button'>
						<div>
							<span>COMPRAR</span>
						</div>
					</button>
				</li>
			))}
		</ul>
	);
}

export default ProductsList;
