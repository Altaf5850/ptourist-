import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Blogss from "../componets/Blogss";

function Blogs() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto mb-8 relative">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center relative">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-lifestyle-blog-header-template-design-04d340a089023f7282c5af095efa4126_screen.jpg?ts=1598624672"
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>

      <Blogss />
    </div>
  );
}

export default Blogs;
