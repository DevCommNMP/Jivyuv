// controllers/PackageController.js

const Package = require('../../modal/tripPackage/tripPackage');

// Create a new Ladakh Bike Expedition package
exports.createPackage = async (req, res) => {
  try {
    const {
      title,
      pickupLocation,
      dropLocation,
      numberOfDays,
      numberOfNights,
      overview,
      packagePrice,
      packagePromotional,
      isVisaFree,
      country,
      categoryId,
      subCategoryId,
      tripTagName,
      startingDate,
      isPickupAndDropAvailable,
      activityData,
    } = req.body;

    // Extract image paths from req.files
    const packageImage = req.files?.packageImage?.[0]?.path || null;
    const packageSubImages = req.files?.packageSubImages?.map(file => file.path) || [];

    // Validate required fields
    if (!title || !numberOfDays || !numberOfNights || !packagePrice || !country) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Parse activityData if it's sent as a JSON string
    let parsedActivityData = [];
    if (typeof activityData === 'string') {
      try {
        parsedActivityData = JSON.parse(activityData);
      } catch (err) {
        return res.status(400).json({ message: 'Invalid activityData format' });
      }
    } else if (Array.isArray(activityData)) {
      parsedActivityData = activityData;
    }

    const newPackage = new Package({
      title,
      pickupLocation,
      dropLocation,
      numberOfDays,
      numberOfNights,
      overview,
      packagePrice,
      packagePromotional,
      isVisaFree: isVisaFree === 'true',
      country,
      categoryId,
      subCategoryId,
      tripTagName,
      startingDate: new Date(startingDate.trim()),
      isPickupAndDropAvailable: isPickupAndDropAvailable === 'true',
      activityData: parsedActivityData, // Save parsed activityData
      packageImage,
      packageSubImages,
    });

    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
  } catch (err) {
    res.status(400).json({ message: 'Error creating package', error: err });
  }
};

// Get all Ladakh Bike Expedition packages
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching packages', error: err });
  }
};

// Get a specific Ladakh Bike Expedition package by ID
exports.getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.status(200).json(package);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching package', error: err });
  }
};

// Update a specific Ladakh Bike Expedition package by ID
exports.updatePackage = async (req, res) => {
  try {
    const {
      title,
      pickupLocation,
      dropLocation,
      numberOfDays,
      numberOfNights,
      overview,
      packagePrice,
      packagePromotional,
      isVisaFree,
      country,
      categoryId,
      subCategoryId,
      tripTagName,
      startingDate,
      isPickupAndDropAvailable,
      activityData,
    } = req.body;

    // Extract image paths from req.files
    const packageImage = req.files?.packageImage?.[0]?.path || null;
    const packageSubImages = req.files?.packageSubImages?.map(file => file.path) || [];

    // Parse activityData if it's sent as a JSON string
    let parsedActivityData = [];
    if (typeof activityData === 'string') {
      try {
        parsedActivityData = JSON.parse(activityData);
      } catch (err) {
        return res.status(400).json({ message: 'Invalid activityData format' });
      }
    } else if (Array.isArray(activityData)) {
      parsedActivityData = activityData;
    }

    // Prepare the updated package data
    const updatedData = {
      ...(title && { title }),
      ...(pickupLocation && { pickupLocation }),
      ...(dropLocation && { dropLocation }),
      ...(numberOfDays && { numberOfDays }),
      ...(numberOfNights && { numberOfNights }),
      ...(overview && { overview }),
      ...(packagePrice && { packagePrice }),
      ...(packagePromotional && { packagePromotional }),
      ...(isVisaFree !== undefined && { isVisaFree: isVisaFree === 'true' }),
      ...(country && { country }),
      ...(categoryId && { categoryId }),
      ...(subCategoryId && { subCategoryId }),
      ...(tripTagName && { tripTagName }),
      ...(startingDate && { startingDate: new Date(startingDate.trim()) }),
      ...(isPickupAndDropAvailable !== undefined && { isPickupAndDropAvailable: isPickupAndDropAvailable === 'true' }),
      ...(parsedActivityData.length > 0 && { activityData: parsedActivityData }),
      ...(packageImage && { packageImage }),
      ...(packageSubImages.length > 0 && { packageSubImages }),
    };

    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.status(200).json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: 'Error updating package', error: err });
  }
};

// Delete a specific Ladakh Bike Expedition package by ID
exports.deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }
    res.status(200).json({ message: 'Package deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting package', error: err });
  }
};










