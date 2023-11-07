import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { StyledCard, BtnFinalizarCompra, Img, ProductInfo, StyledImage, StyledTitle, StyledPrice, StyledQuantity } from './styled';
import axios from 'axios';
import http from '../conexaoDb/ConexaoDb';
import styled from 'styled-components';

export default function CardProduct( pedido ) {

  const getProdutosDB = (id) => http.get(`/pedidos/${id}`);

  const updatePedido = async (id) => {
    try {
      const response = await axios.put(`pedidos/${id}`, {
        ispedidofinalizado: true
      });
      console.log(response.data);
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
          <StyledPrice>R$ {pedido.pedido.produto.preco}</StyledPrice>
          <StyledPrice>Valor Total: R$ {pedido.pedido.valortotal}</StyledPrice>
          <StyledQuantity>Quantidade: {pedido.pedido.qtproduto}</StyledQuantity>
      </ProductInfo>
      <BtnFinalizarCompra onClick={() => updatePedido(pedido.pedido.id)}>Finalizar Compra</BtnFinalizarCompra>

    </StyledCard>
    </>
  );
  }