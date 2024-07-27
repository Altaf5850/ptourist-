import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { FaMapMarkerAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import { FaBox, FaCalendarDay } from "react-icons/fa6";

const Carousel = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto mb-8 relative">
      <div className="h-[400px] md:h-[600px] flex items-center justify-center relative">
        <video
          src="https://cdn.pixabay.com/video/2016/06/27/3581-172488192_large.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
        <div
          className="absolute inset-10 pt-56 md:inset-0 flex flex-col items-start justify-center md:justify-start p-4 md:p-10 mt-[10%]"
          data-aos="zoom-in-right"
        >
          <h1 className="text-black font-cursive pb-80 text-2xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-56 opacity-85 font-serif">
            Travel With Us <br />
            <span className=""> For The </span>{" "}
            <span className="">
              {" "}
              <br /> Best Deal{" "}
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full md:w-4/5 mx-auto p-10  bg-white rounded-lg shadow-lg relative flex flex-col md:flex-row md:justify-between items-center gap-4 mt-[-20%] md:mt-[-4%]">
        <FaMapMarkerAlt className="font-bold text-2xl mt-3 hover:scale-75 duration-200" />
        <div className="w-full md:w-1/3 mb-5">
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2 text-center "
          >
            Dream Location
          </label>
          <input
            type="text"
            placeholder="Dream Destination"
            className="w-full bg-gray-100 rounded-lg border-none p-2 text-sm focus:outline-none placeholder-opacity-50"
          />
        </div>
        <FaCalendarDay className="font-bold text-2xl mt-3 hover:scale-75 duration-200" />
        <div className="w-full md:w-1/3 mb-5">
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2 text-center"
          >
            How Many Days To Stay
          </label>
          <input
            type="text"
            placeholder="Enter days"
            className="w-full bg-gray-100 rounded-lg border-none p-2 text-sm focus:outline-none placeholder-opacity-50"
          />
        </div>
        <FaBox className="font-bold text-2xl mt-3 hover:scale-75 duration-200" />
        <div className="w-full md:w-1/3 mb-5">
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2 text-center"
          >
            Enter Your Package
          </label>
          <input
            type="text"
            placeholder="Enter Package"
            className="w-full bg-gray-100 rounded-lg border-none p-2 text-sm focus:outline-none placeholder-opacity-50"
          />
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <button className="bg-[#D43D1D] text-white py-2 px-4 rounded-lg w-full md:w-auto mt-3 hover:scale-90 duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
