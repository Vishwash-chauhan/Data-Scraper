import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { syncUser, getAllUsers, updateUserPlan, updateUserSearches } from "../controllers/userController.js";

const router = express.Router();

router.post("/", ClerkExpressRequireAuth(), syncUser);
router.get("/", getAllUsers);
router.put("/:id", updateUserPlan);
router.put("/:id/searches", updateUserSearches);

export default router;
