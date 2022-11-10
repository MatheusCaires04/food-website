import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { MdMenuBook, MdClose } from "react-icons/md";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  const linksHeader = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Food",
      url: "#food",
    },
    {
      name: "Gallery",
      url: "#gallery",
    },
    {
      name: "Menu",
      url: "#menu",
    },
    {
      name: "Order",
      url: "#order",
    },
    {
      name: "Blogs",
      url: "#blog",
    },
  ];

  return (
    <div className="w-full h-20 bg-white shadow-shadowG px-8 fixed">
      <div className="h-full max-w-[1200px] mx-auto flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1 text-2xl text-peru font-semibold"
        >
          <FaUtensils /> <span className="text-black">Food.</span>
        </a>
        <nav className="hidden md:flex gap-6 text-black text-lg font-medium">
          {linksHeader.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                className="hover:text-peru duration-150"
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        {/* Menu Mobile */}
        <nav className="flex md:hidden">
          <div
            className="text-black text-4xl cursor-pointer"
            onClick={handleMenu}
          >
            {!openMenu ? <MdMenuBook /> : <MdClose />}
          </div>
          <ul
            className={`${
              !openMenu ? "-right-full" : "right-0 left-0"
            } fixed top-20 bottom-0 flex flex-col gap-2 items-center justify-center text-center duration-700 ease-in-out`}
          >
            {linksHeader.map((item, index) => {
              return (
                <a
                  href={item.url}
                  key={index}
                  className="w-[80%] sm:w-[60%] py-2 text-xl font-semibold border border-peru border-l-8 border-l-peru hover:bg-peru hover:text-white duration-150"
                >
                  {item.name}
                </a>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
