const mongoose = require("mongoose");

const serviceReportSchema = new mongoose.Schema(
  {
    plateNumber: String,
    serviceDate: Date,
    oilLevel: String,
    airFilter: String,
    airFilterImg: String,
    checkEngine: String,
    checkEngineImg: String,
    tirePressure: String,
    tireCondition: String,
    tireImg: String,
    padsRotors: String,
    padsImg: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceReport", serviceReportSchema);
