import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "./Button";

const CardBlog = (props) => {
  return (
    <div>
      <div>
        <img src={props.imagePost} alt={props.titlePost} />
      </div>
      <div className="text-start px-4 pb-4 pt-1">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1 font-normal text-sm">
            <AiFillCalendar className="text-peru text-lg" /> {props.dataPost}
          </span>
          <span className="flex items-center gap-1 font-normal text-sm">
            <BsFillPersonFill className="text-peru text-lg" /> {props.userPost}
          </span>
        </div>
        <h3 className="text-start text-lg font-medium">{props.titlePost}</h3>
        <p className="text-start text-sm font-normal mt-1 mb-2">
          {props.textPost}
        </p>
        <Button text="Read More" />
      </div>
    </div>
  );
};

export default CardBlog;
