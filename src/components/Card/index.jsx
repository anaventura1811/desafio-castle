import React, { useState, useEffect }from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import tagIcon from '../../images/tag.svg';
import { format } from '../../services/formattingService';
import './styles.css';
import { useCart } from '../../hooks/useCart';
import { handleSetFavoritesToLocalStorage } from '../../services/localStorageService';

function Card({ product }) {
	const { price, original_price } = product;

	// produtos favoritos
	const [isFavorite, setIsFavorite] = useState(false);

	const { addProduct } = useCart();

	const formattedPrice = format(price);
	const originalPriceFormatted = format(original_price);

	const productObj = {
		id: product.id,
		title: product.title,
		amount: product.amount || 0,
		price: product.price,
		thumbnail: product.thumbnail,
		available_quantity: product.available_quantity,
		original_price: product.original_price || '',
		installments:
			{
				quantity: product.installments.quantity || 0,
				amount: product.installments.quantity || 0,
			} || '',
	};

	useEffect(() => {
		let cancel = false;
		const handleCreateLocalStorageFavKey = () => {
			if (cancel) return;
			const getFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
			if (getFavoriteProducts && getFavoriteProducts.some((item) => item.id === product.id)) {
				setIsFavorite(true);
			} else if (!getFavoriteProducts) {
				setIsFavorite(false);
				localStorage.setItem('favoriteProducts', JSON.stringify([]));
			}
		};
		handleCreateLocalStorageFavKey();
		return () => {
			cancel = true;
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product.id]);

	const handleAddFavoriteProduct = () => {
		setIsFavorite((prevState) => !prevState);
	};

	useEffect(() => {
		let cancel = false;
		if (cancel) return;
		const verifyFav = () => {
			handleSetFavoritesToLocalStorage(productObj, isFavorite, 'favoriteProducts', product.id);
		};
		verifyFav();
		return () => {
			cancel = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFavorite]);

	return (
		<div>
			<li key={product.id} className='list-item'>
				<div className='card-header'>
					<span className='header-title'>O2 STORE</span>
					{isFavorite ? (
						<IoMdHeart size={30} color={'#ff3576'} onClick={handleAddFavoriteProduct} />
					) : (
						<IoMdHeartEmpty size={30} color={'#ff3576'} onClick={handleAddFavoriteProduct} />
					)}
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
						<div />
					)}
				</div>
				<div className='container'>
					<img className='tag-icon' src={tagIcon} alt='tag icon' />
					<span className='product-price'>{formattedPrice}</span>
				</div>
				{product.installments ? (
					<div className='installments-container'>
						<span className='installments'>{product.installments.quantity}x</span>{' '}
						<span id='installment-connector'>de</span>{' '}
						<span>{format(product.installments.amount)}</span>
					</div>
				) : (
					''
				)}
				<button type='button' onClick={() => addProduct(product.id, product)}>
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
