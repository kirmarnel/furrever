// import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../Pages/Card";
const petfinder = require("@petfinder/petfinder-js")

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


const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const BottomContainer = styled.div`
height:450px;
display: flex;
`;


const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
`;
const SubmitButton = styled.button`
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

  &:hover {
    filter: brightness(1.03);
  }
`;
const Select = styled.select`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  color: #afada2;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4) 20;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(220, 106, 106, 1);
  }
`;
const LabelContainer = styled.div`
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

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {dog:'Labrador Retriever', 
      apiData:[],
      currentPet: {},
      currentPetIndex: 0,
      displaySearch: true
    };
    
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event) => {
      console.log(event.target.value)
      this.setState({dog: event.target.value});
      event.preventDefault(); 
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const API_KEY = '0Hj8w8pgamlFFvo6xp8aJG6GPVcIb0tCwYv26pzW6AKvRf7PlT'
      const API_SECRET = 'OG9M2CYbc8EMQBDAFZHav5TUMmGO1xYM9bCsB2pa'
      var client = new petfinder.Client({apiKey: API_KEY, secret: API_SECRET})

       client.animal.search({
          type: "Dog",
          breed: this.state.dog,
          limit: 10,
        }).then(response => {
          console.log(response.data.animals);
          var apiData = response.data.animals;
          let apiResults = []
          for (let i=0;i < apiData.length;i++) {
            if (apiData [i].photos[0].small){
            apiResults.push({
              name: apiData[i].name,
              description: apiData[i].description, 
              photos: apiData[i].photos[0].small
            })
          }else if (apiData[i].primary_photo_cropped.small){
            apiResults.push({
              name: apiData[i].name,
              description: apiData[i].description, 
              photos: apiData[i].primary_photo_cropped.small
            })
          } else {
            apiResults.push({
              name: apiData[i].name,
              description: apiData[i].description, 
              photos: "",
            })
          }
          }
        this.setState({apiData:apiResults,currentPet:apiResults[0],displaySearch:false});
        console.log(this.state.apiData)
      });
      
    }
    nextPet= () =>{
      let currentPetIndex = this.state.currentPetIndex
      if( this.state.currentPetIndex < this.state.apiData.length-1){
        currentPetIndex++
         this.setState({currentPetIndex:currentPetIndex, 
           currentPet: this.state.apiData[currentPetIndex]})

      
      }else{
        currentPetIndex = 0;
        this.setState({currentPetIndex:currentPetIndex, 
          currentPet: this.state.apiData[currentPetIndex]})
      }
    }
  
    render() {
      return (
        <div>
          {this.state.displaySearch?
        <form>
          <LabelContainer>
            Select a Breed:
            <Select value={this.state.dog} onChange={this.handleChange}>
              <option value="Beagle">Beagle</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Corgi">Corgi</option>
              <option value="Dachshund">Dachshund</option>
              <option value="German Shepherd Dog">German Shepherd</option>
              <option value="Great Pyrenees" default>Great Pyrenees</option>
              <option value="Labrador Retriever" default >Labrador Retriever</option>
              <option value="Mixed Breed">Mixed Breed</option>
              <option value="Pit Bull Terrier">Pit Bull Terrier</option>
              <option value="Shepherd"> Shepherd</option>
              <option value="Siberian Husky">Siberian Husky</option>
              <option value="Terrier">Terrier</option>
            </Select>
          </LabelContainer>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <SubmitButton type="submit" onClick={this.handleSubmit}>Search Dogs</SubmitButton>

        </form>
        :<>
        <Card props={this.state.currentPet} />
        <button onClick={this.nextPet}>Goto next pet</button></>}
        {/* {this.state.apiData.map((i, key) => <Card props = {i} key={key}/>)} */}
        </div>
      )
    };
}
  
  export default Search