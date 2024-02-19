import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Card, Typography } from "@mui/material";
const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      //   showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Adjust autoplay interval as needed
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeable={true}
    >
      {/* Carousel items */}
      <Card sx={{ width: "75vw", height: "350px", margin: "0 auto" }}>
        <img src="https://wp.globaluniversitysystems.com/mua/wp-content/uploads/sites/10/2023/02/istock-482499394.webp" />
      </Card>
      <Card sx={{ width: "75vw", height: "350px", margin: "0 auto" }}>
        <img src="https://shuddhi.org/uploads/3/4/7/9/34791871/cloth-distribution-shuddhi-ngo-india-clidren-women-environment_orig.jpg" />
      </Card>
      <Card sx={{ width: "75vw", height: "350px", margin: "0 auto" }}>
        <img src="https://5.imimg.com/data5/HG/YA/MY-12789234/clinic-interior-designing-services-500x500.jpg" />
      </Card>

      {/* Add more items as needed */}
    </Carousel>
  );
};

export default CarouselComponent;
