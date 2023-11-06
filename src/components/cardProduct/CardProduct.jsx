import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import "./Card.css";
import styled from 'styled-components';

export default function CardProduct( product ) {
  const [description, setDescription] = useState( '');
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  useEffect(() => {
    setDescription(product.product.descricao)
  }, [product]);
 
  useEffect(() => {
    if(description.length > 30){
      setDescription(description.substring(0, 27) + '...');
    }
  }, [description]);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(100px) rotateZ(-10deg)";
    sizesBox.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesBox.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  }  

  const Img = styled.img`
    width: 100%;
    height: 100%;
  `;  

  const ImgCard = styled.div`
  /* border: 5px solid red; */
    position: relative;
    height: 250px;
    transition: all 0.5s ease;
    margin-top: -35px;
  `;

  const Card = styled.div`
    /* scale: 1; */
    margin: 20px 15px;
    transform-style: preserve-3d;
    position: relative;
    padding: 25px;
    width: auto;
    min-width: 250px;
    max-width: 250px;
    height: 450px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(
      25deg,
      #551e1e 0%,
      #e6bc74 86%
    );
    transition: all 0.1s ease;

    p{
      width: 100%;
      color: rgb(220, 220, 220);
    }
  `;

const Title = styled.h1`
   width: 100%;
   font-size: 2em;
   color: rgb(220, 220, 220);
   line-height: 1;
`;


  const SizesBox = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

    li{
      list-style: none;
      color: #000;
      font-weight: bold;
      border-radius: 30px;
      padding: 6% 15%;
      background-color: rgb(220, 220, 220);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    &:hover{
      background-color: rgba(134, 134, 134, 0);
    }
  `;

  const ButtonBox = styled.div`
    width: 100%;
  `;

  const Purchase = styled.button`
    cursor: pointer;
    width: 100%;
    border-radius: 30px;
    padding: 0.8rem 1.5rem;
    font-weight: bold;
    border: none;
    font-size: 1rem;
    letter-spacing: 1px;
    background-color: rgb(222, 157, 54);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      outline: none;

      &:hover {
       background-color: #e6bc74;
       color: #551e1e;
       scale: 1.05;
       box-shadow: 0 0 10px 0 #e6bc74;
   }
`;

const navigate = useNavigate();
const handleProductItemClick = () => {
  console.log(product.product.id);
  navigate(`/product/${product.product.id}`);
};

  return (
    <>
      <Card
        ref={cardRef}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        // onMouseMove={handleMouseMove}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <ImgCard>
          <Img
            ref={imgRef}
            src={product.product.imgurl}
            alt="Java-Coffe"
          />
        </ImgCard>
        <Title className="title" ref={titleRef}>
          {product.product.nome}
        </Title>
        <p ref={descRef}>
          {description}
        </p>
        <SizesBox ref={sizesboxRef}>
          <li>R$ {product.product.preco}</li>
        </SizesBox>
        <ButtonBox ref={purchaseRef}>
          <Purchase onClick={handleProductItemClick}>
            Purchase
          </Purchase>
        </ButtonBox>
      </Card>
    </>
  );
}