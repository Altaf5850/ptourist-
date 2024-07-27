import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Tcart() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleBuyClick = () => {
    if (isAuthenticated) {
      navigate("/payment", { state: { scrollToTop: true } });
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollDirection(currentScrollPos > lastScrollTop ? "down" : "up");
      lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const travelPackages = [
    {
      title: "The Sheikh Zayed Grand Mosque Package",
      description:
        "6 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, Selected Meals and much more.",
      price: "₹1,89,000 Only",
      img: "https://www.esquireme.com/cloud/2021/09/09/Zayed-Mosque-1_2-1.jpg",
      animation: "fade-right",
    },
    {
      title: "Dubai Package",
      description:
        "6 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, Selected Meals and much more.",
      price: "₹94,999 Only",
      img: "https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xo2obc9zrvhpvqdo7gg2.jpg",
      animation: "zoom-in-up",
    },
    {
      title: "Rome, Italy Package",
      description:
        "5 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 4 Activities, Visa, Selected Meals and much more.",
      price: "₹85,000 Only",
      img: "https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world3.png",
      animation: "fade-left",
    },
    {
      title: "New Zealand Package",
      description:
        "7 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹100,000 Only",
      img: "https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world4.png",
      animation: "fade-right",
    },
    {
      title: "Masai Mara, Kenya package",
      description:
        "5 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹85,000 Only",
      img: "https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world6.png",
      animation: "zoom-in-up",
    },
    {
      title: "Taj Mahal package",
      description:
        "3 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹44,999 Only",
      img: "https://ihplb.b-cdn.net/wp-content/uploads/2018/08/Agra-Taj-Mahal-1.jpg",
      animation: "fade-left",
    },
    {
      title: "London, England package",
      description:
        "6 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹89,999 Only",
      img: "https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world7.png",
      animation: "fade-right",
    },
    {
      title: "The Grand Canyon, Arizona package",
      description:
        "7 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹99,999 Only",
      img: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/6/29/Orig-Joe-Sills_Horseshoe-Bend.JPG.rend.hgtvcom.1280.960.suffix/1530284302208.jpeg",
      animation: "zoom-in-up",
    },
    {
      title: "Machu Picchu, Peru Package",
      description:
        "8 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, Selected Meals and much more.",
      price: "₹105,000 Only",
      img: "https://static.javatpoint.com/top10-technologies/images/top-10-tourist-places-in-world1.png",
      animation: "fade-left",
    },
  ];
  return (
    <div>
      <h1
        className="text-3xl text-center font-semibold font-serif m-4"
        data-aos={scrollDirection === "down" ? "fade-up-right" : "fade-up-left"}
      >
        BEST TRAVEL <span className="text-[#D43D1D]">PACKAGES</span> AVAILABLE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {travelPackages.map((packageData, index) => (
          <div
            key={index}
            className="card card-compact w-full bg-base-700 shadow-xl "
            data-aos={packageData.animation}
          >
            <figure>
              <img
                src={packageData.img}
                alt={packageData.title}
                className="w-full h-48 sm:h-60 object-cover hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body bg-slate-700">
              <h2 className="card-title font-bold font-merienda text-[#D43D1D]">
                {packageData.title}
              </h2>
              <p className="text-sm text-white">{packageData.description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary hover:scale-95 transition-transform duration-300 bg-[#09859C] border-none"
                  onClick={handleBuyClick}
                >
                  {packageData.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions justify-center">
        <a
          href="/destinations"
          className="btn btn-primary text-black text-center hover:scale-95 transition-transform duration-300 bg-[#09859C] border-none w-1/2 opacity-90 mt-3"
        >
          View All
        </a>
      </div>
    </div>
  );
}

export default Tcart;
