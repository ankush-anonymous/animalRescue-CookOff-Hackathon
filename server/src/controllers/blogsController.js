const Blog = require('../models/blogsModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-api');

const getAllBlogs = asyncWrapper(async (req, res) => {
  const blog = await Blog.find({});
  res.status(200).json({ success: true, data: blog });
});

const createBlog = asyncWrapper(async (req, res, next) => {
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, data: blog });
});

const getBlogById = asyncWrapper(async (req, res, next) => {
  const { id: blogID } = req.params;
  const blog = await Blog.findOne({ _id: blogID });
  if (!blog) {
    return next(createCustomError(`No blog with id: ${blogID}`, 404));
  }
  res.status(200).json({ success: true, data: blog });
});

const deleteBlog = asyncWrapper(async (req, res, next) => {
  const { id: blogID } = req.params;
  const blog = await Blog.findOneAndDelete({ _id: blogID });
  if (!blog) {
    return next(createCustomError(`No blog  with id: ${blogID}`, 404));
  }
  res.status(200).json({ success: true, data: blog });
});

const updateBlog = asyncWrapper(async (req, res, next) => {
  const { id: blogID } = req.params;
  const blog = await Blog.findOneAndUpdate({ _id: blogID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!blog) {
    return next(createCustomError(`No blog with id: ${blogID}`, 404));
  }
  res.status(200).json({ success: true, data: blog });
});

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
