const mongoose = require("mongoose");
const { Schema } = mongoose;
const patientRecordSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: false,
    default: null,
  },
  contact: {
    type: Number,
    require: false,
    default: null,
  },
  email: {
    type: String,
    require: false,
    unique: true,
    default: null,
  },
  SocialSecuritNumber: {
    type: String,
    require: false,
    default: null,
  },
  address: {
    type: String,
    require: false,
  },
  medicalHistory: {
    type: String,
    required: true,
  },
});

const PatientRecord = mongoose.model("PatientRecord", patientRecordSchema);

module.exports = PatientRecord;
