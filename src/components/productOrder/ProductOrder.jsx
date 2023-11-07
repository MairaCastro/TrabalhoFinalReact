import React, { useState, useEffect } from 'react';
import ItemOrder from '../../components/itemOrder/ItemOrder';
import styled from 'styled-components';
import http from '../../components/conexaoDb/ConexaoDb';

export default function ProductOrder({ pedidos }) {
  // const [products, setProduct] = useState([]);

  useEffect(() => {
    // console.log(pedidos)
  }, []);

  const Lista = styled.div`
    /* border: 5px solid red; */
    overflow: auto;
    display: flex;
    flex-wrap: wrap; // Adicionado
    gap: 10px; // Adicionado
    margin: 30px 30px;
    padding: 0;
    justify-content: center;
  `;

const getProdutosDB = async (idproduto) => {
    const response = await http.get('/produtos');
    return response.data;
  };
  
  

  useEffect(() => {
    // console.log(pedidos)
    pedidos.forEach(async (pedido) => {
      const produtos = await getProdutosDB();
      const produto = produtos.find(produto => produto.id === pedido.idproduto);
      pedido.produto = produto;
    //   console.log("pedido.produto", pedido.produto)
    //   console.log("pedido.produto2", pedido)
      return pedido
    });
  }, []);
  

  return (
    <>
      <Lista>
        {pedidos.map((pedido) => (
            <ItemOrder key={pedido.id} pedido={pedido} produto={pedido.produto} />
        ))}
      </Lista>
    </>
  );
}