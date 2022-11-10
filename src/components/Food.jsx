import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { food } from "./ListFood";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardFood from "./CardFood";

const Food = () => {
  return (
    <div className="w-full px-8 py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto text-center">
        <h3 className="text-peru text-2xl font-semibold">Popular Dishes</h3>
        <h1 className="text-black text-5xl font-semibold">
          Our Delicious Food
        </h1>
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
          className="pb-10 mt-20 food__slide w-[80%] md:w-full"
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
