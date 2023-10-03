import React from "react";
import ClassCard from "../../components/ClassCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OrderTab.css";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  // Function to split the items into chunks of 6
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split items into chunks of 6
  const itemChunks = chunkArray(items, 6);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {itemChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10 my-12">
              {chunk.map((item) => (
                <div
                  className="flex justify-center items-center"
                  key={item._id}
                >
                  <ClassCard item={item}></ClassCard>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
