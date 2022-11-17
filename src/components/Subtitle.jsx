import React from "react";

const Subtitle = (props) => {
  return (
    <h3 className={`text-2xl font-semibold ${props.color}`}>{props.text}</h3>
  );
};

export default Subtitle;
