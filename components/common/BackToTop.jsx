import React, { useEffect, useState } from "react";
import { BackTopIcon } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 200 ? (
        <div
          className="back-to-top border-white	 fixed bottom-[3%] flex border-2 justify-center items-center cursor-pointer w-10 lg:w-14 h-10
           lg:h-14 text-white z-50 rounded-full bg-[#3D4F3B]  right-[1%] "
          onClick={() => scrollToTop()}
        >
          <BackTopIcon />
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BackToTop;
