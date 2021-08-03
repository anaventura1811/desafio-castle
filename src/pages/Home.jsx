import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProductsList from '../components/ProductsList';
import { handleFetchProducts } from '../services/fetch';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingProducts = async () => {
      const data = await handleFetchProducts('camiseta');
      console.log(data);
      setProducts(data);
      setLoading(false);
    };
    fetchingProducts();
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <Header />
      <ProductsList products={ products } />
      <Footer />
    </div>
  )
}

export default Home;
