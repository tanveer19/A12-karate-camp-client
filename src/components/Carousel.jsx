import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import {
  // Autoplay, Pagination,
  Navigation,
} from "swiper/modules";

export default function Carousel() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[
          // Autoplay, Pagination,
          Navigation,
        ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex">
            <div
              className=""
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src="/images/slider-gym-2.jpg" className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider-gym-3.jpg" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider-gym-4.jpg" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
