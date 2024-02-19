const Ngo = require('../models/ngosModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllNgos = asyncWrapper(async (req, res) => {
  const ngos = await Ngo.find({});
  res.status(200).json({ success: true, data: ngos });
});

const createNgo = asyncWrapper(async (req, res, next) => {
  const ngos = await Ngo.create(req.body);
  res.status(201).json({ success: true, data: ngos });
});

const getNgoById = asyncWrapper(async (req, res, next) => {
  const { id: ngosID } = req.params;
  const ngos = await Ngo.findOne({ _id: ngosID });
  if (!ngos) {
    return next(createCustomError(`No ngos with id: ${ngosID}`, 404));
  }
  res.status(200).json({ success: true, data: ngos });
});

const deleteNgo = asyncWrapper(async (req, res, next) => {
  const { id: ngosID } = req.params;
  const ngos = await Ngo.findOneAndDelete({ _id: ngosID });
  if (!ngos) {
    return next(createCustomError(`No ngos  with id: ${ngosID}`, 404));
  }
  res.status(200).json({ success: true, data: ngos });
});

const updateNgo = asyncWrapper(async (req, res, next) => {
  const { id: ngosID } = req.params;
  const ngos = await Ngo.findOneAndUpdate({ _id: ngosID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!ngos) {
    return next(createCustomError(`No ngos with id: ${ngosID}`, 404));
  }
  res.status(200).json({ success: true, data: ngos });
});

module.exports = {
  getAllNgos,
  createNgo,
  getNgoById,
  updateNgo,
  deleteNgo,
};
