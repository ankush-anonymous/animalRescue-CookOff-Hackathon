import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [access, setAccess] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/v1/employee/login", {
        phoneNumber,
        password,
      });
      const { token, role, SalesExecId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (role === "SalesExec") {
        localStorage.setItem("SalesExec-authorized", "true");
      } else if (role === "Admin") {
        localStorage.setItem("Admin-authorized", "true");
      }
      localStorage.setItem("SalesExecId", SalesExecId);
      setAccess(role);
      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={0} md={8}>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                LENDER APP
              </Typography>

              <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: { borderColor: "#739072" },
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  style: { borderColor: "#739072" },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#557C55",
                  "&:hover": {
                    backgroundColor: "#739072",
                  },
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
