import React, { useState } from "react";
import Axios from 'axios';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import styled from "styled-components";

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
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 20pt;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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

    window.location ='/'
  }

  return (
    <BoxContainer>
      <LableContainer>
        <InnerText>Signup</InnerText>
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}} />
        <Input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
        <Input type="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <SubmitButton type="submit" onClick={register} >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      </LableContainer>
    </BoxContainer>
  );
}
