import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String },
    name: { type: String },
    imageUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
