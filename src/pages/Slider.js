import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Slide.css";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Slide({ volumeCollection }) {
  console.log("datassssss", volumeCollection);
  return (
    <div className="slider__wide">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // loop ={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="sliders">
          {volumeCollection.slice(0, 5).map((item) => (
            <SwiperSlide>
              <Link to={`/trending/${item?.primaryContract}`}>
                <div>
                  <img src={item.image} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
