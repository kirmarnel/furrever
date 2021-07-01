

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;


var url = "https://api.petfinder.com/v2/oauth2/token";

//Create request varaible and assign XMLHttpRequest object
var request = new XMLHttpRequest()

//Open connection, using GET on the endpoint
request.open("POST", url)

request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

request.onreadystatechange = function () {
   if (request.readyState === 4) {
      console.log(request.status);
      console.log(request.responseText);
   }};

var API_TOKEN_REQ = 'grant_type=client_credentials&client_id'+`${API_KEY}`+'&client_secret='+`${API_SECRET}`;
request.send(API_TOKEN_REQ);

//Access JSON data to retrieve Token 
var API_TOKEN_REQ = JSON.parse(this.response);

console.log(this.response.access_token);

//-------NEW REQUEST FOR PARAMETERS---------------------

//Create new request variable and assign object to get search paramaters from PetFinder using token 
var url = "https://api.petfinder.com/v2/types";

var newRequest = new XMLHttpRequest();

//Open connection 
newRequest.open("GET", url);

newRequest.setRequestHeader("Authorization", "Bearer"+`${API_TOKEN_REQ.access_token}`);

newRequest.onreadystatechange = function () {
   if (newRequest.readyState === 4) {
      console.log(newRequest.status);
      console.log(newRequest.responseText);
   }};

newRequest.send();

//Access JSON data to retrieve parameters
var newRequest = JSON.parse(this.response)

//Find and return only the items from types.name.dog
var dog = this.response.types.find(item =>{ 
  return item.name === "Dog"
})



// request.get('https://api.petfinder.com/v2/oauth2/token'),{
//   'auth': {
//     'client_id': `${API_KEY}`, 
//     'client_secret': `${API_SECRET}`
//   }}
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err)
// }

// const accessToken = authState.accessToken;
// /* global fetch */
// const response = await fetch(url, {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });



// var headers = new Headers();
//     var bearer = "Bearer " + access_token;
//     headers.append("Authorization", bearer);
//     var options = {
//          method: "GET",
//          headers: headers
//     };
//     var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

//     fetch(graphEndpoint, options)
//         .then(function (response) {
//              //do something with response
//         }