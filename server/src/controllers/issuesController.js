const Issue = require('../models/issuesModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllIssues = asyncWrapper(async (req, res) => {
  const issues = await Issue.find({});
  res.status(200).json({ success: true, data: issues });
});

const createIssue = asyncWrapper(async (req, res, next) => {
  const issues = await Issue.create(req.body);
  res.status(201).json({ success: true, data: issues });
});

const getIssueById = asyncWrapper(async (req, res, next) => {
  const { id: issuesID } = req.params;
  const issues = await Issue.findOne({ _id: issuesID });
  if (!issues) {
    return next(createCustomError(`No issues with id: ${issuesID}`, 404));
  }
  res.status(200).json({ success: true, data: issues });
});

const deleteIssue = asyncWrapper(async (req, res, next) => {
  const { id: issuesID } = req.params;
  const issues = await Issue.findOneAndDelete({ _id: issuesID });
  if (!issues) {
    return next(createCustomError(`No issues  with id: ${issuesID}`, 404));
  }
  res.status(200).json({ success: true, data: issues });
});

const updateIssue = asyncWrapper(async (req, res, next) => {
  const { id: issuesID } = req.params;
  const issues = await Issue.findOneAndUpdate({ _id: issuesID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!issues) {
    return next(createCustomError(`No issues with id: ${issuesID}`, 404));
  }
  res.status(200).json({ success: true, data: issues });
});

module.exports = {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
  deleteIssue,
};
