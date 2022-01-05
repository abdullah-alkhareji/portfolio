import React from "react";
import { Link, NavLink } from "react-router-dom";
import { menu } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold transition-all underline underline-offset-0 decoration-amber-500 decoration-wavy duration-200 ease-in-out capitalize";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mr-8 p-5">
      <NavLink to="/">
        <div className="flex gap-3 items-center p-5">
          <div className="p-1 border-4 border-amber-500 w-10 h-10 flex justify-center items-center">
            <h2 className="font-black text-white underline underline-offset-0 decoration-amber-500 decoration-wavy">
              AK
            </h2>
          </div>
          <h1 className="sm:hidden lg:flex font-black text-2xl uppercase underline underline-offset-0 decoration-amber-500 decoration-wavy decoration-4 text-white">
            Abdullah AlKhareji ;
          </h1>
        </div>
      </NavLink>
      <div className="flex flex-row">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          <h1 className="text-white">Home</h1>
        </NavLink>
        {menu.slice(1, menu.length).map((item) => (
          <NavLink
            to={`/${item.link}`}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            key={item.link}
          >
            <h1 className=" text-white">{item.link}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
