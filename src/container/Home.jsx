import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Portfolio from "./Portfolio";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-900 to-slate-700 h-screen">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="flex md:hidden w-full">
        <div className="p-5 w-full flex flex-row justify-between items-center shadow-md">
          <Link to="">
            <div className="flex gap-3 items-center">
              <div className="p-1 border-4 border-amber-500 w-10 h-10 flex justify-center items-center">
                <h2 className=" font-black text-slate-100 underline underline-offset-0 decoration-amber-500 decoration-wavy">
                  AK
                </h2>
              </div>
              <h1 className=" font-black text-2xl uppercase underline underline-offset-0 decoration-amber-500 decoration-wavy decoration-4  text-slate-100">
                Abdullah AlKhareji ;
              </h1>
            </div>
          </Link>
          <HiMenu
            fontSize={30}
            className="cursor-pointer text-amber-500"
            onClick={() => setToggleSidebar(true)}
          />
        </div>
        {toggleSidebar && (
          <div className="fixed w-full bg-gradient-to-br from-slate-900 to-slate-700 h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-6">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer text-amber-500"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className="flex-1 h-screen overflow-y-scroll hide-scrollbar">
        <Routes>
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
