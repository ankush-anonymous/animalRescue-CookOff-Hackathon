import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import NgoNavbarComponent from "../Components/NgoNavbarComponent";
import PetsIcon from "@mui/icons-material/Pets";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const NgoDashboard = () => {
  const data = [
    { month: "January", money: 5000 },
    { month: "February", money: 7000 },
    { month: "March", money: 6000 },
    { month: "April", money: 8000 },
    { month: "May", money: 10000 },
    { month: "June", money: 9000 },
  ];
  return (
    <>
      <NgoNavbarComponent />
      <Box>
        {/* Issue Bar  */}
        <section className="my-10">
          <Box
            sx={{
              height: "80px",
              width: "90%", // Adjusted width to 90%
              border: "1px solid black",
              margin: "auto", // Centered along x-axis
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={4} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "10px", md: "25px" } }}
                  >
                    Issue Resolved: 46
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "10px", md: "25px" } }}
                  >
                    Issue Resolved: 45
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="outlined">Add Issue</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* Animal Stats */}
        <section>
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    border: "1px black solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "left", marginBottom: "40px" }}
                  >
                    Animal Stats
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Saved :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Healed :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Adopted :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    border: "1px black solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <Typography variant="h5" sx={{ marginBottom: "20px" }}>
                    Balance: Rs. 10,000
                  </Typography>
                  {/* Line Chart */}
                  <LineChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="money" stroke="#8884d8" />
                  </LineChart>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    border: "1px black solid",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "left", marginBottom: "40px" }}
                  >
                    Animal Stats
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Saved :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Healed :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <PetsIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Adopted :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
        {/* NGO Stats  */}

        {/* Funds Section  */}

        {/* Blogs Section  */}
      </Box>
    </>
  );
};

export default NgoDashboard;
