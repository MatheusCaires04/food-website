import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Button from "./Button";
import { HeroSlide } from "./ListHero";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="pt-20 w-full h-screen ">
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        className="h-full"
      >
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
                <div className="px-4 md:px-0 flex flex-col items-center w-[90%] sm:w-[25rem] md:w-[33rem]  text-center animate__slide">
                  <span className="text-light-white text-2xl font-semibold ">
                    {item.subtitle}
                  </span>
                  <h1 className="text-white text-6xl sm:text-7xl md:text-8xl font-semibold mt-2 mb-6">
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
