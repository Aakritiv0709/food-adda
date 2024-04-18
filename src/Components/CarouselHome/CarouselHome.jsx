import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import { Pagination, Navigation } from "swiper/modules";
const CarouselHome = () => {
  return (
    <div className="relative h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://yummi-theme.myshopify.com/cdn/shop/files/slide2-bg.jpg?v=1614338365"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://yummi-theme.myshopify.com/cdn/shop/files/slide1-bg.jpg?v=1614338364"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHome;
