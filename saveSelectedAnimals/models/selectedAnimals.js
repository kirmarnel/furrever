const router = require('express').Router();
const { selectedAnimals } = require('../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  selectedAnimals.findAll()
    .then((selectedAnimals) => res.json(selectedAnimals))
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  console.log(req.body)
  selectedAnimals.create({
    category_name: req.body.category_name
  }).then((selectedAnimals) => res.json(selectedAnimals))
  .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((selectedAnimals) => res.status(200).json(selectedAnimals))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;