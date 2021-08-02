import React, { useState } from 'react';
import ProductsList from '../components/ProductsList';

function Home() {
  const [products, setProducts] = useState([]);
  
  return (
    <div>
      <ProductsList />
    </div>
  )
}

export default Home;
