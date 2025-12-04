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
