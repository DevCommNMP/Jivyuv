const express = require("express");
const router = express.Router();
const subcategoryController = require("../../controllers/subCategoryControllers/subCategoryController");

router.post("/subcategories", subcategoryController.createSubcategory);
router.get("/subcategories", subcategoryController.getAllSubcategories);
router.get("/subcategories/:id", subcategoryController.getSubcategoryById);
router.put("/subcategories/:id", subcategoryController.updateSubcategory);
router.delete("/subcategories/:id", subcategoryController.deleteSubcategory);

module.exports = router;
