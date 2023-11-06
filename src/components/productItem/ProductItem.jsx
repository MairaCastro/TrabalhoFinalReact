import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import http from '../conexaoDb/ConexaoDb';
import { AreaProductItem, IncrementDiv, AreaProductInfo, ImgProduct, Title, Price, Description, Quantity, BtnComprar, ButtonBox, ButtonIncrement } from './styled'

export default function ProductItem() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);


const getProdutosDB = (id) => http.get(`/produtos/${id}`);

useEffect(() => {
  getProdutosDB(id).then(response => {
  setProduct(response.data);
  });
 }, [id]);

 if (!product) {
  return <div>Carregando...</div>;

} 

const increment = () => {
  if (quantity < product.quantidade){
    setQuantity(quantity + 1);
  }
};

const decrement = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

const handleChange = (event) => {
  if (event.target.value <= product.quantidade && event.target.value > 0) {
    setQuantity(event.target.value);
  }
};

 return (
  <>
  <AreaProductItem>
    <ImgProduct src={product.imgurl} alt="" />
    <AreaProductInfo>
      <Title>{product.nome}</Title>
      <Price>R$ {product.preco}</Price>
      <Description>{product.descricao}</Description>
      <ButtonBox>
        <IncrementDiv>
          <ButtonIncrement onClick={decrement}>-</ButtonIncrement>
            <Quantity type="number" value={quantity} onChange={handleChange} />        
          <ButtonIncrement onClick={increment}>+</ButtonIncrement>
        </IncrementDiv>
        {/* <Description>({product.quantidade} unidades disponíveis)</Description>         */}
      </ButtonBox>
        <BtnComprar>Comprar</BtnComprar>
    </AreaProductInfo>    
  </AreaProductItem>
  </>
 ); 
}