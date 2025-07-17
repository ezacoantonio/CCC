import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const DeleteForm = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://ccc-backend-xlsw.onrender.com/clients/${plateNumber}`
      );
      setMessage("Client deleted successfully!");
    } catch (err) {
      setMessage("Client not found or deletion failed");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Delete Client</Typography>
      <TextField
        label="Plate Number"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
      />
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete Client
      </Button>
      {message && <Typography color="secondary">{message}</Typography>}
    </Box>
  );
};

export default DeleteForm;
