const  isAuthenticated = async (req, res, next) => {
    try {
        // Extract the Authorization header
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (!authHeader) {
          return res.status(401).json({
            success: "false",
            error: "true",
            message: "Authorization header missing",
          });
        }
    
        // Extract the token from the Authorization header
        const authToken = authHeader.split(" ")[1];
        if (!authToken) {
          return res.status(401).json({
            message: "Authentication token missing",
            success: "false",
            error: "true",
          });
        }
    
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const userId = decoded.id;
    
        const authenticUser = await User.findById(userId);
        console.log(authenticUser);
        const user = {
          id: authenticUser._id,
          email: authenticUser.email,
          firstName: authenticUser.firstName,
          profilePhoto: authenticUser.profilePhoto,
          lastName: authenticUser.lastName,
        };
    
        next();
      } catch (error) {
        console.error("Error during authentication:", error.message);
        return res.status(500).json({ message: "Internal server error" });
      }
  
};
