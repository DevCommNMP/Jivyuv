const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./config/passport/passportConfig"); // Initialize passport config
dotenv.config();
const dbConnect = require("./db/connectDB");
const app = express();
const PORT = 5000;
const routes = require("./routes/allRoutes/allRoutes");
const reviewRoutes = require("./routes/reviewRoutes/reviewRoutes");
// Allowed Origins
const allowedOrigins = ["http://localhost:3000", "https://accounts.google.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
// Session Setup
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
    },
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

// Test session route
app.get("/test-session", (req, res) => {
  if (req.session.user) {
    res.json({ message: "Session found", sessionData: req.session.user });
  } else {
    res.status(401).json({ message: "No session found" });
  }
});

// Fallback 404 Route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "CORS error: Origin not allowed" });
  }
  next(err);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
