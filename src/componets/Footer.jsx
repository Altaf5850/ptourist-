import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Aos from "aos";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Destinations",
    link: "/destinations",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const bgImage = {
  backgroundImage:
    "url(https://static.vecteezy.com/system/resources/previews/005/178/417/original/travel-and-tourism-background-with-famous-world-landmarks-in-3d-realistic-and-sketch-drawing-elements-vector.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  Aos.init({ duration: 2000, easing: "ease-in-out" });
  return (
    <div style={bgImage} className="text-white font-merienda font-semibold">
      <div className="bg-black/30 min-h-[400px] pl-5 text-lg">
        <div className="container grid md:grid-cols-3 pb-16 pt-1">
          <div
            className="py-8 px-4 mt-20 overflow-hidden"
            data-aos="zoom-out-right"
          >
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive inline-block hover:scale-105 duration-200"
            >
              Pathan Tourist
            </a>
            <p className="pt-4 hover:scale-90 duration-200">
              Explore the World with Unbeatable Deals!
            </p>
            <a
              href="https://youtu.be/Zcx247sfxPM?si=tWgsivTu-R1y4u0S"
              target="_blank"
              className="inline-block bg-[#D43D1D] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 duration-200"
            >
              Visit our YouTube Channel
            </a>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 overflow-hidden">
            <div className="py-8 px-4" data-aos="zoom-in-down">
              <h1 className="text-xl font-semibold sm:text-left mb-3 mt-16 hover:scale-105 duration-200">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4" data-aos="zoom-in-down">
              <h1 className="text-xl font-semibold sm:text-left mb-3 mt-16 hover:scale-105 duration-200">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="py-8 px-4 col-span-2 sm:col-auto"
              data-aos="zoom-out-left"
            >
              <h1 className="text-xl font-semibold sm:text-left mb-3 mt-16 hover:scale-105 duration-200">
                Address
              </h1>
              <div>
                <p className="mb-3 hover:scale-105 duration-200">
                  Mumbai, Maharashtra
                </p>
                <p className="hover:scale-105 duration-200">+91 1234567890</p>

                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl hover:text-[#D43D1D] duration-200 hover:scale-125" />
                  </a>
                  <a
                    href="https://www.facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-3xl hover:text-[#D43D1D] duration-200 hover:scale-125" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl hover:text-[#D43D1D] duration-200 hover:scale-125" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
