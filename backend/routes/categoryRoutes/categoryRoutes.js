const express = require('express');
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../../controllers/categoryControllers/categoryController');
const uploadCategoryImage = require('../../middleware/multer/categoryImageUploader');

const router = express.Router();

// Route to get all categories
router.get('/categories', getAllCategories);

// Route to get a category by ID
router.get('/categories/:Id', getCategoryById);

// Route to create a new category with an image
router.post('/categories', uploadCategoryImage.single('image'), createCategory); // Ensure the field name matches

// Route to update a category by ID (with optional image update)
router.put('/categories/:Id', uploadCategoryImage.single('image'), updateCategory); // Ensure the field name matches

// Route to delete a category by ID
router.delete('/categories/:Id', deleteCategory);

module.exports = router;