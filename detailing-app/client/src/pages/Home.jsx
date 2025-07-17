import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import BackToHomepage from "../components/BackToHomepage";

const Home = () => {
  const [adminMode, setAdminMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (password === "ezaco123") {
      setAdminMode(true);
      setOpenDialog(false);
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <Box sx={{ mt: 6, mx: "auto", maxWidth: 500, px: 2, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Canadian Car Care
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Honest, Professional, Detail-Oriented.
      </Typography>

      <Stack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "12px", fontWeight: 600 }}
          onClick={() => navigate("/view-report")}
        >
          View Service Report
        </Button>
        <BackToHomepage />

        {adminMode && (
          <>
            <Button
              onClick={() => navigate("/add-client")}
              fullWidth
              variant="outlined"
            >
              Add Client
            </Button>
            <Button
              onClick={() => navigate("/add-report")}
              fullWidth
              variant="outlined"
            >
              Create Report
            </Button>
            <Button
              onClick={() => navigate("/update-client")}
              fullWidth
              variant="outlined"
            >
              Update Client
            </Button>
            <Button
              onClick={() => navigate("/delete-client")}
              fullWidth
              variant="outlined"
              color="error"
            >
              Delete Client
            </Button>
            <Button
              onClick={() => navigate("/all-reports")}
              fullWidth
              variant="outlined"
              color="secondary"
            >
              View All Reports
            </Button>
          </>
        )}

        {!adminMode && (
          <Tooltip title="Unlock Admin">
            <IconButton onClick={() => setOpenDialog(true)} sx={{ mx: "auto" }}>
              <LockIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Enter Admin Password</DialogTitle>
        <DialogContent>
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleUnlock}
          >
            Unlock
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;
