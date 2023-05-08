const patientrecords = require("../Model/patient_records");
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contact,
      email,
      SocialSecuritNumber,
      address,
      medicalHistory,
    } = req.body;
    const saltRounds = 10;
    let hash = await bcrypt.hash(SocialSecuritNumber, saltRounds);
    const findrecord = await patientrecords.findOne({ email: email });
    if (findrecord) {
      return res.status(409).json({
        message: "Record already exists",
      });
    } else {
      const record = new patientrecords({
        firstName,
        lastName,
        contact,
        email,
        SocialSecuritNumber: hash,
        address,
        medicalHistory,
      });
      await record.save();
      return res.status(200).json({
        message: "Record Added",
        record,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.getrecord = async (req, res) => {
  try {
    const findrecord = await patientrecords.find();
    console.log(findrecord);
    return res.status(200).json({
      message: "All Records",
      findrecord,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};


exports.deleterecord = async (req, res) => {
  try {
    const { id } = req.params;
    const findrecord = await patientrecords.findByIdAndDelete(id);
    console.log(findrecord);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.updaterecord = async (req, res) => {
  try {
    const { id } = req.params;
    const {  
      firstName,
      lastName,
      contact,
      email,
      SocialSecuritNumber,
      address,
      medicalHistory,
    } = req.body;
    const saltRounds = 10;
    let hash = await bcrypt.hash(SocialSecuritNumber, saltRounds);
    console.log(hash);
    const options = { new: true }; // return the updated record
    const findrecord = await patientrecords.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        contact,
        email,
        SocialSecuritNumber: hash,
        address,
        medicalHistory,
      },
      options
    );
    //console.log(findrecord);
    return res.status(200).json({
      message: "Record updated",
      findrecord,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
