const express = require("express");
const router = express.Router();

const googleAuthRoutes = require("../auth/googleAuthRoutes"); // Import Google Auth Routes
const emailAuthRoutes = require("../auth/emailAuthRoutes"); // Import Email Auth Routes

// Use Routes
router.use("/api/auth", googleAuthRoutes); // All Google Auth routes under "/api/auth"
router.use("/api", emailAuthRoutes); // All Google Auth routes under "/api/auth"

module.exports = router;
