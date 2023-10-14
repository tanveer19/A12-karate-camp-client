import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <h3 className="text-4xl font-bold mx-auto w-fit m-8 border-y-8 border-cyan-500 border-x-0">
        TESTIMONIAL
      </h3>
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
      >
        <SwiperSlide>
          <div class="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            "Kyokushin Karate has always been my passion, and my journey in this
            martial art has been truly transformative. <br /> Recently, I had
            the opportunity to use an exceptional application designed
            specifically for Kyokushin practitioners,
            <br /> and it has taken my training to a whole new level.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            The sense of community within our dojo is incredible.
            <br /> My fellow students and instructors have become like a second
            family to me. We support each other, celebrate each other's
            successes, and help each other through the tough times.
            <br /> It's an environment where you're constantly encouraged to
            grow, both as a martial artist and as an individual.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            "Kyokushin Karate has always been my passion, and my journey in this
            martial art has been truly transformative. <br /> Recently, I had
            the opportunity to use an exceptional <br />
            application designed specifically for Kyokushin practitioners, and
            it has taken my training to a whole new level.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
            The sense of community within our dojo is incredible. <br />
            My fellow students and instructors have become like a second family
            to me. We support each other, celebrate each other's successes,
            <br /> and help each other through the tough times. It's an
            environment where you're constantly encouraged to grow, both as a
            martial artist and as an individual.
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
