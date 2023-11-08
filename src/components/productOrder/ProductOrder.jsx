import React, { useState, useEffect } from 'react';
import ItemOrder from '../../components/itemOrder/ItemOrder';
import { Lista } from './styled';
import http from '../../components/conexaoDb/ConexaoDb';

export default function ProductOrder({ pedidos }) {
  const [pedidoAtualizado, setPedidoAtualizado] = useState([]);

const getProdutosDB = async (idproduto) => {
    const response = await http.get('/produtos');
    return response.data;
  };

  function removerPedidoLista(id) {
    console.log(`Removing order with id: ${id}`);
    setPedidoAtualizado(pedidoAtualizado.filter((pedido) => pedido.id !== id));
    console.log('pedidoAtualizado')
  };
  
  const atualizarPedidosComProdutos = async () => {
    const novosPedidos = await Promise.all(pedidos.map(async (pedido) => {
      const produtos = await getProdutosDB();
      const produto = produtos.find(produto => produto.id === pedido.idproduto);
      return { ...pedido, produto };
    }));
    setPedidoAtualizado(novosPedidos);
  };

  useEffect(() => {
    atualizarPedidosComProdutos();
   }, [pedidos]);
   
   useEffect(() => {
    // This will run whenever pedidoAtualizado changes
    console.log(pedidoAtualizado);
  }, [pedidoAtualizado]);  

  return (
    <>
      <Lista>
        {pedidoAtualizado.length == 0 ? null : pedidoAtualizado.map((pedido) => (
            <ItemOrder key={pedido.id} pedido={pedido} removerPedidoLista={removerPedidoLista}/>
        ))}
      </Lista>
    </>
  );
}