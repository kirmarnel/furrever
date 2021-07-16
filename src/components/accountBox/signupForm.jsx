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
      <FormContainer>
        <Input type="text" placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}} />
        <Input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
        <Input type="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <SubmitButton type="submit" onClick={register} >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
    </BoxContainer>
  );
}
