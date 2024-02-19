const express = require('express')
const router = express.Router()

const {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorsController')

router.route('/').get(getAllDoctors).post(createDoctor)
router.route('/:id').get(getDoctorById).patch(updateDoctor).delete(deleteDoctor)

module.exports = router
