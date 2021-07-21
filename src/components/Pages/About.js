import React from "react";
import front from '../assets/front2.jpeg';
import { withRouter } from "react-router-dom";



import styled from "styled-components";
const InnerText = styled.h2`
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 10pt;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const LableContainer = styled.div`
width: 250px;
display: flex;
flex-direction: column;
font-size: 10px;
color: #afada2;
font-weight: 300;
line-weight: 5px;
align-items: center;
font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const Description = styled.p`
  color: #737373;
  font-size: 10pt
  `;
  const FooterContainer = styled.div`
  width: 350px;
  text-align: center;
  padding-top: 25px;
  background-color: #f1f0f0;
  height: 70px;
  z-index: 0;
  `; 
     

const About = () => {
  return (
    
    <InnerContainer>
          <InnerText>About</InnerText>
          <Description>Our App helps you find your Furrever dog. We have a plentiful database full of adoptable dogs for every type of dog lover.  
  
          </Description>
        <LableContainer>
        <img src = {front} height={200} width={350} alt="about"/>
          </LableContainer>
          <FooterContainer>
          </FooterContainer>
          </InnerContainer>
  );
};

export default withRouter(About);
