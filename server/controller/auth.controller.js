const jwt = require('jsonwebtoken');

module.exports = authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }
    console.log(process.env.JWT_SECRET, jwt)
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next()
    } catch (err) {
        return res.status(403).json({
            success: false,
            message: "Invalid token" 
        });
    }
}