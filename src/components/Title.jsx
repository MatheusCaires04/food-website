import React from "react";

const Title = (props) => {
  return (
    <h1 className={`text-5xl font-semibold ${props.color}`}>{props.text}</h1>
  );
};

export default Title;
