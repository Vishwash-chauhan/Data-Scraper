// routes/searchRoutes.js
import express from "express";
import { searchBusiness } from "../controllers/searchController.js";

const router = express.Router();

router.post("/search", searchBusiness);

export default router;
