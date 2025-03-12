const express = require("express");
const router = express.Router();

const googleAuthRoutes = require("../auth/googleAuthRoutes"); // Import Google Auth Routes
const emailAuthRoutes = require("../auth/emailAuthRoutes"); // Import Email Auth Routes
const reviewRoutes = require("../reviewRoutes/reviewRoutes");
const categoryRoutes = require("../categoryRoutes/categoryRoutes");
const subCategory = require("../subCategoryRoutes/subCategoryRoutes");
const companyProfileRoutes = require("../companyProfileRoutes/companyProfileRoutes");
const bannerRoutes = require("../bannerRoutes/bannerRoutes");
const queryRoutes=require("../queryRoutes/queryRoutes");
// Use Routes
router.use("/api/auth", googleAuthRoutes); // All Google Auth routes under "/api/auth"
router.use("/api", emailAuthRoutes); // All Google Auth routes under "/api/auth"
router.use("/api", reviewRoutes);
router.use("/api",categoryRoutes );
router.use("/api",subCategory)
router.use("/api",companyProfileRoutes)
router.use("/api",bannerRoutes)
router.use("/api",queryRoutes)
module.exports = router;
