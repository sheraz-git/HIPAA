const User = require("../Model/User_model");
const bcrypt = require("bcryptjs");

exports.Usercreate = async (req, res) => {
  try {
    const { firstName, lastName, contact, email, password } = req.body;
    const saltRounds = 10;
    let hash = await bcrypt.hash(password, saltRounds);
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    } else {
      const data = new User({
        firstName,
        lastName,
        contact,
        email,
        password: hash,
      });
      await data.save();
      return res.status(200).json({
        message: "User Added",
        data,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const findUser = await User.find();
    console.log(findUser);
    return res.status(200).json({
      message: "All Records",
      findUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findByIdAndDelete(id);
    console.log(findUser);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true }; // return the updated record

    const findUser = await User.findByIdAndUpdate(id, update, options);
    console.log(findUser);
    return res.status(200).json({
      message: "task update",
      findUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
