import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Card from "../../components/cardProduct/CardProduct";
import ProductsList from "../../components/productList/ProductList";
import axios from 'axios';
import http from '../conexaoDb/conexaoDb';

export default function Home( {search} ){
    const [products, setProducts] = useState([]);

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

    const Banner = styled.div`
        background-image: url("https://img.goodfon.ru/original/2880x900/d/52/meshok-kofeynye-zerna-lopatka.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 300px;

        /* box-shadow: inset -20px -30px 25px 10px #240a0a; */
    `;

    const getProdutosDB = () => http.get('/produtos');

    useEffect(() => {
        getProdutosDB().then(response => {
          setProducts(response.data);
          // const produtosComEstoque = response.data.filter(produto => produto.quantidade > 0);
          // const produtosComEstoque = response.data.filter(produto => produto.nome.toLowerCase().includes('expresso'.toLowerCase()));
        //   setProduct(produtosComEstoque);
        });
      }, []);

      useEffect(() => {
        // Supondo que getProducts é uma função que busca a lista de produtos
        getProdutosDB().then(response => {
            console.log(search);
          const filteredProducts = response.data.filter(product => product.nome.toLowerCase().includes(search.toLowerCase()));
          setProducts(filteredProducts);
        });
      }, [search]);

    return(
        <>
            <Container>
                <Banner/>
                <ProductsList products={products}/>
            </Container>
        </>
    )
}