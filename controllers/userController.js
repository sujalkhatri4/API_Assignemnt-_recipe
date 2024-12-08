

const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {

    if (!username || !password || !email) {
      return res.status(400).json({ messeage: "all field are required" });
    }

    if (typeof email !== "string" || email.trim() == "") {
      return res
        .status(400)
        .json({ message: "Invalid email address, please re-enter / check" });
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();


    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error details -", error);
    return res.status(500).json({ message: "Error registering user" });
  }
};

exports.loginUser = async (req, res) => {
  const { password, email } = req.body;

  console.log(password)
  try {

    if (!email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }


    const user = await User.findOne({ email });
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!user || !matchPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }


    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ message: "Login Successfull", token });
  } catch (error) {
    console.error("Error details -", error);
    return res.status(500).json({ message: "Error Logging user" });
  }
};


exports.logoutUser = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
