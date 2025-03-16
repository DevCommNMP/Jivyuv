// models/package.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Ladakh Bike Expedition package
const packageSchema = new Schema({
  title: { type: String, required: true },
  pickupLocation: { type: String, default: "" },
  dropLocation: { type: String, default: "" },
  numberOfDays: { type: String, required: true },
  numberOfNights: { type: String, required: true },
  overview: { type: String, required: true },
  packagePrice: { type: String, required: true },
  packagePromotional: { type: String, required: true },
  isVisaFree: { type: Boolean, required: true },
  country: { type: String, required: true },
  categoryId: { type: String, required: true },
  subCategoryId: { type: String, required: true },
  tripTagName: { type: String, required: true },
  startingDate: { type: Date, required: true },
  isPickupAndDropAvailable: { type: Boolean, required: true },
  packageImage: { type: Object},
  packageSubImages: [{ type: String}],
  activityData: [
    {
      activityDay: { type: String, required: true },
      activityTitle: { type: String, required: true },
      activityDescription: [{ type: String, required: true }]
    }
  ]
});

// Export the schema as a model
const package = mongoose.model('package', packageSchema);

module.exports = package;
