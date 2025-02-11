import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopToScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-10 right-10 cursor-pointer rounded-full bg-[#3abff8]  p-2 text-white shadow-lg  sm:p-3"
        onClick={scrollToTop}
      >
        <FaArrowUp size={24} />
      </div>
    )
  );
};

export default TopToScroll;
