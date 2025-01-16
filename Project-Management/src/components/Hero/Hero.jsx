import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bg from "../../assets/hero.png";
import Bg2 from "../../assets/hero2.png";
import Bg3 from "../../assets/hero3.png";

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [Bg, Bg2, Bg3];

  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const threshold = 50; // Số pixel để xác định kéo thành công

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const bgImage = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const handleNext = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const handlePrev = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > threshold) {
      isDragging.current = false;
      diff > 0 ? handlePrev() : handleNext();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > threshold) {
      isDragging.current = false;
      diff > 0 ? handlePrev() : handleNext();
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="min-h-[700px] bg-gray-100 relative"
      style={bgImage}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-4 top-1/2"
        onClick={handlePrev}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-4 top-1/2"
        onClick={handleNext}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Hero;
