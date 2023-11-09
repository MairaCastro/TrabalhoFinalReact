import styled from 'styled-components';

export const Img = styled.img`
    width: 100%;
    height: 100%;
  `;  

export const ImgCard = styled.div`
  /* border: 5px solid red; */
    position: relative;
    height: 250px;
    transition: all 0.5s ease;
    margin-top: -35px;
  `;

export const Card = styled.div`
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

export const Title = styled.h1`
width: 100%;
font-size: 1.7em;
color: rgb(220, 220, 220);
line-height: 1;
`;


export const SizesBox = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 10px;

li{
    margin-right: 15%;
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

export const ButtonBox = styled.div`
width: 100%;
`;

export const Purchase = styled.button`
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