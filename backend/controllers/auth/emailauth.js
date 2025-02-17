const generateToken = require("../../config/generateToken");
const User= require("../../modal/user/user");
const expressAsyncHandler = require("express-async-handler");
const registrationMailOptions = require("../../config/mailConfig/registrationMail");
const sendMailController = require("../../controllers/mail/sendMailController");

const jwt=require("jsonwebtoken");
// const passwordResetMailOptions = require("../../../config/mailconfigration/passwordResetMail");

const registerUser = expressAsyncHandler(async (req, res) => {
    try {
      const { userName, firstName, lastName, email, password } = req.body;
  
      // Check if the user already exists
      const userExist = await User.findOne({ email });
  
  
      if (userExist) {
        return res.status(201).json({ success: false, error: true, message: "Email already exists" });
      }
  
      // Create new user
      const user = await User.create({
        firstName: firstName, // Extract first name
        lastName: lastName, // Extract last name
        username: `${userName}`,
        email,
        password,
      });
  
      // Generate token
      const token = await generateToken(user._id);
      // Get the current time
      const currentTime = new Date();
      // Calculate expiration time: 10 minutes from now
      const expirationTime = new Date(currentTime.getTime() + 10 * 60 * 1000);
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          accountVerificationToken: token,
          accountVerificationTokenExpires: expirationTime
        },
        {
          new: true // This option returns the updated document
        }
      );
  
      const BASE_URL = `${process.env.BASE_URL}/verify-account/${token}`;
      // Set up email content
      const receiver = email;
      const message = "Email Verification";
      const username = `${userName}`;
      // Send email
      const mailOptions = registrationMailOptions(receiver, message, userName, BASE_URL);
      await sendMailController(mailOptions);
  
      // Respond with success message
      res.status(201).json({ success: true, message: "User created successfully. Please check your email for verification instructions.", error: false });
    } catch (error) {
      // Handle errors
      res.status(500).json({ success: false, message: error.message, error: true });
    }
  });

  module.exports = {registerUser};