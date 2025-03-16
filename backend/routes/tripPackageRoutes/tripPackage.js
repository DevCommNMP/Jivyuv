// routes/ladakhBikeExpeditionRoutes.js

const express = require('express');
const router = express.Router();
const PackageController = require('../../controllers/tripPackageController/tripPackageController');
const {
    uploadFields,
    appendFilePathToFiles,
  } = require('../../config/multerConfig/packageImagesMulterConfig');
const { isAuthenticatedAdmin, isAuthenticatedSuperAdmin } = require('@/backend/middleware/isAutheticated');
  

// Route to get all packages
router.get('/trip-package/', PackageController.getAllPackages);

// Route to get a package by ID
router.get('/trip-package/:id', PackageController.getPackageById);
 
// Route to create a new package
router.post('/trip-package/',isAuthenticatedAdmin,uploadFields,appendFilePathToFiles, PackageController.createPackage);

// Route to update a package by ID
router.put('/trip-package/:id',isAuthenticatedAdmin, PackageController.updatePackage);

// Route to delete a package by ID
router.delete('/trip-package/:id',isAuthenticatedSuperAdmin, PackageController.deletePackage);

module.exports = router;
