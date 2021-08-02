import React from 'react';
import camiseta from '../../images/camiseta-frente-09.png';
import { IoMdHeartEmpty } from 'react-icons/io';
import './styles.scss';
import Card from '../Card';

function ProductsList({ products }) {
  return (
		<ul className='products-list'>
			<li className='list-item'>
				<div className='card-header'>
					<span className='header-title'>O2 STORE</span>
					<IoMdHeartEmpty size={30} color={'#ff3576'} />
				</div>
				<img src={camiseta} alt='camiseta corrida' />
				<div className='separator' />
				<strong>Camiseta Manga Curta de Corrida</strong>
				<span>
					De <span className='product-old-price'>R$49,90</span>
				</span>{' '}
				<span className='product-price'>R$19,90</span>
				<button type='button'>
					<div>
						<span>COMPRAR</span>
					</div>
				</button>
			</li>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</ul>
	);
}

export default ProductsList;
