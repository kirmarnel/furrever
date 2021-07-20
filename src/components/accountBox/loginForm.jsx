import React, { useState } from "react";
import Axios from "axios";
import {
  BoxContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import styled from "styled-components";
import myImage from './assets/logo.png';

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
const InnerText = styled.h2`
 text-align: left;
  font-size: 30px;
  z-index: 100;
  text-align: center;
  font-weight: 800;
  color: #ffff;
  padding: 20pt;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;


const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(198, 112, 112, 1) 20%,
    rgba(220, 106, 106, 1) 100%
    
  );
`;
const FormContainer = styled.form`
width: 100%;
margin-top: 80px;
display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 25px;
  display: flex:

  `; 

  const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const ActionButton = styled.button`
display:inline-block;
text-weight: 10px;
margin-top: 50px;
margin-left: 10px;
padding: 8px 14px 10px 10px;
border: none;
background: #ffff;
color: #fff;
border-radius: 80px 80px 80px 80px;
cursor: pointer;
:hover {
  opacity: 0.8;
`;
const GoogleButton =styled.button`
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
`;

export function LoginForm(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = (res) => {
    Axios.post("http://localhost:3001/login", {
      loginEmail: loginEmail,
      loginPassword: loginPassword,
    }).then((res) => {
      console.log(res)
    })
    window.location = '/'
  };

  


  return (
    <BoxContainer>
    <BackDrop></BackDrop>
    <InnerText>Welcome Back to Furrever<SmallText>Please signin to continue</SmallText></InnerText>
    <LableContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value)}} />
        <Input type="password" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value)}}/>
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      </LableContainer>  
      <div class="g-signin2" data-width="40" data-height="40" data-onsuccess="onSignIn"></div>
      <FooterContainer>
        <img src = {myImage} height={100} width={180} alt="logo"/>
        </FooterContainer>
    </BoxContainer>
  );
}
