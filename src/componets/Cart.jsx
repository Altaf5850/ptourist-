import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    id: 0,
    title: "Sheikh Zayed Grand",
    description:
      "The Sheikh Zayed Grand Mosque in Abu Dhabi, UAE, is an architectural marvel known for its stunning white domes, intricate floral designs, and expansive courtyard. It is one of the world's largest mosques and a symbol of peace and tolerance.",
    Image:
      "https://media1.thrillophilia.com/filestore/hkbwiyvwpkazmpnq8m1gtskf64zu_1482737849_Abu-Dhabi-Grand-Mosque.jpg?w=400&dpr=2",
  },
  {
    id: 1,
    title: "Taj Mahal",
    description:
      "The Taj Mahal, built in Agra by Mughal Emperor Shah Jahan in 1653 in memory of his wife Mumtaz Mahal, is a UNESCO World Heritage Site renowned for its stunning white marble architecture and symbol of eternal love.",
    Image: "https://www.tajmahal.gov.in/images/nightview.jpg",
  },
  {
    id: 2,
    title: "Burj Khalifa",
    description:
      "The tallest building in the world, the Burj Khalifa stands at 828 meters and offers breathtaking views of Dubai from its observation decks.",
    Image:
      "https://ik.imagekit.io/yvq8w2ssq/burj-khalifa-tickets-price-1_PgSwqmmdg.jpg",
  },
  {
    id: 3,
    title: "Eiffel Tower",
    description:
      "An iconic symbol of France, the Eiffel Tower offers panoramic views of Paris from its observation decks.",
    Image:
      "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
  },
  {
    id: 4,
    title: "Rome",
    description:
      "Rome, Italy, known as the 'Eternal City,' is the capital and largest city of Italy, renowned for its rich history, ancient architecture, and vibrant culture.",
    Image: "https://media.nomadicmatt.com/2022/romethings.jpeg",
  },
  {
    id: 5,
    title: "Machu Picchu",
    description:
      "Machu Picchu - An ancient Incan city set high in the Andes Mountains of Peru, renowned for its sophisticated dry-stone construction and panoramic views.",
    Image:
      "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fuploads.exoticca.com%2Fglobal%2Fdestination%2Fpoi%2Fmachu-picchu.png&w=3840&q=75",
  },
  {
    id: 6,
    title: "Great Wall of China",
    description:
      "The Great Wall of China is a series of fortifications made of various materials, built along the northern borders of China to protect against invasions.",
    Image:
      "https://media.istockphoto.com/id/506393198/photo/great-wall-of-china.jpg?s=612x612&w=0&k=20&c=cJti-RrdUUkLX_zgzi6KgPbgApHoxJtMJSvlRUYqOzg=",
  },
  {
    id: 7,
    title: "Petra",
    description:
      "Petra, an ancient city in Jordan, is renowned for its rock-cut architecture and water conduit system, famously referred to as the 'Rose City' due to the color of the stone from which it is carved.",
    Image:
      "https://velvetescape.com/wp-content/uploads/2011/11/IMG_1953-1280x920.jpg",
  },
];

function Cart() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollDirection(currentScrollPos > window.scrollY ? "up" : "down");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1
        className="text-center text-[#D43D1D] font-bold font-merienda text-3xl"
        data-aos={scrollDirection === "down" ? "fade-up-right" : "fade-up-left"}
      >
        History of world travel
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-5 p-6">
        {locations.map(({ id, title, description, Image }) => (
          <div
            key={id}
            className="text-center"
            data-aos={scrollDirection === "down" ? "fade-right" : "fade-left"}
          >
            <h3
              className="text-2xl font-bold mb-2 "
              data-aos="fade-down"
            >
              {title}
            </h3>
            <img
              src={Image}
              alt={title}
              className="w-full h-48 object-cover rounded-md"
              data-aos="zoom-in"
            />
            <p
              className="text-sm text-black mb-2 p-3"
              data-aos="fade-down"
            >
              {description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Cart;
