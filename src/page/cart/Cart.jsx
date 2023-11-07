import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import http from '../../components/conexaoDb/ConexaoDb';

export default function Cart(){
  const [product, setProduct] = useState(null);
    const id = localStorage.getItem("idUSer");

    useEffect(() => {
        // alert(id)
        getProdutosDB(id).then(response => {
          setProduct(response.data);
        });
      }, [id]);

const getProdutosDB = (id) => http.get(`/pedidos/${id}`);
      
  const pesquisaPedido = ()=>{

    for (const iterator of object) {
      
    }
  };

    return(
        <h1>Cart</h1>
    )
}