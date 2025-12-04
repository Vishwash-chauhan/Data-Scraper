import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { syncUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", ClerkExpressRequireAuth(), syncUser);

export default router;
