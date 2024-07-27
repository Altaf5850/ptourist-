import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Altaf Pathan",
    text: "It And WebSite Developer. I have worked designing, coding, and maintaining software applications. You'll collaborate with cross-functional teams to understand requirements and translate them into technical solutions.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
  },
  {
    id: 2,
    name: "Humera Khan",
    text: "Provide in-depth knowledge about local customs, traditions, and history to enrich the travel experience. They are also well-versed in the intricacies of travel.",
    img: "https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-female-auditor-avatar-png-image_12228958.png",
  },
  {
    id: 3,
    name: "Aamin Pathan",
    text: "Leading groups of tourists to various attractions, providing information and interesting facts about the sites. They are also well-versed in the intricacies of travel.",
    img: "https://static.vecteezy.com/system/resources/previews/027/951/130/non_2x/africa-guy-3d-avatar-character-illustrations-png.png",
  },
  {
    id: 4,
    name: "Khalida Khan",
    text: "A Sales Manager is responsible for leading and guiding a team of salespeople in an organization. They set sales goals & quotas, build a sales plan, analyze data, assign sales territories, and mentor the members of their sales team.",
    img: "https://static.vecteezy.com/system/resources/previews/034/488/025/original/3d-cute-cartoon-woman-character-cartoon-businesswoman-wearing-red-suit-on-transparent-background-png.png",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-xl md:text-4xl font-bold font-cursive text-[#D43D1D] mb-4"
          >
            Team Members
          </h1>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 hover:scale-110 transition-all"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
