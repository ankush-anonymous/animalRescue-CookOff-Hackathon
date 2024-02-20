import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Card, Typography } from "@mui/material";

const CarouselComponent = ({ slides }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Adjust autoplay interval as needed
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeable={true}
    >
      {/* Carousel items */}
      {slides.map((slide, index) => (
        <Card
          key={index}
          sx={{ width: "75vw", height: "350px", margin: "0 auto" }}
        >
          <img
            src={slide.photo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "5px",
            }}
          >
            <Typography variant="body1">{slide.text}</Typography>
          </Box>
        </Card>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
