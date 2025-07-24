import React from "react";

const Blogss = () => {
  const blogs = [
    {
      title: "HOW TO PLAN YOUR TRIP",
      img: "https://hotelwoodlandnainital.com/wp-content/uploads/2024/09/Plan-Your-Trip.png",
      desc: "Planning your trip can be a lot of work! Where do you start? What’s step one? What’s step two? What’s step three? Fret not! This page will give you all the best resources I have for planning your trip from start to finish.",
      link: "https://www.nomadicmatt.com/how-to-plan-your-trip/",
    },
    {
      title: "TRAVEL GEAR, INSURANCE, TECH, AND MORE",
      img: "https://practicalwanderlust.com/wp-content/uploads/2019/08/Lia-and-Jeremy-Garcia-Travel-Bloggers-Looking-at-Map.jpg",
      desc: "Outside a few key items, I don’t think travelers don’t need a lot of gear when they travel. The more you carry, the more you’re weighed down. However, since gear is expensive, making a mistake or two can lead you to waste money.",
      link: "https://www.nomadicmatt.com/gear-insurance-tech/",
    },
    {
      title: "HOW TO GET CHEAP AIRFARE",
      img: "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
      desc: "Looking for a cheap flight? The cost of airfare is one of the main reasons people don’t travel more. However, thanks to the rise of international budget airlines and deal-finding websites, it’s gotten a lot easier to fly around the world on the cheap!",
      link: "https://www.nomadicmatt.com/airline-ticket-advice/",
    },
    {
      title: "HOW TO GET CHEAP ACCOMMODATION",
      img: "https://images.squarespace-cdn.com/content/v1/5dd986ef527463483ca37d28/17224ad2-0849-4810-a0b3-83607121d22f/Ladies+Lounge.jpeg",
      desc: "Accommodation will be one of your biggest daily expenses – and lowering that cost can lead to huge savings. To a lot of people, the choice seems to be either expensive hotels or cheap hostel dorms.",
      link: "https://www.nomadicmatt.com/find-cheap-places-to-stay/",
    },
    {
      title: "HOW TO HANDLE LIFE ON THE ROAD",
      img: "https://comeandreason.com/images/stories/ForkInRoad_shutterstock_466547954_1500.jpg",
      desc: "Long-term travel is one of the most exciting, interesting, and learning experiences a person can do in their lifetime. It makes you a far more well-adjusted person, more open-minded, more independent, and more confident.",
      link: "https://www.nomadicmatt.com/life-on-road/",
    },
    {
      title: "SOLO FEMALE TRAVEL ADVICE",
      img: "https://static.vecteezy.com/system/resources/previews/035/973/264/non_2x/ai-generated-woman-traveling-in-dubai-united-arab-emirates-travel-and-tourism-concept-happy-tourist-girl-rear-view-walking-near-fountains-in-dubai-city-vacation-and-sightseeing-concept-free-photo.jpg",
      desc: "Traveling the world as a solo female? Worried something might happen? Nervous? Think your friends and family might be right about the world “being dangerous”? Not sure where to begin? Fear not. Many women travel the world alone and thrive.",
      link: "https://www.nomadicmatt.com/female-travel-tips/",
    },
  ];

  return (
    <>
      <h1
        className="text-3xl font-bold text-center text-[#D43D1D] font-serif p-2"
        data-aos="zoom-in-up"
      >
        Our Blogs
      </h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 items-center gap-4 mb-2 overflow-hidden">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card card-compact w-96 bg-base-100 shadow-xl rounded-xl"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="card-body">
              <figure className="hover:scale-105 duration-200">
                <img
                  src={blog.img}
                  alt="img"
                  className="w-full h-full object-cover hover:opacity-90 rounded-xl"
                />
              </figure>
              <h2 className="text-xl text-center font-mono font-semibold hover:scale-95 duration-200">
                {blog.title}
              </h2>
              <p className="p-1">{blog.desc}</p>
              <a
                href={blog.link}
                className="btn btn-primary hover:scale-90 duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogss;
