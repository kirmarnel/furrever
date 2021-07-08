import {token} from 'src/api/token.js';

//Need User to select coats, colors, gender, then use those to return results and post them to results page

var url = "https://api.petfinder.com/v2/animals"

const searchRequest = new XMLHttpRequest();

//Open connection 
searchRequest.open("GET", url);

searchRequest.setRequestHeader("Authorization", "Bearer"+`${token}`);

searchRequest.onreadystatechange = function () {
   if (searchRequest.readyState === 4) {
      console.log(searchRequest.status);
      console.log(searchRequest.responseText);
   }};

searchRequest.send();


//Access JSON data to retrieve parameters
var searchRequest = JSON.parse(this.response);

// function chooseCoat(dog) {
//     return dog.coat == e.target.value
// }

// function chooseColor(dog) {
//     return dog.color == e.target.value
// }

//Search by Coat

var coat = this.response.animals.filter(item =>{ 
    return item.name === "Coat" 
});

//Search by Color
var color = this.response.animals.find(item =>{
    return item.name === "Color"
})

export var