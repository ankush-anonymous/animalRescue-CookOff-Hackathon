const express = require('express')
const router = express.Router()

const {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
  deleteIssue
} = require('../controllers/issuesController')

router.route('/').get(getAllIssues).post(createIssue)
router.route('/:id').get(getIssueById).patch(updateIssue).delete(deleteIssue)

module.exports = router
