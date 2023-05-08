const Usersignup = require("../Model/User_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Usersignup.findOne({ email });
    if (!data) {
      return res.status(404).json({
        message: "User doesn't exist",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, data.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    } else {
      const token = await jwt.sign(
        { _id: data._id, email: data.email,lastName: data.lastName},
        "codistan_ventures",
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "login successful",
        token,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "server error" });
  }
};
