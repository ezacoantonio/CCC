import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToHomepage = () => {
  const handleBack = () => {
    window.location.href = "https://ezacoantonio.net";
  };

  return (
    <Button
      variant="outlined"
      color="error"
      startIcon={<ArrowBackIcon />}
      onClick={handleBack}
      sx={{ mt: 2 }}
    >
      Back to Homepage
    </Button>
  );
};

export default BackToHomepage;
