export const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.role || !allowedRoles.includes(req.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden ~ insufficient permissions",
      });
    }
    next();
  };
};
