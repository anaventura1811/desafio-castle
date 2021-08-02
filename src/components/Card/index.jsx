import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import tagIcon from '../../images/tag.svg';
import './styles.scss';

function Card({ product }) {
  const { price, original_price } = product;
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(price);

  const originalPriceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(original_price);
  
  const installmentsFormatted = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(product.installments.amount);

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
				<div className='origin-price'>
					{product.original_price && product.original_price !== product.price ? (
						<span className='original-price'>
							De <span className='product-old-price'>{originalPriceFormatted}</span>
						</span>
					) : (
						''
					)}
				</div>
				<div className='container'>
					<img className='tag-icon' src={tagIcon} alt='tag icon' />
					<span className='product-price'>{formattedPrice}</span>
				</div>
					{product.installments ? (
          <div className="installments-container">
                <span className='installments'>{product.installments.quantity}x</span>{' '}
                <span id="installment-connector">de</span>
                {' '}
              <span>{
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.installments.amount)
                }
              </span>
            </div>
            ) : ('')}
				<button type='button'>
					<div>
						<span>COMPRAR</span>
					</div>
				</button>
				<span className='original-price not-prime'>
					Não sócio:{' '}
					<span className='not-prime-price'>
						{product.original_price ? originalPriceFormatted : formattedPrice}
					</span>
				</span>
			</li>
		</div>
	);
}

export default Card;
