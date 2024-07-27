import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Package from "../componets/Package";

function Destinations() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto mb-8 relative overflow-hidden">
      <div className="h-[400px]  md:h-[600px] flex items-center justify-center relative">
        <img
          src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/countrybanner/travelling-in-india-tours-and-vacation-packages-1503987120-1920X700.jpg"
          alt="img"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0  flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-10 mt-[10%] text-center md:text-left"
          data-aos="zoom-in-right"
        >
          <h1 className="text-[#D43D1D] font-cursive pb-60  text-2xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-56 opacity-85 font-serif">
            NEVER STOP <br /> <span className="text-white">EXPLORING THE </span>{" "}
            <br /> WORLD
          </h1>
        </div>
      </div>
      <Package />
    </div>
  );
}

export default Destinations;
