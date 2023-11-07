import React, { useState, useEffect } from 'react';
import CardProduct from '../cardProduct/CardProduct';
import styled from 'styled-components';

export default function ProductList({ products }) {

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

  return (
    <>
      <Lista>
        {products.map((product) => (
            <CardProduct key={product.id} product={product} />
        ))}
      </Lista>
    </>
  );
}