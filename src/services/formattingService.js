export const format = (price) => new Intl.NumberFormat('pt-br', {
	style: 'currency',
	currency: 'BRL',
}).format(price);
