const express = require("express");
const router = express.Router();
const {
  createClient,
  deleteClient,
  getClient,
} = require("../controllers/clientController");

router.post("/", createClient);
router.delete("/:plateNumber", deleteClient);
router.get("/:plateNumber", getClient);

module.exports = router;
