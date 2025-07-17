const Report = require("../models/ServiceReport");

exports.createReport = async (req, res) => {
  try {
    const newReport = new Report(req.body);
    const saved = await newReport.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReportsByPlate = async (req, res) => {
  try {
    const reports = await Report.find({
      plateNumber: req.params.plateNumber,
    }).sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const updated = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Report not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
