import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
// import LightGallery from "lightgallery/react";

import { ListGalleryFood } from "./ListGalleryFood";
import CardGalleryFood from "./CardGalleryFood";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

const GalleryFood = () => {
  return (
    <div className="w-full px-8 py-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <Subtitle text="Our Gallery" />
        <Title text="Our Untold Stories" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {ListGalleryFood.map((item, index) => {
            return (
              <CardGalleryFood
                key={index}
                urlGalleryImage={item.url}
                imageGallery={item.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryFood;
