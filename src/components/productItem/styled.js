import styled from "styled-components";

export const AreaProductItem = styled.div`
    width: 100svw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(
        25deg,
        #e6bc74 0%,
        #551e1e 80%
    ); 
    background-color: #f5f2d0;
    border-radius: 5px;
    gap: 8%;

    img{
        width: 30%;
        height: auto;
        margin-top: 10px;   
        padding: 10%;
    }
    `;

export const AreaProductInfo = styled.div`
line-height: 1.5;   
max-width: 400px;
`;

export const Price = styled.h2`
    font-size: 40px;
    color: #fff;
    `;

export const PricePix = styled.h2`
    font-size: 15px;
    color: #fff;
    `;

export const PricePixDiv = styled.div`
    display: inline-flex;
    align-items: baseline;
    gap: 10px;
`;

export const PriceParcelado = styled.h2`
font-size: 15px;
color: #fff;
margin-top: -40px;
margin-bottom: 40px;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: #fff;
    `;

export const QuantidadeText = styled.h1`
margin-top: 30px;
font-size: 20px;
color: #fff;
`;

export const Divider = styled.h1`
height: 100%;
margin: 0;
padding: 0;
border-bottom: 1px solid #d3d3d3;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #fff;
    `;

export const ImgProduct = styled.img`
    line-height: 1.5;    
`;

export const Quantity = styled.input`
        background: #fff;
        outline: none;
        color: #fff;
        height: 20px;
        width: 50px;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        text-align: center;
    `;

export const BtnComprar = styled.button`
cursor: pointer;
outline: none;
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

export const ButtonIncrement = styled.label`
cursor: pointer;
margin: 0;
padding: 0;
outline: none;
width: 25px;
height: 25px;
border-radius: 5px;
font-weight: bold;
border: none;
font-size: 1rem;
letter-spacing: 1px;
background-color: white;
color: #000;
align-items: center;
align-content: center;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  outline: none;

  &:hover {
   background-color: #e6bc74;
   color: #551e1e;
   scale: 1.05;
   color: white;
   box-shadow: 0 0 10px 0 #e6bc74;
}
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
  `;

export const IncrementDiv = styled.div`
    display: flex;
    border: 1px solid #d3d3d3;
    border-radius: 20px;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    align-content: center; 
`;

export const QuantidadeDiv = styled.div`
    text-align: center;
    align-items: center;
    align-self: center;
    align-content: center; 
`;