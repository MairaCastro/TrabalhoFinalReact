import React, { useState, useEffect } from 'react';
import ItemOrder from '../../components/itemOrder/ItemOrder';
import styled from 'styled-components';

export default function ProductOrder({ pedidos }) {
  // const [products, setProduct] = useState([]);

  useEffect(() => {
    console.log(pedidos)
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

  return (
    <>
    {/* {pedidos} */}
      {/* <Lista>
        {pedidos.map((pedido) => (
            <ItemOrder key={pedido.id} product={pedido} />
        ))}
      </Lista> */}
    </>
  );
}