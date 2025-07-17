import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const UpdateForm = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState("");

  const fetchClient = async () => {
    setMessage("");
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/clients/${plateNumber}`
      );
      setClient(res.data);
    } catch (err) {
      setMessage("Client not found");
      setClient(null);
    }
  };

  const handleChange = (e) => {
    setClient((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/clients/${plateNumber}`);
      await axios.post(`http://127.0.0.1:5000/clients`, client);
      setMessage("Client updated!");
    } catch (err) {
      setMessage("Update failed");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Update Client</Typography>
      <TextField
        label="Plate Number"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
      />
      <Button variant="contained" onClick={fetchClient}>
        Search
      </Button>

      {client && (
        <>
          {[
            "fullName",
            "email",
            "phone",
            "address",
            "make",
            "model",
            "year",
          ].map((field) => (
            <TextField
              key={field}
              label={field.replace(/([A-Z])/g, " $1")}
              name={field}
              value={client[field]}
              onChange={handleChange}
            />
          ))}
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update Client
          </Button>
        </>
      )}

      {message && <Typography color="secondary">{message}</Typography>}
    </Box>
  );
};

export default UpdateForm;
