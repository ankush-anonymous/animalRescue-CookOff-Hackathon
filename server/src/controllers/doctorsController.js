const Doctor = require('../models/doctorsModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllDoctors = asyncWrapper(async (req, res) => {
  const doctor = await Doctor.find({});
  res.status(200).json({ success: true, data: doctor });
});

const createDoctor = asyncWrapper(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json({ success: true, data: doctor });
});

const getDoctorById = asyncWrapper(async (req, res, next) => {
  const { id: doctorID } = req.params;
  const doctor = await Doctor.findOne({ _id: doctorID });
  if (!doctor) {
    return next(createCustomError(`No doctor with id: ${doctorID}`, 404));
  }
  res.status(200).json({ success: true, data: doctor });
});

const deleteDoctor = asyncWrapper(async (req, res, next) => {
  const { id: doctorID } = req.params;
  const doctor = await Doctor.findOneAndDelete({ _id: doctorID });
  if (!doctor) {
    return next(createCustomError(`No doctor  with id: ${doctorID}`, 404));
  }
  res.status(200).json({ success: true, data: doctor });
});

const updateDoctor = asyncWrapper(async (req, res, next) => {
  const { id: doctorID } = req.params;
  const doctor = await Doctor.findOneAndUpdate({ _id: doctorID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doctor) {
    return next(createCustomError(`No doctor with id: ${doctorID}`, 404));
  }
  res.status(200).json({ success: true, data: doctor });
});

module.exports = {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
