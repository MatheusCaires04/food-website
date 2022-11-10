import React from "react";

const Button = (props) => {
  return (
    <button className="bg-peru text-lg text-light-bg font-medium px-6 py-1 hover:tracking-widest duration-100">
      {props.text}
    </button>
  );
};

export default Button;
