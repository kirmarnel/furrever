import React from "react";
import styled from "styled-components";

export const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;
const InnerText = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 30pt;
  text-decoration: none;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;
const BottomContainer = styled.div`
height:450px;
display: flex;
`;

const FooterContainer = styled.div`
width: 100%;
height:65px;
display: flex;
flex-direction: column;
background: rgb(237,237,237)
`;
export const Contact = () => {
  return (
    
      <InnerText>Contact</InnerText>
      
  );
};
