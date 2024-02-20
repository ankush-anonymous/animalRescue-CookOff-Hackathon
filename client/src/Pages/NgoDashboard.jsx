import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NgoNavbarComponent from "../Components/NgoNavbarComponent";
import PetsIcon from "@mui/icons-material/Pets";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FaceIcon from "@mui/icons-material/Face";
import MasksIcon from "@mui/icons-material/Masks";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import AllBlogsListComponent from "../Components/AllBlogsListComponent";
import CarouselComponentForNGO from "../Components/CarouselComponentForNGO";

const NgoDashboard = () => {
  const animals = [
    {
      name: "Max",
      color: "Brown",
      Type: "Dog",
      Breed: "Labrador Retriever",
      photo:
        "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
      Identification_Mark: "Small scar on the left ear",
      locationOfFound: "Park",
      Condition: "Healthy",
    },
    {
      name: "Max",
      color: "Brown",
      Type: "Dog",
      Breed: "Labrador Retriever",
      photo:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
      Identification_Mark: "Small scar on the left ear",
      locationOfFound: "Park",
      Condition: "Healthy",
    },
    // Add more animals as needed
  ];

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
                    borderRadius: "10px",
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
                    borderRadius: "10px",
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
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "left", marginBottom: "40px" }}
                  >
                    Team Stats
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <FaceIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Volunteers :{" "}
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
                    <MasksIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Doctors :{" "}
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
                    <LocalHospitalIcon />
                    <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                      Clinics :{" "}
                    </Typography>
                    <Typography variant="h5"> 23</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* Blogs Section  */}
        <section sx={{}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  border: "1px solid black",
                  width: "fit-content",
                  padding: "20px",
                  marginLeft: "20px",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h4">Blogs</Typography>
                <AllBlogsListComponent />
                <br />
                <Box
                  sx={{
                    marginTop: "20px",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <Button variant="outlined">Add Blogs</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  border: "1px solid black",
                  width: "90%",
                  padding: "20px",
                  marginLeft: "20px",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                }}
              >
                <CarouselComponentForNGO slides={animals} />
                <Box
                  sx={{
                    marginTop: "20px",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <Button variant="outlined">Add Animal</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default NgoDashboard;
