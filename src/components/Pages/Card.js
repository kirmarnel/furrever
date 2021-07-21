import React from "react";
import styled from "styled-components"
import Thumbup from '../assets/thumbsup.png';
import Thumbdown from '../assets/thumbsdown.png';
import front from '../assets/front.jpeg';

//Styling

const InnerText = styled.h2`
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  color: #dc6a6a;
  padding: 5pt;
  font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

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

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`
const Description = styled.p`
  color: #737373;
  font-weight: 300;

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

const Container = styled.div`
background-size: cover;
background-position: center;
background-clip: content-box;
border: 3px solid white;
height: 200px;
width: 250px;
box-shadow: 0 0 0px rgba(15, 15, 15, 0.28);
position: relative;
margin: 5px auto 22px;
border-radius: 19px;

`;
const Img = styled.img`
border-radius: 19px;
width:100%;
height: auto; 
max-height:200px;

`;
const Wrapper = styled.div`
float: left;
width: 100%;
text-align: center;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
const FooterContainer = styled.div`
  width: 350px;
  text-align: center;
  padding-top: 25px;
  background-color: #f1f0f0;
  height: 70px;
  z-index: 0;
  `; 
//Apply styling to data returned from API for client-side

export const Card = (props) => {
console.log(props);
  return (
    <InnerContainer>
      <LableContainer>
        <InnerText>{props.props.name} </InnerText>
        <Container>
          <Img src={props.props.photos ==="Sorry, this dog has no photos"?front:props.props.photos}  alt={props.props.photos}/>
        </Container>
        <Description>
          {props.props.description}
        </Description>
        <br></br>
      </LableContainer>
    </InnerContainer>
  );
};
