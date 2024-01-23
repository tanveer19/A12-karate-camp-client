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
            {/* <section class="text-white body-font absolute">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 lg:w-1/2 md:w-full">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      <div class="flex-grow">
                        <h2 class=" text-lg title-font font-medium mb-3">
                          Shooting Stars
                        </h2>
                        <p class="leading-relaxed text-base">
                          Blue bottle crucifix vinyl post-ironic four dollar
                          toast vegan taxidermy. Gastropub indxgo juice poutine.
                        </p>
                        <a class="mt-3 text-indigo-500 inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <div className="">
              <img src="/images/karate-3.jpg" className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/karate-2.jpg" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/karate-1.jpg" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
