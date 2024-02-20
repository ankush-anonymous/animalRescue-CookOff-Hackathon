import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
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
} from "@mui/material";
import NumberScrollAnimation from "../Components/NumberScrollAnimation";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CarouselComponent from "../Components/CarouselComponent";
import SearchIcon from "@mui/icons-material/Search";

const HomePage = () => {
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const theme = useTheme();
  return (
    <>
      <NavbarComponent />
      <Box sx={{ backgroundColor: "white", height: "100%" }}>
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
                    display: "flex-col",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ alignItems: "flex-start", marginBottom: "50px" }}>
                    <Typography variant="h2">Lorem Ipsum</Typography>
                    {/* For smaller screens (xs), use variant="body2" */}
                    <Typography variant="h6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur corporis nemo suscipit ad officiis possimus
                      cumque autem est quod laboriosam?
                    </Typography>
                    {/* For smaller screens (xs), use variant="body1" */}
                    <Typography variant="h6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur corporis nemo suscipit ad officiis possimus
                      cumque autem est quod laboriosam?
                    </Typography>
                  </Box>
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
                        Upload
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  {/* Box with shadow */}
                  <Box
                    sx={{
                      backgroundColor: "#D56A57",
                      width: "80%",
                      height: "80%",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      boxShadow: "-10px 10px 10px rgba(0, 0, 0, 0.5)", // Adjust shadow as needed
                      zIndex: 1, // Ensure this box is above the image box
                    }}
                  ></Box>

                  {/* Box with image */}
                  <Box
                    sx={{
                      backgroundColor: "black",
                      padding: "50px",
                      position: "relative", // Necessary for z-index stacking
                      zIndex: 2, // Ensure this box is above the shadow box
                      overflow: "hidden", // Hide overflow
                      height: "400px",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundColor: "#D56A57",
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -1, // Ensure this box is below the image
                      }}
                    >
                      <img
                        src="https://petlifesa.com/wp-content/uploads/2019/04/SA0003-petlifesa-health-basic-care-general-taking-care-of-your-dogs-health-header-FA.jpg"
                        alt="Dog"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* Services  */}
        <section>
          <Box
            sx={{
              marginTop: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "source sans pro",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem",
                  padding: "15px",
                },
              }}
            >
              Services We Provide!!
            </Typography>
            <br />
          </Box>
          <Box style={{ padding: "25px" }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered1(true)}
                  onMouseOut={() => setIsHovered1(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered1 ? "#e0e0e0" : "#FFB534",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered1
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <TrackChangesIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h4" style={{ fontSize: "1.2rem" }}>
                        Our Mission
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered2(true)}
                  onMouseOut={() => setIsHovered2(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered2 ? "#e0e0e0" : "#80B3FF",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered2
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <AccessibilityNewIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                        Our Vision
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered3(true)}
                  onMouseOut={() => setIsHovered3(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered3 ? "#e0e0e0" : "#EFB495",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered3
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <RemoveRedEyeIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                        Our Values
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </section>

        {/* Countdown Section   */}
        <section
          className="flex-col overflow-hidden"
          // style={{ marginTop: theme.breakpoints.down("sm") ? "50px" : "0" }}
        >
          <Card
            sx={{
              marginTop: "100px",
              marginBottom: "100px",
              marginLeft: "60px",
              marginRight: "60px",
              backgroundColor: "white",
              padding: "50px",
              overflow: "hidden", // Ensure the box doesn't overflow its container
              boxShadow: "0 0 20px rgba(0, 0, 0.5 , 0.5)",
              [theme.breakpoints.down("sm")]: {
                marginTop: "150px",
                marginBottom: "100px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  // fontFamily: "Merriweather ",
                  fontFamily: "source sans pro",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "2.5rem", // Adjust the font size for small screens
                    padding: "15px",
                    marginTop: "50px",
                  },
                }}
              >
                Providing unparalleled services since 2003
              </Typography>
              <br />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "source sans ",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1rem", // Adjust the font size for small screens
                    marginTop: "100px",
                    padding: "15px",
                  },
                }}
              >
                With two decades of experience, we have achieved some major
                accomplishments.
              </Typography>
            </Box>
            {/* Countdown  */}
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Box sx={{ marginTop: "50px", width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <NumberScrollAnimation targetValue={1234} />
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      Animals Rescued
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                    <NumberScrollAnimation targetValue={5678} />
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      Volunteers with Us
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                    <NumberScrollAnimation targetValue={91011} />
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      Yet Another Metric
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </section>

        {/* Our Vision/Mission Section  */}
        <section style={{ padding: "5px" }}>
          <Box
            sx={{
              marginTop: "60px",
              marginBottom: "100px",
              [theme.breakpoints.down("sm")]: {
                marginTop: "100px",
                marginBottom: "100px",
                height: "fit-content",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "source sans pro",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "2.5rem",
                    padding: "15px",
                  },
                }}
              >
                Where it all started !!
              </Typography>
              <br />
            </Box>
            <Box style={{ padding: "25px" }}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered1(true)}
                    onMouseOut={() => setIsHovered1(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered1 ? "#e0e0e0" : "#FFE5E5",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered1
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <TrackChangesIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h4" style={{ fontSize: "1.2rem" }}>
                          Our Mission
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered2(true)}
                    onMouseOut={() => setIsHovered2(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered2 ? "#e0e0e0" : "#E0AED0",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered2
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <AccessibilityNewIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                          Our Vision
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered3(true)}
                    onMouseOut={() => setIsHovered3(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered3 ? "#e0e0e0" : "#A367B1",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered3
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <RemoveRedEyeIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                          Our Values
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </section>

        {/* Our Partners Section  */}
        <section style={{ padding: "5px" }}>
          <Box
            sx={{
              marginTop: "60px",
              marginBottom: "100px",
              [theme.breakpoints.down("sm")]: {
                marginTop: "100px",
                marginBottom: "100px",
                height: "fit-content",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "",
                  // color: "#176B87",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "2.5rem",
                    padding: "15px",
                  },
                }}
              >
                Our Partners
              </Typography>
              <br />
            </Box>
            {/* <Box style={{ padding: "25px" }}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered1(true)}
                    onMouseOut={() => setIsHovered1(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered1 ? "#e0e0e0" : "white",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered1
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <TrackChangesIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h4" style={{ fontSize: "1.2rem" }}>
                          Our Doctors
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered2(true)}
                    onMouseOut={() => setIsHovered2(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered2 ? "#e0e0e0" : "white",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered2
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <AccessibilityNewIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                          Our Clinics
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    onMouseOver={() => setIsHovered3(true)}
                    onMouseOut={() => setIsHovered3(false)}
                    style={{
                      maxWidth: 345,
                      backgroundColor: isHovered3 ? "#e0e0e0" : "white",
                      transition: "background-color 0.5s", // Set the transition for background-color
                      boxShadow: isHovered3
                        ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        : "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar>
                          <RemoveRedEyeIcon />
                        </Avatar>
                      }
                      title={
                        <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                          Our NGOs
                        </Typography>
                      }
                    />

                    <CardContent>
                      We aim to facilitate the global exchange and review of
                      research, ideas and expertise among individuals in the
                      scientific community. Our vision is simple: to partner
                      with researchers and scientific institutes, to enable a
                      realization of the full potential of their content in the
                      digital environment, and to increase the efficiency of
                      research in our world.
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box> */}
            <CarouselComponent />
          </Box>
        </section>
      </Box>
    </>
  );
};

export default HomePage;
