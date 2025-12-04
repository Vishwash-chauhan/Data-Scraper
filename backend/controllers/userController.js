import User from "../models/User.js";

export const syncUser = async (req, res) => {
  try {
    const { clerkId, email, name, imageUrl } = req.body;

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({ clerkId, email, name, imageUrl });
    } else {
      user.email = email;
      user.name = name;
      user.imageUrl = imageUrl;
      await user.save();
    }

    res.json({ success: true, user });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to sync user" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const updateUserPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { plan } = req.body;

    const validPlans = ["No Plan", "Silver", "Gold", "Platinum"];
    if (!validPlans.includes(plan)) {
      return res.status(400).json({ error: "Invalid plan" });
    }

    const user = await User.findByIdAndUpdate(id, { plan }, { new: true });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update user plan" });
  }
};

export const updateUserSearches = async (req, res) => {
  try {
    const { id } = req.params;
    const { noOfSearches } = req.body;

    if (typeof noOfSearches !== "number" || noOfSearches < 0) {
      return res.status(400).json({ error: "Invalid number of searches" });
    }

    const user = await User.findByIdAndUpdate(id, { noOfSearches }, { new: true });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update user searches" });
  }
};
