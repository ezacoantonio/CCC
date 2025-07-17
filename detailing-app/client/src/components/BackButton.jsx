// src/components/BackButton.jsx
import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={() => navigate(-1)}
      sx={{
        mt: 2,
        color: "#b30000",
        borderColor: "#b30000",
        fontWeight: "bold",
        ":hover": {
          backgroundColor: "#ffe6e6",
          borderColor: "#b30000",
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
