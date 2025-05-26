import { useState, useEffect } from "react";

export default function BtnScrollToUp() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 800) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed text-3xl bottom-3 right-3 sm:bottom-8 sm:right-8 bg-white text-[#99031e] px-3 py-1 rounded-full shadow-md shadow-gray-400 hover:bg-[#99031e] hover:text-white transition-all duration-300 z-50 cursor-pointer"
          aria-label="Torna su"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
