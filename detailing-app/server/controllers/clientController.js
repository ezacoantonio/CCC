const Client = require("../models/Client");

exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const saved = await newClient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const deleted = await Client.findOneAndDelete({
      plateNumber: req.params.plateNumber,
    });
    if (!deleted) return res.status(404).json({ error: "Client not found" });
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// In clientController.js
exports.getClient = async (req, res) => {
  const plateNumber = req.params.plateNumber;
  const client = await Client.findOne({ plateNumber });

  console.log("Client found:", client); // 👈 Add this line

  if (!client) {
    return res.status(404).json({ error: "Client not found" });
  }

  res.json(client);
};
