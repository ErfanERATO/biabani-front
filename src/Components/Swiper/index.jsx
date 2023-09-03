import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { Pagination } from "swiper";
const Slider = ({ data = [], renderItem = () => {}, props = {} }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      //   modules={[Pagination]}
      //   loop={true}
      className="mySwiper"
      {...props}
      autoplay={true}
    >
      {data.map((item, key) => {
        return <SwiperSlide>{renderItem(item, key)}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Slider;
