const express = require('express')
const router = express.Router()

const {
  getAllNgos,
  createNgo,
  getNgoById,
  updateNgo,
  deleteNgo
} = require('../controllers/ngosController')

router.route('/').get(getAllNgos).post(createNgo)
router.route('/:id').get(getNgoById).patch(updateNgo).delete(deleteNgo)

module.exports = router
