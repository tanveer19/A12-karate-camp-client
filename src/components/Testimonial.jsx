import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function Testimonial() {
  return (
    <div className="font-sans">
      <SectionTitle heading={"Testimonial"}></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <SwiperSlide>
          <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            "Kyokushin Karate has always been my passion, and my journey in this
            martial art has been truly transformative. <br /> Recently, I had
            the opportunity to use an exceptional application designed
            specifically for Kyokushin practitioners,
            <br /> and it has taken my training to a whole new level.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            The sense of community within our dojo is incredible.
            <br /> My fellow students and instructors have become like a second
            family to me. We support each other, celebrate each other's
            successes, and help each other through the tough times.
            <br /> It's an environment where you're constantly encouraged to
            grow, both as a martial artist and as an individual.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            "Kyokushin Karate has always been my passion, and my journey in this
            martial art has been truly transformative. <br /> Recently, I had
            the opportunity to use an exceptional <br />
            application designed specifically for Kyokushin practitioners, and
            it has taken my training to a whole new level.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            The sense of community within our dojo is incredible. <br />
            My fellow students and instructors have become like a second family
            to me. We support each other, celebrate each other's successes,
            <br /> and help each other through the tough times. It's an
            environment where you're constantly encouraged to grow, both as a
            martial artist and as an individual.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
