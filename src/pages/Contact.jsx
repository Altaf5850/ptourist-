import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Contactss from "../componets/Contacts";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="pt-20 bg-gray-200">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center relative">
        <img
          src="https://img.lovepik.com/background/20211022/large/lovepik-contact-us-background-image_500584282.jpg"
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>

      <Contactss />
    </div>
  );
}

export default Contact;
