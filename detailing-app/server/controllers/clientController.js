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

exports.getClient = async (req, res) => {
  try {
    const client = await Client.findOne({
      plateNumber: req.params.plateNumber,
    });
    console.log("Client found:", client);
    if (!client) return res.status(404).json({ error: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
