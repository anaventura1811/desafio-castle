import React, { useState, useEffect } from 'react';
import '../components/ProductsList/styles.css';
import Header from '../components/Header';
import FavCard from '../components/FavCard';

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favoriteProducts'));
    if (favoritesFromStorage) {
      setFavoriteProducts(favoritesFromStorage);
    }
    return () => {
      cancel = true;
    }
  }, []);

  function handleRemoveFavorite(index) {
		const updatedFavoriteProducts = favoriteProducts
			.slice(0, index)
			.concat(favoriteProducts.slice(index + 1));

		localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavoriteProducts));
		setFavoriteProducts(updatedFavoriteProducts);
	}

  if (favoriteProducts.length === 0) {

    return (
			<>
        <Header />
				<p className='empty-fav-list-message'>Você ainda não possui produtos favoritos</p>;
			</>
		);
  }

  return (
		<>
			<Header />
			{favoriteProducts.length === 0 ? (
				<p className="empty-fav-list-message">Você ainda não possui produtos favoritos</p>
			) : (
				<ul className='products-list'>
					{favoriteProducts.map((favorite, index) => (
						<FavCard product={favorite} onClick={() => handleRemoveFavorite(index) }/>
					))}
				</ul>
			)}
		</>
	);
}

export default Favorites;
