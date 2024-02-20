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
      <Card sx={{ width: '75vw', height: '350px', margin: '0 auto' }}>
        <img
          src="https://media.istockphoto.com/id/941762276/photo/doctors-walking-in-clinic.jpg?s=612x612&w=0&k=20&c=OwsH-lT88akwiPOYm1kTVs6c7mXHBUDgUbnQuCssyyg="
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Card>
      <Card sx={{ width: '75vw', height: '350px', margin: '0 auto' }}>
        <img
          src="https://shuddhi.org/uploads/3/4/7/9/34791871/cloth-distribution-shuddhi-ngo-india-clidren-women-environment_orig.jpg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Card>
      <Card sx={{ width: '75vw', height: '350px', margin: '0 auto' }}>
        <img
          src="https://5.imimg.com/data5/HG/YA/MY-12789234/clinic-interior-designing-services-500x500.jpg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Card>
      {/* Add more items as needed */}
    </Carousel>
  );
};

export default CarouselComponent;
