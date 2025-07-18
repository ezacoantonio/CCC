import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import BASE_URL from "../config";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    plateNumber: "",
    make: "",
    model: "",
    year: "",
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
      await axios.post(`${BASE_URL}/clients`, formData);
      setMessage("Client added successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        plateNumber: "",
        make: "",
        model: "",
        year: "",
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
      <Typography variant="h6">Add New Client</Typography>
      {[
        "fullName",
        "email",
        "phone",
        "address",
        "plateNumber",
        "make",
        "model",
        "year",
      ].map((field) => (
        <TextField
          key={field}
          label={field.replace(/([A-Z])/g, " $1")}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          required
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Save Client
      </Button>
      {message && <Typography color="secondary">{message}</Typography>}
    </Box>
  );
};

export default ClientForm;
