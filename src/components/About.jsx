import React from "react";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col py-12 items-center h-full bg-gradient-to-br from-white to-gray-300">
      <h1 className="text-5xl mb-8 px-8 font-black text-slate-900 underline underline-offset-0 decoration-wavy decoration-amber-500">
        About Me
      </h1>
      <div className="p-5 h-full flex flex-col md:flex-row md:w-2/3 justify-center gap-5 items-center">
        <div className=" md:w-1/3">
          <img
            src={profile}
            alt="Abdullah's Pic"
            className=" object-cover w-[200px] h-[200px] rounded-full shadow-lg p-1 border-amber-500 border-4"
          />
        </div>
        <div className="md:w-2/3">
          <div className="p-5 bg-white rounded-2xl shadow-xl">
            <p className=" mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque hic ab fugiat possimus deleniti reiciendis cum,
              aspernatur repellendus maxime tempore? Voluptate at neque eaque
              asperiores. Sed dignissimos voluptas harum non ratione. Temporibus
              aliquam quaerat, nesciunt praesentium, aperiam molestias ex
              deserunt, mollitia quos vero cumque cupiditate eos aliquid
              voluptatibus blanditiis commodi!
            </p>
            <a
              href="#"
              className="bg-amber-500 px-4 py-2 text-center text-slate-900 font-black rounded-full"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
