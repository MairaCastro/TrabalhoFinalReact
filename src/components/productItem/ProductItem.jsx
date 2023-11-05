import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';

export default function ProductItem() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  const http = axios.create({
    baseURL: "http://localhost:3000"
});

const getProdutosDB = (id) => http.get(`/produtos/${id}`);

useEffect(() => {
  getProdutosDB(id).then(response => {
  setProduct(response.data);
  });
 }, [id]);

 if (!product) {
  return <div>Carregando...</div>;
}
 
 return (
  <>
  <div>
   <h1>{product.nome}</h1>
   <h1>{product.preco}</h1>
   <h1>{product.descricao}</h1>
   <img src={product.imgurl} alt="" />
  </div>
  </>
 ); 
}