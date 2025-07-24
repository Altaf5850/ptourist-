import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Package() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBuyClick = () => {
    if (isAuthenticated) {
      navigate("/payment");
    } else {
      loginWithRedirect();
    }
  };

  const packages = [
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Sheikh_Zayed_Mosque_view.jpg",
      title: "The Sheikh Zayed Grand Mosque Package",
      description:
        "6 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, and Selected Meals.",
      price: "₹1,89,999 Only",
      animation: "fade-right",
    },
    {
      imgSrc:
        "https://image.cnbcfm.com/api/v1/image/106282960-1575647802341dubai-burj-khalifa_t20_wqrlxx.jpg?v=1575647842&w=720&h=405",
      title: "Dubai Package",
      description:
        "6 Days All Inclusive Like Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, Selected Meals and much more.",
      price: "₹94,999 Only",
      animation: "zoom-in-up",
    },
    {
      imgSrc:
        "https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
      title: "Taj Mahal Package",
      description:
        "5 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, and Selected Meals.",
      price: "₹45,999 Only",
      animation: "fade-left",
    },
    {
      imgSrc: "https://static.toiimg.com/photo/38602755.cms",
      title: "Paris Package",
      description:
        "7 Days All Inclusive with Round Trip Flights, Airport Transfers, 4 Star Hotel, 4 Activities, Visa, and Selected Meals.",
      price: "₹1,24,999 Only",
      animation: "fade-right",
    },
    {
      imgSrc:
        "https://img.veenaworld.com/wp-content/uploads/2024/01/Best-Places-to-Visit-in-Tokyo-Explore-the-Capital-City-of-Japan.jpg",
      title: "Tokyo Package",
      description:
        "5 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 3 Activities, Visa, and Selected Meals.",
      price: "₹1,09,999 Only",
      animation: "zoom-in-up",
    },
    {
      imgSrc:
        "https://www.tahititourisme.com/app/uploads/2023/06/bora-bora-la-perle-du-pacifique-a-stephane-mailion-photography.webp",
      title: "Bora Bora Package",
      description:
        "6 Days All Inclusive with Round Trip Flights, Airport Transfers, 4.5 Star Hotel, 4 Activities, Visa, and Selected Meals.",
      price: "₹1,19,999 Only",
      animation: "fade-left",
    },
    {
      imgSrc:
        "https://cdn.britannica.com/00/196200-050-A18811BA/Uyuni-Salt-Flat-Bolivia.jpg",
      title: "Uyuni Salt Flat Package",
      description:
        "7 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 5 Activities, Visa, and Selected Meals.",
      price: "₹1,45,999 Only",
      animation: "fade-right",
    },
    {
      imgSrc:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRkkTDQ8CFS-CwXNgwN-b2AYVljuDGFA2YcQrPhm88kZ78n1uJVytHn6EuBd5wkIk1f",
      title: "Statue of Liberty Package",
      description:
        "5 Days All Inclusive with Round Trip Flights, Airport Transfers, 4 Star Hotel, 2 Activities, Visa, and Selected Meals.",
      price: "₹1,14,999 Only",
      animation: "zoom-in-up",
    },
    {
      imgSrc:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSWk083kYny78qkaNSVV_SdybgBYjz7MMeWGxv3szX2C6AG7Cu3RXjWMQv8wArWzw_T",
      title: "Gros Piton Package",
      description:
        "8 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, and Selected Meals.",
      price: "₹1,35,000 Only",
      animation: "fade-left",
    },
    {
      imgSrc:
        "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPlR1Qww6Ng_Blh4XhXS3z9ehLm5qz9EA0KzNdzFhOzhoxRAVDj3DSjWSoT65maDjv",
      title: "Antelope Canyon Package",
      description:
        "7 Days All Inclusive with Round Trip Flights, Airport Transfers, 4.5 Star Hotel, 5 Activities, Visa, and Selected Meals.",
      price: "₹1,46,999 Only",
      animation: "fade-right",
    },
    {
      imgSrc:
        "https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg",
      title: "Great Barrier Reef Package",
      description:
        "5 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 4 Activities, Visa, and Selected Meals.",
      price: "₹1,24,999 Only",
      animation: "zoom-in-up",
    },
    {
      imgSrc:
        "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTWWntnRGwkkdnj0XgLHrtK0G2TaDGlKJSNPAKRCvxa6UrqfWTzR00TDnQzF6MUrWVf",
      title: "Great Wall of China Package",
      description:
        "7 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 5 Activities, Visa, and Selected Meals.",
      price: "₹1,59,999 Only",
      animation: "fade-left",
    },
    {
      imgSrc:
        "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSj_RqY-v3vT4JreuAqZqz6kbWMSs1G2v8kv23CyvbXqYrZWEbZkRCjifr4fS7BILEM",
      title: "Blue Lagoon Package",
      description:
        "6 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 6 Activities, Visa, and Selected Meals.",
      price: "₹1,69,999 Only",
      animation: "zoom-in-up",
    },
    {
      imgSrc:
        "https://www.andbeyond.com/wp-content/uploads/sites/5/A-tender-moment-between-Lioness-and-cub.jpg",
      title: "Kruger National Park Package",
      description:
        "7 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 5 Activities, Visa, and Selected Meals.",
      price: "₹1,74,999 Only",
      animation: "fade-right",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/163658970/photo/zanskar-and-indus-rivers.jpg?s=612x612&w=0&k=20&c=YDVe4XWhfF2JghVXDoTNJEryO9oUjtHpq_USlUfTFqA=",
      title: "Zanskar Valley Package",
      description:
        "6 Days All Inclusive with Round Trip Flights, Airport Transfers, 5 Star Hotel, 5 Activities, Visa, and Selected Meals.",
      price: "₹1,19,999 Only",
      animation: "fade-left",
    },
  ];

  return (
    <section className="bg-gray-100 py-8" id="packages">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Exclusive Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              data-aos={pkg.animation}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2"
            >
              <img
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                src={pkg.imgSrc}
                alt={pkg.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mt-2">{pkg.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {pkg.price}
                  </span>
                </div>
                <button
                  onClick={handleBuyClick}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Package;
