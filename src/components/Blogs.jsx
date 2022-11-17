import React from "react";
import Subtitle from "./Subtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Title from "./Title";
import { Posts } from "./Posts";
import CardBlog from "./CardBlog";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blogs = () => {
  return (
    <div className="w-full px-8 py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto text-center">
        <Subtitle text="Our Blogs" color="text-peru" />
        <Title text="Our Latest Posts" color="text-black" />
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
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mt-10 pb-12 w-[80%] md:w-full"
        >
          {Posts.map((item, index) => {
            return (
              <SwiperSlide key={index} className="bg-white shadow-shadowG">
                <CardBlog
                  imagePost={item.url}
                  titlePost={item.title}
                  dataPost={item.data}
                  userPost={item.userPost}
                  textPost={item.text}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
