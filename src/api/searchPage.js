import {token} from 'src/api/token.js';

var url = "https://api.petfinder.com/v2/animals"

var searchRequest = new XMLHttpRequest();

searchRequest.open("GET", url);

searchRequest.setRequestHeader("Authorization", "Bearer"+`${token}`);

searchRequest.onreadystatechange = function () {
   if (searchRequest.readyState === 4) {
      console.log(searchRequest.status);
      console.log(searchRequest.responseText);
   }};

searchRequest.send();


const userResponse = [
    {name: 'dog'}
];


//Filter JSON data using user responses 
var searchRequest = JSON.parse(this.response).filter(function (userResponse) {
    return userResponse.id === '';
})


//GET ID
var id = this.response.animals.forEach(
    console.log(` -- id: ${animal.id}`)
)

//USE ID TO RENDER PET-SPECIFIC PAGE



var breed = this.response.animals.find( item =>{
    return item.name === "Breed"
})

var size = this.response.animals.find(item =>{ 
    return item.name === "Breed", item.name === "Size", item.name === "Gender", item.name === "Age", item.name === "Color", item.name === "Coat"
});

var gender = this.response.animals.find(item =>{
    return item.name === "Gender"
})

var age = this.response.animals.find(item =>{
    return item.name === "Age"
})

var color = this.response.animals.find(item =>{
    return item.name === "Color"
})

var coat = this.response.animals.find( item =>{
    return item.name === "Coat"
})
