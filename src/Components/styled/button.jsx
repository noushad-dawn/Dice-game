import styled from "styled-components";

export const Button=styled.button`
font-size:16px;
color:white;
background-color:black;
border:none;
border-radius:5px;
width:220px;
height:44px;
transition: 0.4s background ease;
 &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;