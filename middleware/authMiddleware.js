import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    return res.status(401).json({ message: "Error in authorization format" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req._id = decoded.id
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "User unauthenticated" });
  }
};
