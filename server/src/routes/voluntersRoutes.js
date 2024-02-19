const express = require('express')
const router = express.Router()

const {
  getAllVolunters,
  createVolunter,
  getVolunterById,
  updateVolunter,
  deleteVolunter
} = require('../controllers/voluntersController')

router.route('/').get(getAllVolunters).post(createVolunter)
router.route('/:id').get(getVolunterById).patch(updateVolunter).delete(deleteVolunter)

module.exports = router
