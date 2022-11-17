import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Subtitle from "./Subtitle";
import Title from "./Title";
import { TypeFood } from "./ListMenuFood";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MenuFood = () => {
  return (
    <div className="w-full px-8 py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto text-center">
        <Subtitle text="Our Menu" color="text-peru" />
        <Title text="Our Popular  Dishes" color="text-black" />
        <Swiper
          loop={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mt-10 pb-10"
        >
          {TypeFood.map(({ food, foods }) => {
            return (
              <SwiperSlide>
                <h1 className="bg-peru w-full text-white text-3xl font-semibold py-2">
                  {food}
                </h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  {foods.map(({ nameFood, descriptionFood, priceFood }) => {
                    return (
                      <div className="bg-white px-4 py-2 flex text-start cursor-pointer hover:scale-90 duration-200">
                        <div className="flex flex-col pr-14">
                          <span className="text-xl font-semibold">
                            {nameFood}
                          </span>
                          <span className="text-sm">{descriptionFood}</span>
                        </div>
                        <span className="self-center text-peru text-xl font-medium">
                          {priceFood}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MenuFood;
