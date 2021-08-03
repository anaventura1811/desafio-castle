const handleRemoveFavorite = (id, key) => {
	const getLocalStorage = JSON.parse(localStorage.getItem(key));
	const newArrOfFavProducts = getLocalStorage.filter((it) => it.id !== id);
	localStorage.setItem(key, JSON.stringify(newArrOfFavProducts));
};

export const handleSetFavoritesToLocalStorage = (product, bool, key, id) => {
	const getLocalStorage = JSON.parse(localStorage.getItem(key));

	if (bool) {
		const checkLocalStorage = getLocalStorage.some((item, index) => {
			if (item.id === id) {
				const productsArr = getLocalStorage;
				productsArr[index] = product;
				localStorage.setItem(key, JSON.stringify(productsArr));
			}
			return item.id === id;
		});
		if (!checkLocalStorage) {
			const newArr = [...getLocalStorage, product];
			localStorage.setItem(key, JSON.stringify(newArr));
		}
	} else {
		handleRemoveFavorite(id, key);
	}
};
