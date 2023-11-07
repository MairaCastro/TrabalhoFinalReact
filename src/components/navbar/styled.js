import styled from "styled-components";

export const HeaderArea = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between; /* Updated */
background-color: #452f2f;
padding: 20px;
z-index: 999;
box-shadow: 5px 0 5px #000;

a {
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
}
`;

export const LeftLinks = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

export const CenterLinks = styled.div`
display: flex;
width: 30%;
align-items: center;
justify-content: space-evenly;
gap: 10px;
`;

export const RightLinks = styled.div`
display: flex;
align-items: center;
gap: 50px;
margin-right: 50px;
`;

export const InputSearch = styled.input`
color: #000;
border-radius: 30px;
width: 100%;
height: 30px;
font-size: 18px;
padding: 0 15px;
background-color: #452f2f;
color: #fff;
box-shadow: 0px 1px 0 0 #ffffff;
border: none;
border-radius: 0;
text-decoration: none;
outline: none;
/* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
`;

export const IconButton = styled.div`
cursor: pointer;
border: none;
padding: 0;
background: none;
outline: none;
box-shadow: none;

img {
filter: invert(1);
outline: none;
}
`;

export const Icon = styled.img`
width: 24px;
height: 24px;
`;