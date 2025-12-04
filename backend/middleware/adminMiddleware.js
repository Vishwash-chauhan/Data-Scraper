import { verifyToken } from "@clerk/clerk-sdk-node";
import User from "../models/User.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    // Verify the Clerk token
    const decoded = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    const clerkId = decoded.sub;

    // Find user in DB
    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if user is admin
    if (user.type !== "admin") {
      return res.status(403).json({ error: "Access denied: Admin only" });
    }

    // Attach user to request for later use
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Unauthorized" });
  }
};
