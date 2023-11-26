import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./sliders.css";
import project1 from "../Assets/Razorpay.png";
import project2 from "../Assets/passwordgenerator.png";
import project3 from "../Assets/chair.png";
import project4 from "../Assets/Gallery.png";
import project5 from "../Assets/parallax.png";
import project6 from "../Assets/Calculator.png";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://github.com/Mayanksde/Razorpay_Clone" target="blank"><img src={project1} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mayankmishra-passwordgenerator.netlify.app/" target="blank"> <img src={project2} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Mayanksde/Scientific_Calculator" target="blank"> <img src={project6} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mayankmishra-modernchair.netlify.app/" target="blank"> <img src={project3} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Mayanksde/Image_Gallery" target="blank"> <img src={project4} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://parallax-effect-0093.netlify.app/" target="blank"> <img src={project5} /></a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

