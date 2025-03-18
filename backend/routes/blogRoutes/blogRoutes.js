const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blogs/blogControllers/blogConytrollers");

// Blog Routes
router.post("/create", blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
