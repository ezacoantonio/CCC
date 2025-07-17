const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  plateNumber: { type: String, unique: true },
  make: String,
  model: String,
  year: String,
});

module.exports = mongoose.model("Client", clientSchema);
