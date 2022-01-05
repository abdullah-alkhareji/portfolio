import React from "react";
import { About } from ".";
import profile from "../assets/images/profile.jpg";
import { BsTwitter, BsInstagram, BsDiscord, BsGithub } from "react-icons/bs";

const Feed = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <img
          src={profile}
          alt="Abdullah's Pic"
          className=" object-cover w-[200px] h-[200px] rounded-full shadow-lg p-1 border-amber-500 border-4"
        />
        <h1 className="text-4xl font-black mt-8 mb-4 text-slate-100">Abdullah AlKhareji</h1>
        <h3 className="text-xl font-bold mb-4 text-slate-100 underline underline-offset-0 decoration-amber-500 decoration-wavy">i'm Full Stack Developer</h3>
        <div className="flex flex-row gap-3">
            <a href="#" className='text-slate-100 px-4 mb-6'><BsTwitter fontSize={23}/></a>
            <a href="#" className='text-slate-100 px-4 mb-6'><BsInstagram fontSize={23}/></a>
            <a href="#" className='text-slate-100 px-4 mb-6'><BsDiscord fontSize={23}/></a>
            <a href="#" className='text-slate-100 px-4 mb-6'><BsGithub fontSize={23}/></a>
        </div>
        <a href="#" className=" bg-amber-500 px-8 py-2 rounded-full text-slate-900 font-black text-xl">Hire me</a>
      </div>
      <About />
    </>
  );
};

export default Feed;
