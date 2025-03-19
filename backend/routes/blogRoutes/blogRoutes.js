const express = require("express");
const router = express.Router();
const blogController = require("../../controllers/blogs/blogControllers/blogConytrollers");
const upload = require("../../config/multerConfig/blogImagesmulterConfig"); // Import Multer config

// Blog Routes
router.post("/blogs", upload.single("blogImage"), blogController.createBlog); // Handle blogImage upload
router.get("/blogs/", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);
router.get("/blogs/slug/:slugName", blogController.getBlogBySlugName); // Route to get a blog by slugName
router.put("/blogs/:id", upload.single("blogImage"), blogController.updateBlog); // Handle blogImage upload for updates
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
