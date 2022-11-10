import React from "react";

const CardFood = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={props.imageFood} alt="" className="w-[30%] md:w-[40%]" />
      <strong className="text-2xl mt-6 mb-3">{props.nameFood}</strong>
      <span className="text-xl text-peru">{props.priceFood}</span>
    </div>
  );
};

export default CardFood;
