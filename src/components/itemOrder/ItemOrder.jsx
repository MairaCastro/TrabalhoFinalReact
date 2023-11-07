import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import "./Card.css";
import styled from 'styled-components';

export default function CardProduct( pedido ) {
      const [produto, setProdutos] = useState(null);
//   const [description, setDescription] = useState( '');
//   const [title, setTitle] = useState('');
//   const [preco, setPreco] = useState('');

//   useEffect(() => {
//     setDescription(product.product.descricao)
//     setTitle(product.product.nome)
//     setPreco(FormattedNumber(product.product.preco))
//   }, [pedido]);
 
//   useEffect(() => {
//     const maxTam = 27
//     if(description.length > maxTam){
//       setDescription(description.substring(0, maxTam-3) + '...');
//     }
//   }, [description]);

//   useEffect(() => {
//     const maxTam = 28
//     if(title.length > maxTam){
//       setTitle(title.substring(0, maxTam-3) + '...');
//     }
//   }, [title]);

//   function FormattedNumber( number ) {
//     const formattedNumber = number?.toLocaleString('pt-BR', { //usando ?. para chamar toLocaleString() apenas se number não for undefined ou null. Se number for undefined ou null, formattedNumber será undefined
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     });

//     return formattedNumber
//   }

// console.log("ItemOrder:", pedido)

  return (
    <>
        <div>
            <h1>{'oi'}</h1>
        </div>
    </>
  );
}