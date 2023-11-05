import { useState } from 'react'
import styled from 'styled-components';
// import Card from "../../components/cardProduct/CardProduct";
import ProductsList from "../../components/productList/ProductList";
import axios from 'axios';

export default function Home(){
    const Container = styled.div`
    overflow: auto;
    position: relative;
    width: 100svw;
    height: 100vh;
    display: grid;
    align-items: flex-start;
    justify-content: center;
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
    const Overlay = styled.div`
        background: linear-gradient(
        25deg,
        #551e1e 0%,
        #e6bc74 86%
        );
    `;

    const http = axios.create({
        baseURL: "http://localhost:3000"
    });
    const getProdutosDB = () => http.get('/produtos');

    return(
        <>
            <Container>
                <Banner/>
                <ProductsList getProdutosDB={getProdutosDB}/>
            </Container>
        </>
    )
}