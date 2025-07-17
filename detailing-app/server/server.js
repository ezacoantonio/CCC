const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const clientRoutes = require("./routes/clients");
const reportRoutes = require("./routes/reports");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/clients", clientRoutes);
app.use("/reports", reportRoutes);

app.get("/", (req, res) => res.send("API is running"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
