"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import MediaControlCard from "./SlidersContent";
import MediaControlCardTwo from "./ContentTwo";
import MediaControlCardThree from "./ContentThree";
import MediaControlCardFour from "./ContentFour";
import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image from "../../../images/cake.jpg";
import MediaControlCardFive from "./ContentFive";
import MediaControlCardSix from "./ContentSix";
import MediaControlCardSeven from "./ContentSeven";
import MediaControlCardEight from "./ContentEight";

export const ResponsiveSlider = () => {
  const slider = useRef<Slider>(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 8000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Slider ref={slider} {...settings}>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCard />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardTwo />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardThree />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardFour />
        </Box>
      </Slider>

      <ArrowBackIosIcon
        onClick={() => slider.current?.slickPrev()}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
      <ArrowForwardIosIcon
        onClick={() => slider.current?.slickNext()}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export const ResponsiveSlider2 = () => {
  const slider = useRef<Slider>(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 8000,
    cssEase: "ease",
    rtl: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Slider ref={slider} {...settings}>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardFive />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardSix />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardSeven />
        </Box>
        <Box sx={{ paddingRight: "2rem" }}>
          <MediaControlCardEight />
        </Box>
      </Slider>

      <ArrowBackIosIcon
        onClick={() => slider.current?.slickPrev()}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
      <ArrowForwardIosIcon
        onClick={() => slider.current?.slickNext()}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};
