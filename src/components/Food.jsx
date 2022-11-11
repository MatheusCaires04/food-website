import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import CardFood from "./CardFood";
import { food } from "./ListFood";
import Title from "./Title";
import Subtitle from "./Subtitle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Food = () => {
  return (
    <div className="w-full px-8 py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto text-center">
        <Subtitle text="Popular Dishes" />
        <Title text="Our Delicious Food" />
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="pb-10 mt-10 food__slide w-[80%] md:w-full"
        >
          {food.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardFood
                  imageFood={item.url}
                  nameFood={item.food}
                  priceFood={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Food;
