import React, { useState, useEffect } from 'react';
import ItemOrder from '../../components/itemOrder/ItemOrder';
import { Lista,Title } from './styled';
import http from '../../components/conexaoDb/ConexaoDb';

export default function ProductOrder({ pedidos }) {
  const [pedidoAtualizado, setPedidoAtualizado] = useState([]);
  const [loading, setLoading] = useState(true);
   
   useEffect(() => {
    // This will run whenever pedidoAtualizado changes
    // console.log(pedidoAtualizado);
  }, [pedidoAtualizado]);  


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
    // Adiciona um Loading na tela até que todos os produtos sejam carregados
    atualizarPedidosComProdutos().then(() => {
      setLoading(false);
    });
   }, [pedidos]);
   
   if (loading) {
    return <div></div>;
   }
  if(pedidos.length == 0){
    return (
      <Title>Seu carrinho está vazio</Title>
    ) 
  }
  return (
    <>
      <Lista>
        {pedidoAtualizado.length == 0 ? null : pedidoAtualizado.map((pedido) => (
            pedido && <ItemOrder key={pedido.id} pedido={pedido} removerPedidoLista={removerPedidoLista}/>
        ))}
      </Lista>
    </>
  );
}