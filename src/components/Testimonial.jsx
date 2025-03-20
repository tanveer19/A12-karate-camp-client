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
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-black">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
