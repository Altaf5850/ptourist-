import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Massion() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init({
      duration: 1500,
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

  return (
    <div className="container flex flex-col sm:flex-row justify-between mx-auto p-4">
      <div
        className="box m-4 sm:m-8 grid grid-flow-row sm:w-1/2"
        data-aos={scrollDirection === "down" ? "fade-right" : "fade-left"}
      >
        <h1 className="text-2xl sm:text-3xl text-center font-semibold font-serif text-[#D43D1D]">
          Our Services
        </h1>
        <p className="space-y-3 mt-3 text-justify text-sm sm:text-lg">
          Accommodation: Tourist services often include options for lodging such
          as hotels, resorts, hostels, vacation rentals, and camping grounds.
          These accommodations vary in style, comfort, and amenities to suit
          different preferences and budgets. Transportation: Services related to
          transportation are crucial for tourists. This includes airport
          transfers, rental cars, taxis, shuttle services, public transportation
          information, and tour buses. Efficient transportation services help
          tourists navigate and explore the destination easily.
          <br /> <br />
          Guided Tours: Many tourists seek guided tours to explore local
          attractions, landmarks, and historical sites. Tour operators provide
          guided tours by bus, boat, walking, or other means, often including
          knowledgeable guides who provide insights and historical context.
          <br /> <br />
          Travel Planning Assistance: Tourist services often involve helping
          tourists plan their itinerary, providing information about
          attractions, events, and local customs. This may include assistance
          with booking tickets for attractions, restaurants, and cultural
          events.
        </p>
        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/tour-guide-lady-and-group-of-tourists-7477858-6091448.png?f=webp"
            alt="Tour Group"
            className="w-full h-48 sm:h-96 object-cover"
          />
        </div>
      </div>

      <div
        className="w-full sm:w-1/2 flex flex-col items-center space-y-4"
        data-aos={scrollDirection === "down" ? "fade-left" : "fade-right"}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/tour-guide-lady-and-group-of-tourists-9503031-7784361.png"
          alt="Tour Guide"
          className="w-full h-48 sm:h-96 object-cover"
        />
        <p className="text-justify text-sm sm:text-lg">
          Guided Tours: Many tourists seek guided tours to explore local
          attractions, landmarks, and historical sites. Tour operators provide
          guided tours by bus, boat, walking, or other means, often including
          knowledgeable guides who provide insights and historical context.
          <br /> <br />
          Travel Planning Assistance: Tourist services often involve helping
          tourists plan their itinerary, providing information about
          attractions, events, and local customs. This may include assistance
          with booking tickets for attractions, restaurants, and cultural
          events.
        </p>
      </div>
    </div>
  );
}

export default Massion;
