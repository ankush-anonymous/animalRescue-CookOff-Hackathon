const Volunter = require('../models/voluntersModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllVolunters = asyncWrapper(async (req, res) => {
  const volunters = await Volunter.find({});
  res.status(200).json({ success: true, data: volunters });
});

const createVolunter = asyncWrapper(async (req, res, next) => {
  const volunters = await Volunter.create(req.body);
  res.status(201).json({ success: true, data: volunters });
});

const getVolunterById = asyncWrapper(async (req, res, next) => {
  const { id: voluntersID } = req.params;
  const volunters = await Volunter.findOne({ _id: voluntersID });
  if (!volunters) {
    return next(createCustomError(`No volunters with id: ${voluntersID}`, 404));
  }
  res.status(200).json({ success: true, data: volunters });
});

const deleteVolunter = asyncWrapper(async (req, res, next) => {
  const { id: voluntersID } = req.params;
  const volunters = await Volunter.findOneAndDelete({ _id: voluntersID });
  if (!volunters) {
    return next(createCustomError(`No volunters  with id: ${voluntersID}`, 404));
  }
  res.status(200).json({ success: true, data: volunters });
});

const updateVolunter = asyncWrapper(async (req, res, next) => {
  const { id: voluntersID } = req.params;
  const volunters = await Volunter.findOneAndUpdate({ _id: voluntersID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!volunters) {
    return next(createCustomError(`No volunters with id: ${voluntersID}`, 404));
  }
  res.status(200).json({ success: true, data: volunters });
});

module.exports = {
  getAllVolunters,
  createVolunter,
  getVolunterById,
  updateVolunter,
  deleteVolunter,
};
