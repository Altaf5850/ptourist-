import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Irfan Shaikh",
    text: "Pathan Tourist made my trip to the Great Wall of China unforgettable. The guides were knowledgeable, and the itinerary was well-planned. Highly recommend!",
    img: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197912.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Our family vacation to Machu Picchu was seamless thanks to Pathan Tourist. From booking to the actual trip, everything was top-notch. We had an amazing experience!",
    img: "https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-avatar-girl-illustration-domineering-png-image_2583937.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    text: "I was blown away by the Taj Mahal tour organized by Pathan Tourist. The staff was friendly, and the local insights provided were invaluable. A truly memorable journey!",
    img: "https://i.pinimg.com/736x/2d/2a/2b/2d2a2ba069f852ecf04c9269416f919b.jpg",
  },
  {
    id: 4,
    name: "Sahil Bhange",
    text: "Christ the Redeemer has always been on my bucket list, and Pathan Tourist made it happen perfectly. The arrangements were smooth, and the views were breathtaking. Fantastic service!",
    img: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-avatar-of-a-brunette-man-png-image_10214156.png",
  },
  {
    id: 5,
    name: "Priya Mishra",
    text: "Exploring the Colosseum with Pathan Tourist was a dream come true. The historical context provided by the guides added so much value to the trip. Highly efficient and enjoyable!",
    img: "https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-cute-girl-wearing-hat-avatar-in-purple-tone-png-image_5779314.jpg",
  },
  {
    id: 6,
    name: "Ram Kadesa",
    text: "Petra was an incredible experience, all thanks to Pathan Tourist. The tour was well-organized, and the accommodations were excellent. Couldn't have asked for a better trip!",
    img: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png",
  },
  {
    id: 7,
    name: "Tofik Savare",
    text: "My visit to Chichen Itza was flawless with Pathan Tourist. The guides were professional, and the logistics were handled superbly. A wonderful travel experience!",
    img: "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-3d-employee-video-chat-png-image_10199491.png",
  },
];

function Customer() {
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
            Our Customer Reviews
          </h1>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
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
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                  <div className="rating justify-end">
                    <input
                      type="radio"
                      name={`rating-${data.id}`}
                      className="mask mask-star"
                      readOnly
                    />
                    <input
                      type="radio"
                      name={`rating-${data.id}`}
                      className="mask mask-star"
                      readOnly
                    />
                    <input
                      type="radio"
                      name={`rating-${data.id}`}
                      className="mask mask-star"
                      readOnly
                    />
                    <input
                      type="radio"
                      name={`rating-${data.id}`}
                      className="mask mask-star"
                      readOnly
                    />
                    <input
                      type="radio"
                      name={`rating-${data.id}`}
                      className="mask mask-star"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Customer;
