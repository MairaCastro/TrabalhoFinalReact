import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { SizesBox, ButtonBox, Purchase, Title, Card, Img, ImgCard } from "./styled";
import FormattedNumber from '../../Util/Util';


export default function CardProduct( product ) {
  const [description, setDescription] = useState( '');
  const [title, setTitle] = useState('');
  const [preco, setPreco] = useState('');
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

  useEffect(() => {
    setDescription(product.product.descricao)
    setTitle(product.product.nome)
    setPreco(FormattedNumber(product.product.preco))
  }, [product]);
 
  useEffect(() => {
    const maxTam = 27
    if(description.length > maxTam){
      setDescription(description.substring(0, maxTam-3) + '...');
    }
  }, [description]);

  useEffect(() => {
    const maxTam = 28
    if(title.length > maxTam){
      setTitle(title.substring(0, maxTam-3) + '...');
    }
  }, [title]);

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
          {title}
        </Title>
        <p ref={descRef}>
          {description}
        </p>
        <SizesBox ref={sizesboxRef}>
          <li>R$ {preco}</li>
        </SizesBox>
        <ButtonBox ref={purchaseRef}>
          <Purchase onClick={handleProductItemClick}>
            Comprar
          </Purchase>
        </ButtonBox>
      </Card>
    </>
  );
}