import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import searchRoutes from "./routes/searchRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { ClerkExpressWithAuth, ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Clerk Middleware
app.use(ClerkExpressWithAuth());

app.use("/api/users", userRoutes);

app.use("/api", searchRoutes);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
