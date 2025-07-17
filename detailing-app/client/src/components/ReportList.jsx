import React from "react";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
const SectionTitle = ({ title }) => (
  <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
    {title}
  </Typography>
);

const ReportList = ({ reports }) => {
  return (
    <Box>
      {reports.map((report, index) => (
        <Card key={index} sx={{ my: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Service Date: {new Date(report.serviceDate).toLocaleDateString()}
            </Typography>
            <Divider />

            <SectionTitle title="Basic Details" />
            <Typography>Plate: {report.plateNumber}</Typography>
            <Typography>Oil Level: {report.oilLevel}</Typography>
            <Typography>Notes: {report.notes}</Typography>

            <SectionTitle title="Air & Cabin Filter" />
            <Typography>{report.airFilter}</Typography>
            {report.airFilterImg && (
              <img
                src={report.airFilterImg}
                alt="Air Filter"
                style={{ width: "100%", maxWidth: 300, marginTop: 8 }}
              />
            )}

            <SectionTitle title="Check Engine" />
            <Typography>{report.checkEngine}</Typography>
            {report.checkEngineImg && (
              <img
                src={report.checkEngineImg}
                alt="Check Engine"
                style={{ width: "100%", maxWidth: 300, marginTop: 8 }}
              />
            )}

            <SectionTitle title="Tires" />
            <Typography>Pressure: {report.tirePressure}</Typography>
            <Typography>Condition: {report.tireCondition}</Typography>
            {report.tireImg && (
              <img
                src={report.tireImg}
                alt="Tires"
                style={{ width: "100%", maxWidth: 300, marginTop: 8 }}
              />
            )}

            <SectionTitle title="Pads & Rotors" />
            <Typography>{report.padsRotors}</Typography>
            {report.padsImg && (
              <img
                src={report.padsImg}
                alt="Pads & Rotors"
                style={{ width: "100%", maxWidth: 300, marginTop: 8 }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ReportList;
