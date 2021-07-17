import React from "react";
import { NavLink } from "react-router-dom";
import front from '../assets/front2.jpeg';


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

const BottomContainer = styled.div`
height:450px;
display: flex;
`;


const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  top-margin: 10px;
  padding: 10px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(220, 106, 106, 1) 20%,
    rgba(198, 112, 112, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
const Select = styled.select`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  color: #afada2;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
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
export const About = () => {
  return (
    <InnerContainer>
          <InnerText>About</InnerText>
          <Description>Our App helps you find your Furrever dog. We have a plentiful database full of adoptable dogs for every type of dog lover.  
            
          </Description>
        <LableContainer>
        <img src = {front} height={200} width={350} alt="about"/>
          </LableContainer>
          </InnerContainer>
  );
};
