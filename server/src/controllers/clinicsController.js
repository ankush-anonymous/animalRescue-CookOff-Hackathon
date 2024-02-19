const Clinic = require('../models/clinicsModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllClinics = asyncWrapper(async (req, res) => {
  const clinic = await Clinic.find({});
  res.status(200).json({ success: true, data: clinic });
});

const createClinic = asyncWrapper(async (req, res, next) => {
  const clinic = await Clinic.create(req.body);
  res.status(201).json({ success: true, data: clinic });
});

const getClinicById = asyncWrapper(async (req, res, next) => {
  const { id: clinicID } = req.params;
  const clinic = await Clinic.findOne({ _id: clinicID });
  if (!clinic) {
    return next(createCustomError(`No clinic with id: ${clinicID}`, 404));
  }
  res.status(200).json({ success: true, data: clinic });
});

const deleteClinic = asyncWrapper(async (req, res, next) => {
  const { id: clinicID } = req.params;
  const clinic = await Clinic.findOneAndDelete({ _id: clinicID });
  if (!clinic) {
    return next(createCustomError(`No clinic  with id: ${clinicID}`, 404));
  }
  res.status(200).json({ success: true, data: clinic });
});

const updateClinic = asyncWrapper(async (req, res, next) => {
  const { id: clinicID } = req.params;
  const clinic = await Clinic.findOneAndUpdate({ _id: clinicID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!clinic) {
    return next(createCustomError(`No clinic with id: ${clinicID}`, 404));
  }
  res.status(200).json({ success: true, data: clinic });
});

module.exports = {
  getAllClinics,
  createClinic,
  getClinicById,
  updateClinic,
  deleteClinic,
};
