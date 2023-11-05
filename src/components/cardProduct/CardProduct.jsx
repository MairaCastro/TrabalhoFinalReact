import React, { useState, useRef } from "react";
// import "./Card.css";
import styled from 'styled-components';

export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

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

  const SneekerImg = styled.img`
    position: relative;
    width: 90%;
    transition: all 0.5s ease;
  `;

  const Card = styled.div`
    transform-style: preserve-3d;
    position: relative;
    padding: 25px;
    width: 350px;
    height: 500px;
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
   color: rgb(220, 220, 220);
`;


  const SizesBox = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;

    li{
      list-style: none;
      cursor: pointer;
      color: #000;
      font-weight: bold;
      border-radius: 30px;
      padding: 0.5rem 1.5rem;
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

      &:hover {
       background-color: #551e1e;
   }
`;

  return (
      <Card
        ref={cardRef}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SneekerImg
          ref={imgRef}
          src={"https://www.jing.fm/clipimg/full/141-1417927_caf-png.png"}
          alt="Java-Coffe"
        />
        <Title className="title" ref={titleRef}>
          Nike Dunk High
        </Title>
        <p ref={descRef}>
          Nike Dunk High is a high-top version of the classic Nike Dunk sneaker,
          featuring a padded collar for added support and comfort.
        </p>
        <SizesBox ref={sizesboxRef}>
          <li>38</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </SizesBox>
        <ButtonBox ref={purchaseRef}>
          <Purchase>
            Purchase
          </Purchase>
        </ButtonBox>
      </Card>
  );
}