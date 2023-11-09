import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { StyledCard, BtnFinalizarCompra, Img, ProductInfo, StyledImage, StyledTitle, StyledPrice, StyledQuantity } from './styled';
import http from '../conexaoDb/ConexaoDb';
import FormattedNumber from '../../Util/Util';

export default function ItemOrder( pedido, {removerPedidoLista} ) {

  const getProdutosDB = (id) => http.get(`/pedidos/${id}`);
  
  const updatePedidoDB = (id, updatedPedido) => http.put(`/pedidos/${id}`, updatedPedido);

  const updatePedido = async (id) => {
    try {
      const newAtualizado = {
        idproduto: pedido.pedido.idproduto,
        valortotal: pedido.pedido.valortotal,
        qtproduto: pedido.pedido.qtproduto,
        iduser: pedido.pedido.iduser,
        ispedidofinalizado: true
      };
      const response = await updatePedidoDB(id, newAtualizado).then(() => {
        console.log(`Updating order with id: ${id}`);
              // removerPedidoLista(id)
              location.reload();
              pedido = null;
            }).catch(error => {
              console.error('An error occurred while deleting the contact:', error);
            });
      // console.log(response.data);
    } catch (error) {
      console.error('Erro ao atualizar o pedido:', error);
    }
   };

  return (
    <>
    <StyledCard>
      <StyledImage>
      <Img src={pedido.pedido.produto.imgurl}/>
      </StyledImage>
      <ProductInfo>
          <StyledTitle>{pedido.pedido.produto.nome}</StyledTitle>
          <StyledPrice>R$ {FormattedNumber(pedido.pedido.produto.preco)}</StyledPrice>
          <StyledPrice>Valor Total: R$ {FormattedNumber(pedido.pedido.valortotal)}</StyledPrice>
          <StyledQuantity>Quantidade: {pedido.pedido.qtproduto}</StyledQuantity>
      </ProductInfo>
      <BtnFinalizarCompra onClick={() => updatePedido(pedido.pedido.id)}>Finalizar Compra</BtnFinalizarCompra>

    </StyledCard>
    </>
  );
  }