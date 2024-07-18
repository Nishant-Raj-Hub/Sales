import User from "../models/userModel.js";

export const create = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist." });
    }

    // Count the number of documents in the User collection
    const count = await User.countDocuments();

    // Generate a unique employeeid
    const employeeid = count + 1;

    const newUser = await User.create({
      employeeid,
      firstname,
      lastname,
      email,
      password
    });

    const savedUser = await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully.", savedUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
