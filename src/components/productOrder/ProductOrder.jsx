import React, { useState, useEffect } from 'react';
import ItemOrder from '../../components/itemOrder/ItemOrder';
import styled from 'styled-components';
import http from '../../components/conexaoDb/ConexaoDb';

export default function ProductOrder({ pedidos }) {
  const [pedidoAtualizado, setPedidoAtualizado] = useState([]);

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
    const atualizarPedidos = async () => {
      const novosPedidos = await Promise.all(pedidos.map(async (pedido) => {
        const produtos = await getProdutosDB();
        const produto = produtos.find(produto => produto.id === pedido.idproduto);
        return { ...pedido, produto };
      }));
      setPedidoAtualizado(novosPedidos);
    };
    atualizarPedidos();
   }, [pedidos]);
   
  

  return (
    <>
      <Lista>
        {pedidoAtualizado.length == 0 ? null : pedidoAtualizado.map((pedido) => (
            <ItemOrder key={pedido.id} pedido={pedido}/>
        ))}
      </Lista>
    </>
  );
}