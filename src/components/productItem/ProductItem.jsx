import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import http from '../conexaoDb/ConexaoDb';
import { AreaProductItem, QuantidadeDiv, QuantidadeText, Divider, IncrementDiv, AreaProductInfo, ImgProduct, Title, Price, Description, Quantity, BtnComprar, ButtonBox, ButtonIncrement } from './styled'

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
    if (quantity < product.quantidade) {
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

  const addPedidoToDB = pedido => http.post('pedidos', pedido);

  const savePedido = async (qtProduto, valortotal) => {

    let idUser = localStorage.getItem("idUSer")
    const newPedido = {
      idproduto: parseInt(id, 10),
      valortotal: valortotal,
      qtproduto: qtProduto,
      iduser: parseInt(idUser, 10),
      ispedidofinalizado: false
    };
    console.log(newPedido)
      await addPedidoToDB(newPedido);
      console.log('Pedido registrado');
  };

  return (
    <>
      <AreaProductItem>
        <ImgProduct src={product.imgurl} alt="" />
        <AreaProductInfo>
          <Title>{product.nome}</Title>
          <Divider></Divider>
          <Price>R$ {product.preco}</Price>
          <Divider></Divider>
          <Description>{product.descricao}</Description>
          <Divider></Divider>

          <ButtonBox>
            <QuantidadeDiv>
              <QuantidadeText>Quantidade</QuantidadeText>
              <IncrementDiv>
                <ButtonIncrement onClick={decrement}>-</ButtonIncrement>
                <Quantity value={quantity} onChange={handleChange} />
                <ButtonIncrement onClick={increment}>+</ButtonIncrement>
              </IncrementDiv>
              {/* <Description>({product.quantidade} unidades disponíveis)</Description>         */}
            </QuantidadeDiv>
          </ButtonBox>
          <BtnComprar onClick={() => savePedido(quantity, product.preco*quantity)}>Comprar</BtnComprar>
        </AreaProductInfo>
      </AreaProductItem>
    </>
  );
}