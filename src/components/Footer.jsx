import React from "react";
import { AiFillClockCircle, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsMapFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 footer__grid__icons1">
          <div className="">
            <span className="icon">
              <AiFillClockCircle />
            </span>
            <strong>Open Hours</strong>
            <span>07:00am to 10:00pm</span>
          </div>
          <div>
            <span className="icon">
              <AiFillPhone />
            </span>
            <strong>Phone</strong>
            <span>+123-456-789</span>
            <span>+987-654-321</span>
          </div>
          <div>
            <span className="icon">
              <AiOutlineMail />
            </span>
            <strong>Email</strong>
            <span>devfront@hotmail.com</span>
            <span>devfront@gmail.com</span>
          </div>
          <div>
            <span className="icon">
              <BsMapFill />
            </span>
            <strong>Address</strong>
            <span>mumbai, Índia - 40065</span>
          </div>
        </div>
        <div className="icon__social__media flex justify-center gap-3 md:gap-6 mb-6 mt-12">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <div className="w-full h-1 bg-light-bg " />
        <span className="mt-5 block text-center text-lg">
          Created By <span className="text-peru">Matheus Bini</span> | All
          Rights Reserved!
        </span>
      </div>
    </div>
  );
};

export default Footer;
