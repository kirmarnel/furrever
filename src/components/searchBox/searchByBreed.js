//Gets dog and cat breed names
const petfinder = require("@petfinder/petfinder-js")
const API_KEY = 'L2PfxvEeu4R2F4FxiieGEHkh78o1dQpEapxnWjesdIvACBSsWP'
const API_SECRET = 'F9tVif6NQRsjR6XHKkgTiov9bd2DujsyYEjqaEvB'

var client = new petfinder.Client({apiKey: API_KEY, secret: API_SECRET})

async function showBreeds() {
    try {
      var apiResult = await client.animalData.breeds('dog');
      apiResult.data.breeds.forEach(breeds => {
          console.log(`${breeds.name}`)
         });
    } catch (error){
        console.log(error);
    };
}

async function displayBreeds() {
  await showBreeds();
};

export default displayBreeds;
// displayBreeds();














// function dynamicDropDown(listindex) {
//     document.getElementById('type').length = 0;
//     switch (listindex) {
//         case "Dog":
//             document.getElementById("type").options[0] = new Option('Select Breed','');
//             document.getElementById("type").onchange = async function showBreeds() {
//                 try {
//                   apiResult = await client.animalData.breeds('dog');
//                   apiResult.data.breeds.forEach(breeds => {
//                       console.log(`${breeds.name}`)
//                      });
//                 } catch (error){
//                     console.log(error);
//                 };
//             }
            
//             (async function() {
//               await showBreeds();
//             })(); 
//             break;
//         case "Cat":
//             document.getElementById("type").options[0] = new Option('Select Breed','');
//             document.getElementById("type").options[1] = async function showBreeds() {
//                 try {
//                   apiResult = await client.animalData.breeds('cat');
//                   apiResult.data.breeds.forEach(breeds => {
//                       console.log(`${breeds.name}`)
//                      });
//                 } catch (error){
//                     console.log(error);
//                 };
//             }
            
//             (async function() {
//                 await showBreeds();
//             })();
//             break;
//     } return true;
// };

// dynamicDropDown();

