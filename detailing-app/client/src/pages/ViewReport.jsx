// src/pages/ViewReport.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import BackButton from "../components/BackButton";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import BackToHomepage from "../components/BackToHomepage";
import BASE_URL from "../config";

const ViewReport = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [reports, setReports] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/reports/${plateNumber}`);
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports:", err);
      setReports([]);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Canadian Car Care
      </Typography>
      <Typography variant="h6" mb={2}>
        Search Reports by Plate Number
      </Typography>
      <TextField
        label="Plate Number"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        View Reports
      </Button>
      <br></br>
      <BackToHomepage />
      <br></br>
      <BackButton />

      {Array.isArray(reports) && reports.length > 0 ? (
        reports.map((report, index) => (
          <Card key={index} sx={{ mt: 4 }} elevation={4}>
            <CardContent>
              <Typography variant="h6">
                {report?.clientName
                  ? `${report.clientName}'s Report`
                  : "Service Report"}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    <OilBarrelIcon /> <strong>Oil Level:</strong>{" "}
                    {report.oilLevel}
                  </Typography>
                  <Typography>
                    <TireRepairIcon /> <strong>Tire Pressure:</strong>{" "}
                    {report.tirePressure}
                  </Typography>
                  <Typography>
                    <ReportProblemIcon /> <strong>Check Engine:</strong>{" "}
                    {report.checkEngine}
                  </Typography>
                  <Typography>
                    <BuildCircleIcon /> <strong>Brake Pads:</strong>{" "}
                    {report.padsRotors}
                  </Typography>
                  <Typography>
                    <TireRepairIcon /> <strong>Tire Condition:</strong>{" "}
                    {report.tireCondition}
                  </Typography>
                  <Typography>
                    <NoteAltIcon /> <strong>Notes:</strong> {report.notes}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography fontWeight="bold" mb={1}>
                    Images
                  </Typography>
                  <Grid container spacing={1}>
                    {report.airFilterImg && (
                      <Grid item xs={6}>
                        <Paper elevation={2} sx={{ p: 1 }}>
                          <img
                            src={report.airFilterImg}
                            alt="Air Filter"
                            style={{ width: "100%", borderRadius: 8 }}
                          />
                          <Typography align="center" variant="caption">
                            Air Filter
                          </Typography>
                        </Paper>
                      </Grid>
                    )}
                    {report.checkEngineImg && (
                      <Grid item xs={6}>
                        <Paper elevation={2} sx={{ p: 1 }}>
                          <img
                            src={report.checkEngineImg}
                            alt="Check Engine"
                            style={{ width: "100%", borderRadius: 8 }}
                          />
                          <Typography align="center" variant="caption">
                            Check Engine
                          </Typography>
                        </Paper>
                      </Grid>
                    )}
                    {report.tireImg && (
                      <Grid item xs={6}>
                        <Paper elevation={2} sx={{ p: 1 }}>
                          <img
                            src={report.tireImg}
                            alt="Tire"
                            style={{ width: "100%", borderRadius: 8 }}
                          />
                          <Typography align="center" variant="caption">
                            Tire
                          </Typography>
                        </Paper>
                      </Grid>
                    )}
                    {report.padsImg && (
                      <Grid item xs={6}>
                        <Paper elevation={2} sx={{ p: 1 }}>
                          <img
                            src={report.padsImg}
                            alt="Pads"
                            style={{ width: "100%", borderRadius: 8 }}
                          />
                          <Typography align="center" variant="caption">
                            Pads
                          </Typography>
                        </Paper>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography mt={4}>No reports found.</Typography>
      )}
    </Box>
  );
};

export default ViewReport;
