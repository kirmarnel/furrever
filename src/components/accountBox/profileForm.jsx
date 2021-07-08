import React from "react";
import styled from "styled-components";
import myImage from './assets/logo.png';

import {
  Input,
  SubmitButton,
  Select,
  Textarea

}
  from "./common";

const BoxContainer = styled.div`
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

const TopContainer = styled.div`
  height:50px;
  display: flex;
  `;

const HeaderContainer = styled.div`
  width: 100%;
  height:65px;
  display: flex;
  flex-direction: column;
  background: rgb(237,237,237);
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  padding: 10pt;
  rgba(220, 106, 106, 1) 100%
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  z-index: 10;
  text-align: center;
`;
const InnerText = styled.h2`
  padding: 20pt 0 ;
  font-size: 20px;
  font-weight: 600;
  color: #dc6a6a;
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

const LableContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
font-size: 10px;
font-weight: 300;
line-weight: 5px;
font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

`;

export function HomeBox (props) {
    return <BoxContainer>
        <TopContainer>
          <HeaderContainer>
            <HeaderText>
            <img src = {myImage} height={50} width={100} alt="logo"/>
            </HeaderText>
          </HeaderContainer>
        </TopContainer>
        <BottomContainer>
        <InnerContainer>
          <InnerText>Profle page</InnerText>
        <LableContainer>
          Name
          <Input type="text" name="name"/>
          Address
          <Input type="text" name="name"/>
          Phone Number
          <Input type="text" name="name"/>
          <p>Pick your Pet</p>
         <Select>
          <option value="text">Dog</option>
          <option value="lime">Cat</option>
          </Select>
          <p>Describe your lifestyle</p>
          <Textarea>
          </Textarea>
          <SubmitButton>Submit</SubmitButton>
          <label>
            <br/>
            <br/>
        <input
          name="acceptedTerms"
          type="checkbox"
          required />
          <br/>I accept the terms of service
      </label>
          </LableContainer>
        </InnerContainer>
        </BottomContainer>
        <FooterContainer></FooterContainer>
    </BoxContainer>

}