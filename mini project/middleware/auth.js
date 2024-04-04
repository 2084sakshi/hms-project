// authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('./config'); // Your configuration file

// Middleware function to verify JWT tokens and enforce role-based authorization
const authMiddleware = (requiredRole) => (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    
    // Check if the user has the required role
    if (decoded.role !== requiredRole) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    // Attach the decoded user data to the request object for further use
    req.user = decoded;
    next(); // Call the next middleware or route handler
  });
};

module.exports = authMiddleware;
