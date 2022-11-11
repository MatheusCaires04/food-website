import React from "react";

import { MdAdd } from "react-icons/md";

const CardGalleryFood = (props) => {
  return (
    <a href={props.urlGalleryImage} className="relative hover__gallery">
      <div className=" bg-peru">
        <img src={props.imageGallery} alt="/" />
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/80 text-white text-7xl opacity-0 duration-200">
          <MdAdd />
        </div>
      </div>
    </a>
  );
};

export default CardGalleryFood;
