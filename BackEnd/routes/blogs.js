const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router.get('/', blogsController.getAllBlogs);
router.get('/:id', blogsController.getBlogById);

module.exports = router;
