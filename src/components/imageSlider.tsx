"use client";

import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const settings = {
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ImageSlider({ images }: { images: string[] }) {
  return (
    <Box
      position={"relative"}
      height={{ base: "300px", md: "400px" }}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {images.map((url, index) => (
          <Image
            key={index}
            h={{ base: "300px", md: "400px" }}
            position="relative"
            src={url}
            objectFit={"cover"}
            borderRadius={"xl"}
          />
        ))}
      </Slider>
    </Box>
  );
}
