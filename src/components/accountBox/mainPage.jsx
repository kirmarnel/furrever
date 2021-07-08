import React from "react"
import styled from "styled-components";
import myImage from './assets/logo.png';

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
  width: 100%;
  display: flex;
  `;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
`;
const InnerText = styled.h2`
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 30pt;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;


const FooterContainer = styled.div`
width: 80%;
display: flex;
margin-top: 100pt;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height:65px;
  display: flex;
  flex-direction: column;
  
`;


export function mainPage (props) {
    return <BoxContainer>
      <TopContainer>
        <HeaderContainer>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <InnerText>
          Find Your..
        </InnerText>
      </InnerContainer>
        <FooterContainer>
        <img src = {myImage} height={200} width={278} alt="logo"/>
        </FooterContainer>
    </BoxContainer>

}