export const handleFetchProducts = (productName) => {
	// startLoading();
	let products;
	return new Promise((resolve) => {
		fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productName}`).then((response) => {
			response.json().then((data) => {
				// stopLoading();
				products = data.results;
				resolve(products);
			});
		});
	});
};
