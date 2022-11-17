import React from "react";
import Button from "./Button";

import imageAbout from "/assets/about-img.png";
import icon1 from "/assets/about-icon-1.png";
import icon2 from "/assets/about-icon-2.png";
import icon3 from "/assets/about-icon-3.png";

const About = () => {
  return (
    <div className="w-full px-8 py-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto">
        <div className="flex justify-center md:justify-start">
          <img
            src={imageAbout}
            alt="Imagem de um prato branco com frutas (uva, morango) e um pedaço de pão, e mais uma xícara de café com café dentro"
            className="w-[50%] md:w-[95%] lg:w-[80%] min-w-[250px]"
          />
        </div>
        <div className="self-center">
          <h1 className="text-4xl font-bold">Welcome To Our Restaurant</h1>
          <p className="text-sm md:text-base my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            laborum consequuntur voluptatibus aliquid debitis blanditiis
            quibusdam sint deserunt veniam dolorum, molestiae, culpa ratione
            eveniet suscipit laudantium minus corporis, molestias porro.
          </p>
          <Button text="Read More" />
          <div className="grid grid-cols-3 gap-8 mt-5">
            <div className="bg-light-bg flex flex-col items-center p-3 gap-2">
              <img
                src={icon1}
                alt="Icon of an aluminum tray where food can be placed"
                className="w-[40%]"
              />
              <span className="text-center">Food & Drinks</span>
            </div>
            <div className="bg-light-bg flex flex-col items-center p-3 gap-2">
              <img
                src={icon2}
                alt="Icon of a drink bowl with a sliced piece of lemon on top of the bowl"
                className="w-[40%]"
              />
              <span className="text-center">Quality Food</span>
            </div>
            <div className="bg-light-bg flex flex-col items-center p-3 gap-2">
              <img src={icon3} alt="Icon of a chef" className="w-[40%]" />
              <span className="text-center">Experts Chefs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
