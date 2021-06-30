

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

var data = 'grant_type=client_credentials&client_id'+`${API_KEY}`+'&client_secret='+`${API_SECRET}`;

xhr.send(data);




var url2 = "https://api.petfinder.com/v2/types";

var xhr2 = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader2("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJMMlBmeHZFZXU0UjJGNEZ4aWllR0VIa2g3OG8xZFFwRWFweG5XamVzZEl2QUNCU3NXUCIsImp0aSI6ImRlNTYwOWZiM2E0NzA3YjE1ZTcxMDliZTE0ZmU2ODcwODRkMDhjNTNkYmI3ZmY5NTA4ZDgwMmQ2MmQxZTFjY2M2NWY5MTg0NWEyNTJhMGNlIiwiaWF0IjoxNjI1MDc5MTEwLCJuYmYiOjE2MjUwNzkxMTAsImV4cCI6MTYyNTA4MjcxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.vkWHo1NfpR07zuwPR2d7C2lSDTAUKl3CETC_-gkAoI1M-_viFM2L4NaaV4Mcx0d5prxH2hoOtX9hl2mksOb2sn4VmXpDuN2GMKXksXFy3vA86NGI_D3bDG8mTnxyzh7mk2VK1B8TmgZ2m5F2Du_84LJPJ1JlLWzhlCkHO3EvNDAXewoNvYidIKt7nJMHBczpJdQtWJkipgKNyNNZGAwN5f_D_qqt9rpFc3Dpk-gdjAbMli2UomoUcpcm68uFfh2E2ucdKKG3MyJxV9yTI5GmvuMXqrXCJ80bvTALSYXMWM9eAs1ugsQbBwCNKYsVYUDbK5cf6RhVFyDkRQAEKXqPbQ");

xhr.onreadystatechange2 = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();


request.get('https://api.petfinder.com/v2/oauth2/token'),{
  'auth': {
    'client_id': `${API_KEY}`, 
    'client_secret': `${API_SECRET}`
  }}
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err)
}

const accessToken = authState.accessToken;
/* global fetch */
const response = await fetch(url, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});



var headers = new Headers();
    var bearer = "Bearer " + access_token;
    headers.append("Authorization", bearer);
    var options = {
         method: "GET",
         headers: headers
    };
    var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

    fetch(graphEndpoint, options)
        .then(function (response) {
             //do something with response
        }