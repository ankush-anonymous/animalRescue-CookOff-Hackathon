const express = require('express')
const router = express.Router()

const {
  getAllClinics,
  createClinic,
  getClinicById,
  updateClinic,
  deleteClinic
} = require('../controllers/clinicsController')

router.route('/').get(getAllClinics).post(createClinic)
router.route('/:id').get(getClinicById).patch(updateClinic).delete(deleteClinic)

module.exports = router
