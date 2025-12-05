import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { syncUser, getAllUsers, updateUserPlan, updateUserSearches, getCurrentUser } from "../controllers/userController.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", ClerkExpressRequireAuth(), syncUser);
router.get("/me", getCurrentUser);
router.get("/", adminMiddleware, getAllUsers);
router.put("/:id", adminMiddleware, updateUserPlan);
router.put("/:id/searches", ClerkExpressRequireAuth(), updateUserSearches);

export default router;
