import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  /* justify-content: space-between; */
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: #ffffff;
`;

export const StyledImage = styled.div`
  width: 200px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 20px;
`;
export const ProductInfo = styled.div`
 width: 100%;
  height: 100px;
  line-height: 30px;
  /* background-color: #e0e0e0; */
  
  margin-right: 20px;
  
`;

export const StyledTitle = styled.h1`
  font-size: 18px;
  color: #ffffff;
  margin: 0;
`;

export const StyledPrice = styled.h2`
  font-size: 16px;
   margin: 0;
`;

export const StyledQuantity = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Img = styled.img`
width: 100%;
height: 100%;
`;  

export const BtnFinalizarCompra = styled.button`
cursor: pointer;
outline: none;
width: 30%;
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