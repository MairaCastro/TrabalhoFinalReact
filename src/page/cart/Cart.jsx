import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import http from '../../components/conexaoDb/conexaoDb';
import ProductsOrder from "../../components/productOrder/ProductOrder";

export default function Cart() {
  document.title = "Cart | Coffee Deluxe Java"
  const [pedidos, setPedidos] = useState([]);
  const id = localStorage.getItem("idUSer");

  const Banner = styled.div`
    background-image: url("https://img.goodfon.ru/original/2880x900/d/52/meshok-kofeynye-zerna-lopatka.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;

    /* box-shadow: inset -20px -30px 25px 10px #240a0a; */
`;

  const Container = styled.div`
  overflow: auto;
  position: relative;
  width: 100svw;
  height: 100vh;
  display: grid;
  align-items: flex-start;
  /* justify-content: center; */
  background: linear-gradient(
    219deg,
    #551e1e 0%,
    #e6bc74 100%
  );
  font-family: "Roboto", sans-serif;
  gap: 50px;
  `;

  const http = axios.create({
    baseURL: "http://localhost:3000"
  });

  const getPedidosDB = () => http.get(`/pedidos`);

  function atualizarPedidos(){
    atualizarPedido()
  }
  const atualizarPedido = async () => {
    getPedidosDB().then(response => {
      const id = localStorage.getItem('idUser');
      // setPedidos(response.data);
      const pedidosDb = response.data
      const pedidosFiltrados = pedidosDb.filter(pedido => pedido.iduser === parseInt(id, 10) && pedido.ispedidofinalizado === false);
      setPedidos(pedidosFiltrados)
      // console.log("pedidosFiltrados", pedidosFiltrados)
    });
  };

  useEffect(() => {
    atualizarPedidos()
  }, []);


  return (
    <Container>
      <Banner />
      <ProductsOrder pedidos={pedidos}/>
    </Container>
  )
}