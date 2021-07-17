import React, { useState, useEffect } from "react";
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

export function LoginForm(props) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  const login = (res) => {
    Axios.post("http://localhost:3001/login", {
      loginEmail: loginEmail,
      loginPassword: loginPassword,
    }).then((res) => {
      console.log(res)
      if (res.data.message) {
        setLoginStatus(res.data.message);
      } else {
        setLoginStatus(res.data[0].email);
      }
    })
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

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
      <FooterContainer>
        <img src = {myImage} height={100} width={180} alt="logo"/>
        </FooterContainer>
    </BoxContainer>
  );
}
