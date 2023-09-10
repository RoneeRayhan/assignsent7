const express = require('express');
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// Define your other routes for other controllers here

router.get('/blogs/create', createBlog);
router.get('/blogs/read', readBlog);
router.get('/blogs/delete', deleteBlog);
router.get('/blogs/update', updateBlog);

// Define routes for other controllers here

module.exports = router;
