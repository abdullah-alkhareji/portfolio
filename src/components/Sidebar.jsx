import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../utils/data";

const isNotActiveStyle =
  "flex items-center py-5 gap-3 text-gray-500 hover:text-white transition-all duration-200 ease-in-out capitalize text-2xl";
const isActiveStyle =
  "flex items-center py-5 gap-3 text-white font-extrabold transition-all underline underline-offset-0 decoration-amber-500 decoration-wavy duration-200 ease-in-out capitalize text-2xl";

const Sidebar = ({closeToggle}) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? isActiveStyle : isNotActiveStyle
        }
        onClick={handleCloseSidebar}
      >
        <h1 className="">Home</h1>
      </NavLink>
      {menu.slice(1, menu.length).map((item) => (
        <NavLink
          to={`/${item.link}`}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={handleCloseSidebar}
          key={item.link}
        >
          <h1 className="">{item.link}</h1>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
