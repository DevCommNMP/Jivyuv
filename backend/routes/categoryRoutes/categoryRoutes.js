const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/categoryControllers/categoryController");

// Create category
router.post("/category", categoryController.createCategory);

// Get all categories
router.get("/categories", categoryController.getCategories);

// Get category by ID
router.get("/category/:id", categoryController.getCategoryById);

// Update category
router.put("/category/:id", categoryController.updateCategory);

// Delete category
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
