import React, { useState } from "react";
import Axios from 'axios';
import {
  
  BoxContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import myImage from './assets/logo.png';
import styled from "styled-components";
import { LoginForm } from "./loginForm";


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
  font-size: 25px;
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

const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(220, 106, 106, 1);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;


export function SignupForm(props) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = (e) => {
    e.preventDefault()
    const registered = {
      fullName: fullName,
      email: email,
      password: password
    }
    Axios.post('http://localhost:3001/signup', registered)
    .then(res => console.log(res))

    window.location ='/about'
  }

  return (
    <BoxContainer>
      <BackDrop></BackDrop>
      <BackDrop></BackDrop>
    <InnerText>Create Account <SmallText>Please signup to continue</SmallText></InnerText>
      <LableContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}} />
        <Input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
        <Input type="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <SubmitButton type="about" onClick={register} >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
        <BoldLink href="login"onClick={LoginForm} >
          Already have an account? Signin!
        </BoldLink>
      </LableContainer>
      <FooterContainer>
        <img src = {myImage} height={100} width={180} alt="logo"/>
        </FooterContainer>
    </BoxContainer>
  );
}
