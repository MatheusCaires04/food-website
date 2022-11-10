import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "./Button";
import { HeroSlide } from "./ListHero";

import "swiper/css";

const Hero = () => {
  return (
    <div className="pt-20 w-full h-screen">
      <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
        {HeroSlide.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative flex items-center justify-center">
                <img
                  src={item.url}
                  alt="Foto de fundo"
                  className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10" />
                <div className="px-4 md:px-0 flex flex-col items-center w-full md:w-[33rem]  text-center">
                  <span className="text-light-white text-2xl font-semibold">
                    {item.subtitle}
                  </span>
                  <h1 className="text-white text-6xl md:text-8xl font-semibold mt-2 mb-6">
                    {item.title}
                  </h1>
                  <Button text="Get Started" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
