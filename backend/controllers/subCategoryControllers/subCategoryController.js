// controllers/subcategoryController.js
const Category = require("../../modal/category/category");
const Subcategory = require("../../modal/subCategory/subCategory");

// Create a new subcategory
exports.createSubcategory = async (req, res) => {
  try {
    const { name, isVisibleOnNavbar, categoryId } = req.body;
    const newSubcategory = new Subcategory({ name, isVisibleOnNavbar, categoryId });
    await newSubcategory.save();
    await Category.findByIdAndUpdate(categoryId, { $push: { subCategoryId: newSubcategory._id } });
    res.status(201).json(newSubcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all subcategories
exports.getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate("categoryId");
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single subcategory by ID
exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id).populate("categoryId");
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a subcategory
exports.updateSubcategory = async (req, res) => {
  try {
    const { name, isVisibleOnNavbar, categoryId } = req.body;
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.params.id,
      { name, isVisibleOnNavbar, categoryId },
      { new: true }
    );
    if (!updatedSubcategory) return res.status(404).json({ message: "Subcategory not found" });
    await Category.findByIdAndUpdate(categoryId, { $push: { subCategoryId: updatedSubcategory._id } });
    res.status(200).json(updatedSubcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a subcategory
exports.deleteSubcategory = async (req, res) => {
  try {
    const deletedSubcategory = await Subcategory.findByIdAndDelete(req.params.id);
    if (!deletedSubcategory) return res.status(404).json({ message: "Subcategory not found" });
    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

