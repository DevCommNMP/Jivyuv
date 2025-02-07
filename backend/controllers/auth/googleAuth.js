const passport = require("passport");
const User = require("../../modal/user/user"); // Import User model

// Google Auth Redirect
const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

// Google Auth Callback
const googleCallback = passport.authenticate("google", {
  failureRedirect: "http://localhost:3000/login",
});

// Handle Google Auth Success & Store User in Database
const handleGoogleCallback = async (req, res) => {
  if (!req.user) {
    return res.redirect("http://localhost:3000/login"); // Redirect on failure
  }

  try {
    // Extract user data from Google profile
    const { id, displayName, emails, photos } = req.user;

    // Check if user already exists in database
    let user = await User.findOne({ googleId: id });

    if (!user) {
      // Create a new user in database
      user = new User({
        firstName: displayName.split(" ")[0], // Extract first name
        lastName: displayName.split(" ").slice(1).join(" ") || "", // Extract last name
        email: emails[0].value,
        googleId: id,
        profilePicture: photos[0].value, // Store Google profile picture
      });

      await user.save(); // Save to database
    }

    // Store user in session
    req.session.user = user;

    res.redirect("http://localhost:3000"); // Redirect to frontend
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.redirect("http://localhost:3000/login"); // Redirect on error
  }
};

// Logout User & Destroy Session
const logoutUser = (req, res) => {
  req.logout(() => {});
  req.session.destroy((err) => {
    if (err) console.log("Error destroying session:", err);
    res.redirect("http://localhost:3000/");
  });
};

module.exports = { googleAuth, googleCallback, handleGoogleCallback, logoutUser };
