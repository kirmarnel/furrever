var petfinder = require("@petfinder/petfinder-js")

const API_KEY = 'L2PfxvEeu4R2F4FxiieGEHkh78o1dQpEapxnWjesdIvACBSsWP'

const API_SECRET = 'F9tVif6NQRsjR6XHKkgTiov9bd2DujsyYEjqaEvB'


var client = new petfinder.Client({apiKey: API_KEY, secret: API_SECRET})

async function showAnimals(animalType, searchBreed) {

  let page = 1;

  do {

    apiResult = await client.animal.search({

      type: animalType,

      breed: searchBreed,

      page,

      limit: 100,

    });

    let dogIdx = (page - 1) * 100;

    apiResult.data.animals.forEach(function(animal) {

      //console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
      console.log(animal)

    });



    page++;

  } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);

}



(async function() {

  await showAnimals("Dog", "Corgi");

})();