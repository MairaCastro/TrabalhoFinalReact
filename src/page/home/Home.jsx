import { useState } from 'react'
import styled from 'styled-components';
import Card from "../../components/cardProduct/CardProduct";

export default function Home(){
    const Container = styled.div`
    position: relative;
    width: 100svw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(75, 53, 118);
    background: linear-gradient(
      219deg,
      #551e1e 0%,
      #e6bc74 100%
    );
    font-family: "Roboto", sans-serif;
    gap: 50px;
    `;

    return(
        <>
            <h1>Home</h1>
            <div className="App">
                <Container>
                    <Card />
                </Container>
            </div>
        </>
    )
}