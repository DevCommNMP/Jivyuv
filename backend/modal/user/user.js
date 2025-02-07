const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Personal Information
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    password: { type: String, required: false }, // Optional for Google login

    // Google Authentication Fields
    googleId: { type: String, unique: true, sparse: true }, // Google ID (Unique but optional)
    profilePicture: { type: String }, // URL for profile picture

    // Address (Optional)
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zipCode: { type: String },
    },

    // Account Details
    role: { type: String, enum: ["user", "admin"], default: "user" }, // Role Management
    status: { type: String, enum: ["active", "banned"], default: "active" }, // Account Status

    // Tour-related Fields
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }], // Reference to bookings
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }], // Saved tours

    createdAt: { type: Date, default: Date.now }, // Timestamp
    
  },
  { timestamps: true }
);

// Create User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
