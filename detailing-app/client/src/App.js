import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Home from "./pages/Home";
import AddClient from "./pages/AddClient";
import AddReport from "./pages/AddReport";
import ViewReport from "./pages/ViewReport";
import UpdateClient from "./pages/UpdateClient";
import DeleteClient from "./pages/DeleteClient";
import AllReports from "./pages/AllReports";
import EditReport from "./pages/EditReport";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e53935", // red accent
    },
    background: {
      default: "#ffffff",
      paper: "#f8f9fa",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Container maxWidth="sm" sx={{ padding: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/add-report" element={<AddReport />} />
            <Route path="/view-report" element={<ViewReport />} />
            <Route path="/update-client" element={<UpdateClient />} />
            <Route path="/delete-client" element={<DeleteClient />} />
            <Route path="/all-reports" element={<AllReports />} />
            <Route path="/edit-report/:id" element={<EditReport />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
