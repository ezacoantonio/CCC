const express = require("express");
const router = express.Router();
const {
  createReport,
  getReportsByPlate,
  getAllReports,
  updateReport,
} = require("../controllers/reportController");

router.post("/", createReport);
router.get("/:plateNumber", getReportsByPlate);
router.get("/", getAllReports); // List all reports
router.put("/:id", updateReport); // Update one report

module.exports = router;
