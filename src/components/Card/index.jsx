import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

function Card({ product }) {
  return (
		<div>
			<li key={product.id} className='list-item'>
				<div className='card-header'>
					<span className='header-title'>O2 STORE</span>
					<IoMdHeartEmpty size={30} color={'#ff3576'} />
				</div>
				<img src={product.thumbnail} alt={product.title} />
				<div className='separator' />
				<strong>{product.title}</strong>
				<span className="product-price">{product.price}</span>
				<button type='button'>
          <div>
            <span>
					    COMPRAR
            </span>
          </div>
				</button>
			</li>
		</div>
	);
}

export default Card;
