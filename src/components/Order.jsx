import React, { useEffect } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Button from "./Button";

const Order = () => {
  return (
    <div className="w-full px-8 py-10 text-center bg-peru" id="order">
      <div className="max-w-[1200px] mx-auto">
        <Subtitle text="Our Order" color="text-white" />
        <Title text="Fast Home Delivery" color="text-white" />
        <form className="bg-white px-6 py-4 flex flex-col gap-3 mt-10">
          <div
            action=""
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 "
          >
            <div className="flex flex-col gap-4 items-start">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div>
                <label htmlFor="">Food Name</label>
                <input type="text" placeholder="Food You Want" />
              </div>
              <div>
                <label htmlFor="">Order Details</label>
                <input type="text" placeholder="Specifics With Food" />
              </div>
              <div>
                <label htmlFor="">Your Address</label>
                <input type="text" placeholder="Enter Your Address" />
              </div>
              <div>
                <label htmlFor="">Complement Address</label>
                <input
                  type="text"
                  placeholder="Complement You Address: home, apartment..."
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div>
                <label htmlFor="">Number</label>
                <input type="text" placeholder="Enter Your Number" />
              </div>
              <div>
                <label htmlFor="">How Much</label>
                <input type="text" placeholder="How Many You Want" />
              </div>
              <div className="ok">
                <label htmlFor="">When You Want</label>
                <input type="date" placeholder="Specifics With Food" />
              </div>
              <div className="w-full overflow-hidden">
                <label htmlFor="">Our Address</label>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7434.659540292421!2d-50.33786450088828!3d-21.297982076013163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949615d512aea301%3A0xe9992489363617de!2sNino%20Treinamento%20Integrado%20e%20Reabilita%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1668449706203!5m2!1spt-BR!2sbr"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="h-[6.9rem]"
                ></iframe>
              </div>
            </div>
          </div>
          <Button text="Order Now" />
        </form>
      </div>
    </div>
  );
};

export default Order;
