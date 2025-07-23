const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  upload
} = require('../controllers/blogController');
const { auth, adminAuth } = require('../middleware/auth');

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Protected routes (admin only)
router.post('/', adminAuth, upload.single('image'), createBlog);
router.put('/:id', adminAuth, upload.single('image'), updateBlog);
router.delete('/:id', adminAuth, deleteBlog);

module.exports = router;