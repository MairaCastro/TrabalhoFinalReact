import React, { useState, useEffect } from 'react';
import ProductListCard from '../cardProduct/CardProduct';

export default function ProductList({ getProductsDB }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProductsDB().then(response => {
      setProduct(response.data);
    });
  }, []);

  return (
    <div className='list' style={{ maxHeight: '330px', overflow: 'auto' }}>
      {products.map((product) => (
        <ProductListCard key={product.id}/>
      ))}
    </div>
  );
}