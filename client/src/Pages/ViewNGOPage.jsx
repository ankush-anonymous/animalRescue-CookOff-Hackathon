import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Divider,
  Card,
  Avatar,
  CardHeader,
  CardContent,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import NavbarComponent from "../Components/NavbarComponent";
import FooterComponent from "../Components/FooterComponenent";
import SearchIcon from "@mui/icons-material/Search";

function ViewNGOPage() {
  const [NgosData, setNgosData] = useState([]);
  useEffect(() => {
    fetchNgosData();
  }, []);

  const fetchNgosData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/ngos");
      setNgosData(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  // const ngos = [
  //   {
  //     _id: "65d3a6163121ba1d3cd92d29",
  //     name: "Wildlife Rescue Society",
  //     address: "456 Oak Avenue, Townsville",
  //     phoneno: 9876543210,
  //     isVerified: false,
  //     established: "2018-09-22T00:00:00.000Z",
  //     certification: "Non-profit",
  //     locationOfService: "Townsville region",
  //     __v: 0,
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
  //   },
  //   {
  //     _id: "65d3a6163121ba1d3cd92d29",
  //     name: "Wildlife Rescue Society",
  //     address: "456 Oak Avenue, Townsville",
  //     phoneno: 9876543210,
  //     isVerified: false,
  //     established: "2018-09-22T00:00:00.000Z",
  //     certification: "Non-profit",
  //     locationOfService: "Townsville region",
  //     __v: 0,
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
  //   },
  //   {
  //     _id: "65d3a6163121ba1d3cd92d29",
  //     name: "Wildlife Rescue Society",
  //     address: "456 Oak Avenue, Townsville",
  //     phoneno: 9876543210,
  //     isVerified: false,
  //     established: "2018-09-22T00:00:00.000Z",
  //     certification: "Non-profit",
  //     locationOfService: "Townsville region",
  //     __v: 0,
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
  //   },
  //   {
  //     _id: "65d3a6163121ba1d3cd92d29",
  //     name: "Wildlife Rescue Society",
  //     address: "456 Oak Avenue, Townsville",
  //     phoneno: 9876543210,
  //     isVerified: false,
  //     established: "2018-09-22T00:00:00.000Z",
  //     certification: "Non-profit",
  //     locationOfService: "Townsville region",
  //     __v: 0,
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
  //   },
  //   {
  //     _id: "65d3a6163121ba1d3cd92d29",
  //     name: "Wildlife Rescue Society",
  //     address: "456 Oak Avenue, Townsville",
  //     phoneno: 9876543210,
  //     isVerified: false,
  //     established: "2018-09-22T00:00:00.000Z",
  //     certification: "Non-profit",
  //     locationOfService: "Townsville region",
  //     __v: 0,
  //     image:
  //       "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png",
  //   },
  // ];
  return (
    <>
      <NavbarComponent />
      <Box>
        {/* HeroSection */}
        <section className="my-10">
          <Box
            sx={{
              xs: { height: "110vh" },
              md: { height: "80vh" },
              // backgroundColor: "#F7DED0",
            }}
          >
            <Grid container spacing={5} sx={{ padding: "30px" }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png" />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // padding: "20px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "xl",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Search"
                      // onChange={search}
                      // value={query}
                      sx={{ mr: 1 }}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      // onClick={search}
                      sx={{ p: 2 }}
                    >
                      <SearchIcon />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* NGO Cards  */}
        <section>
          <Grid container spacing={3} sx={{ padding: "20px" }}>
            {NgosData.map((ngo) => (
              <Grid item xs={12} sm={6} md={4} key={ngo._id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={ngo.image}
                    alt={ngo.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {ngo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Address: {ngo.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {ngo.phoneno}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </Box>
      <FooterComponent/>
    </>
  );
}

export default ViewNGOPage;
