import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllReports = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/reports")
      .then((res) => setReports(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5">All Service Reports</Typography>
      {reports.map((report) => (
        <Card key={report._id} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">
              {report.plateNumber} –{" "}
              {new Date(report.serviceDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">Notes: {report.notes}</Typography>
            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={() => navigate(`/edit-report/${report._id}`)}
            >
              ✏️ Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default AllReports;
