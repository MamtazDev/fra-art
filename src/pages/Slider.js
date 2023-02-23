import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Slide.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Slide({ volumeCollection }) {
  console.log("datassssss", volumeCollection);
  return (
    <div className="slider__wide">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          380: {
            width: 380,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          928: {
            width: 928,
            slidesPerView: 3,
          },
        }}
        // slidesPerView={3}
        spaceBetween={30}
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="sliders">
          {volumeCollection.slice(0, 5).map((item) => (
            <SwiperSlide>
              <Link to={`/trending/${item?.primaryContract}`}>
                <div className="parent">
                  <img className="w-100" src={item.image} />
                  <div className="child">
                    <p className="mb-0">{item.name}</p>
                    <p className="description">
                      {item.description.slice(0, 120)}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
