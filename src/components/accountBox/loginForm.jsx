import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
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

const Title = styled.div`
font-size: 10pt;
color: #737373;
font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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

  

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].email);
  //     }
  //   });
  // }, []);

  return (
    <BoxContainer>
      <LableContainer>
      <InnerText>Login</InnerText>
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
    </BoxContainer>
  );
}
