import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
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

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      employeeid,
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    let token = jwt.sign({ email }, process.env.JWT_SECRET);
    // res.cookie("token", token);

    const savedUser = await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully.", savedUser, token});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }
    
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    // res.cookie("token", token);

    // delete userExist.password;
    res.status(200).json({ user: userExist, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
