import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    plateNumber: "",
    serviceDate: "",
    oilLevel: "",
    airFilter: "",
    airFilterImg: "",
    checkEngine: "",
    checkEngineImg: "",
    tirePressure: "",
    tireCondition: "",
    tireImg: "",
    padsRotors: "",
    padsImg: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post("http://127.0.0.1:5000/reports", formData);
      setMessage("Report submitted successfully!");
      setFormData({
        plateNumber: "",
        serviceDate: "",
        oilLevel: "",
        airFilter: "",
        airFilterImg: "",
        checkEngine: "",
        checkEngineImg: "",
        tirePressure: "",
        tireCondition: "",
        tireImg: "",
        padsRotors: "",
        padsImg: "",
        notes: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h6">Create Service Report</Typography>

      {[
        "plateNumber",
        "serviceDate",
        "oilLevel",
        "airFilter",
        "airFilterImg",
        "checkEngine",
        "checkEngineImg",
        "tirePressure",
        "tireCondition",
        "tireImg",
        "padsRotors",
        "padsImg",
        "notes",
      ].map((field) => (
        <TextField
          key={field}
          label={field.replace(/([A-Z])/g, " $1")}
          name={field}
          type={field.includes("Date") ? "date" : "text"}
          value={formData[field]}
          onChange={handleChange}
          required={!field.toLowerCase().includes("img") && field !== "notes"}
          InputLabelProps={field === "serviceDate" ? { shrink: true } : {}}
        />
      ))}

      <Button type="submit" variant="contained" color="primary">
        Submit Report
      </Button>
      {message && <Typography color="secondary">{message}</Typography>}
    </Box>
  );
};

export default ReportForm;
