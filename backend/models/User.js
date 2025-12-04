import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String },
    name: { type: String },
    imageUrl: { type: String },
    plan: {
      type: String,
      enum: ["No Plan", "Silver", "Gold", "Platinum"],
      default: "No Plan"
    },
    noOfSearches: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
    
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
