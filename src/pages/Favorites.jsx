import React, { useState, useEffect } from 'react';
import '../components/ProductsList/styles.css';
import Header from '../components/Header';
import FavCard from '../components/FavCard';
import Loading from '../components/Loading';

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favoriteProducts'));
    if (favoritesFromStorage) {
      setFavoriteProducts(favoritesFromStorage);
      setLoading(false);
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

  if (isLoading) {
    return <Loading />
  }

  if (favoriteProducts.length === 0) {

    return (
			<>
        <Header />
        <div className="msg-container">
				  <h1 className='empty-fav-list-message'>Você ainda não possui produtos favoritos</h1>
        </div>
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
