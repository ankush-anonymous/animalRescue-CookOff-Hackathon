const express = require('express')
const router = express.Router()

const {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal
} = require('../controllers/animalsController')

router.route('/').get(getAllAnimals).post(createAnimal)
router.route('/:id').get(getAnimalById).patch(updateAnimal).delete(deleteAnimal)

module.exports = router
