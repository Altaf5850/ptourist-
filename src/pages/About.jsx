import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Customer from "../componets/Customer";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto mb-8 relative">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center relative">
        <img
          src="https://www.shutterstock.com/image-vector/female-tour-guide-showing-interesting-600nw-1742138192.jpg"
          alt="img"
          className="w-full h-full object-center md:object-cover"
        />
      </div>

      <header className="container sm:mt-5 overflow-hidden flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="w-full sm:w-3/4 md:w-1/2 px-4" data-aos="fade-up-right">
          <h1 className="text-center font-serif font-extrabold text-3xl sm:text-4xl text-[#D43D1D] hover:scale-95 duration-200">
            About
          </h1>
          <p className="p-2 text-justify sm:text-center">
            A Pathan tourist company, also known as a travel agency or tour
            operator, is a business that provides various travel-related
            services to clients. These services can include planning, booking,
            and managing travel itineraries, accommodations, transportation, and
            activities for both leisure and business travelers.
          </p>
          <h1 className="text-center font-serif font-extrabold text-3xl sm:text-4xl text-[#D43D1D] hover:scale-95 duration-200">
            Our Mission
          </h1>
          <p className="p-2 text-justify sm:text-center">
            Our mission is to create exceptional travel experiences that exceed
            our customers' expectations. We are committed to offering
            high-quality services, unique itineraries, and unforgettable
            adventures while promoting sustainable and responsible tourism.
          </p>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/6633dac64b048c5142be2dcc/Businessman-explaining-his-concept-during-a-meeting/960x0.jpg?height=473&width=711&fit=bounds"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 p-4" data-aos="fade-up-left">
          <h1 className="text-center font-serif font-extrabold text-3xl sm:text-4xl text-[#D43D1D] hover:scale-95 duration-200">
            Popular Destinations
          </h1>
          <p className="p-2 text-center">
            <span className="text-[#D43D1D] font-bold font-mono">
              United Arab Emirates:
            </span>{" "}
            Experience the rich history and modern wonders of United Arab
            Emirates.
          </p>
          <p className="p-2 text-center">
            <span className="text-[#D43D1D] font-bold font-mono">India:</span>{" "}
            Discover the vibrant culture and stunning landscapes of India.
          </p>
          <p className="p-2 text-center pt-6">
            <span className="text-[#D43D1D] font-bold font-mono">France:</span>{" "}
            Relax and unwind on the pristine beaches of Thailand.
          </p>
          <p className="p-2 text-center">
            <span className="text-[#D43D1D] font-bold font-mono">Italy:</span>{" "}
            Experience the rich history, exquisite cuisine, and breathtaking
            landscapes of Italy.
          </p>
          <p className="p-2 text-center">
            <span className="text-[#D43D1D] font-bold font-mono">Egypt:</span>{" "}
            Discover the ancient wonders and vibrant culture of Egypt.
          </p>

          <img
            src="https://media.istockphoto.com/id/1291682560/photo/young-couple-taking-break-from-sightseeing-for-selfie.jpg?s=612x612&w=0&k=20&c=0KK28cBPosGvfZsxPNyA9AqWUjBRzM0qGZcpzcQlDN8="
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <header className="container mt-5 overflow-hidden flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="w-full sm:w-3/4 md:w-1/2 p-4" data-aos="fade-up-right">
          <img
            src="https://www.tourmyindia.com/blog//wp-content/uploads/2017/08/Places-that-Americans-Visit-in-India.jpg"
            alt="img"
            className="w-full h-full object-cover mt-11"
          />
        </div>
        <div className="w-full sm:w-3/4 md:w-1/2 px-4" data-aos="fade-up-left">
          <h1 className="text-center font-serif font-extrabold text-3xl sm:text-4xl text-[#D43D1D] hover:scale-95 duration-200">
            Why Choose Us?
          </h1>
          <p className="pt-3">
            Expertise and Experience: With over 15 years of experience in the
            travel industry, our team of seasoned professionals has extensive
            knowledge of destinations around the globe.
            <br />
            <br />
            Customized Itineraries: We understand that every traveler is unique.
            Our customized itineraries are tailored to meet your specific
            interests, preferences, and budget. <br />
            <br /> Quality Services: From luxurious accommodations to local
            guides, we ensure every aspect of your trip is of the highest
            quality. <br />
            <br /> Sustainable Tourism: We prioritize eco-friendly practices and
            support local communities to ensure our travel experiences are
            sustainable and beneficial for all. <br />
            <br /> 24/7 Support: Our customer service team is available around
            the clock to assist you with any needs before, during, and after
            your trip.
          </p>
        </div>
      </header>
      <Customer />
    </div>
  );
}

export default About;
