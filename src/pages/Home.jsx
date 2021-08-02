import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import { handleFetchProducts } from '../services/fetch';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchingProducts = async () => {
      const data = await handleFetchProducts('camiseta');
      console.log(data);
      setProducts(data);
    };
    fetchingProducts();
  }, []);

  return (
    <div>
      <Header />
      <ProductsList products={ products } />
    </div>
  )
}

export default Home;
