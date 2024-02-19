const Animal = require('../models/animalsModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllAnimals = asyncWrapper(async (req, res) => {
  const animal = await Animal.find({});
  res.status(200).json({ success: true, data: animal });
});

const createAnimal = asyncWrapper(async (req, res, next) => {
  const animal = await Animal.create(req.body);
  res.status(201).json({ success: true, data: animal });
});

const getAnimalById = asyncWrapper(async (req, res, next) => {
  const { id: animalID } = req.params;
  const animal = await Animal.findOne({ _id: animalID });
  if (!animal) {
    return next(createCustomError(`No animal with id: ${animalID}`, 404));
  }
  res.status(200).json({ success: true, data: animal });
});

const deleteAnimal = asyncWrapper(async (req, res, next) => {
  const { id: animalID } = req.params;
  const animal = await Animal.findOneAndDelete({ _id: animalID });
  if (!animal) {
    return next(createCustomError(`No animal  with id: ${animalID}`, 404));
  }
  res.status(200).json({ success: true, data: animal });
});

const updateAnimal = asyncWrapper(async (req, res, next) => {
  const { id: animalID } = req.params;
  const animal = await Animal.findOneAndUpdate({ _id: animalID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!animal) {
    return next(createCustomError(`No animal with id: ${animalID}`, 404));
  }
  res.status(200).json({ success: true, data: animal });
});

module.exports = {
  getAllAnimals,
  createAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
};
