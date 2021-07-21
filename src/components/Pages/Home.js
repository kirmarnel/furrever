import React from "react"
import styled from "styled-components";
import myImage from '../assets/logo.png';
import { NavLink } from "react-router-dom";

const InnerText = styled.h2`
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 30pt;
  text-decoration: none;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

export const Home = () => {
  return (
        <NavLink to="about" class="blah">
        <InnerText>
          Find Your..
          </InnerText>
        <img src = {myImage} height={150} width={215} alt="logo"/>
    </NavLink>
  );
};
