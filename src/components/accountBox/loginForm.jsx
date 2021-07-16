import React, { useState, useEffect } from "react";
import Axios from "axios";
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
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value)}} />
        <Input type="password" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value)}}/>
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
     
    </BoxContainer>
  );
}
