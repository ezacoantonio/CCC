import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const EditReportForm = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/reports`)
      .then((res) => {
        const found = res.data.find((r) => r._id === id);
        if (found) setReport(found);
        else setMessage("Report not found");
      })
      .catch(() => setMessage("Error fetching report"));
  }, [id]);

  const handleChange = (e) => {
    setReport((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:5000/reports/${id}`, report);
      setMessage("Report updated successfully!");
    } catch (err) {
      setMessage("Failed to update report");
    }
  };

  if (!report) return <Typography>{message || "Loading report..."}</Typography>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6">Edit Report</Typography>
      {Object.entries(report).map(
        ([key, value]) =>
          key !== "_id" &&
          key !== "__v" && (
            <TextField
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              name={key}
              value={value}
              onChange={handleChange}
            />
          )
      )}
      <Button variant="contained" onClick={handleUpdate}>
        Save Changes
      </Button>
      {message && <Typography color="secondary">{message}</Typography>}
    </Box>
  );
};

export default EditReportForm;
