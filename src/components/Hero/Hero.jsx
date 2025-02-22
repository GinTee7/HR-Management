import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bg from "@assets/hero.png";
import Bg2 from "@assets/hero2.png";
import Bg3 from "@assets/hero3.png";

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [Bg, Bg2, Bg3];

  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const translateX = useRef(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const prevSlide = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    translateX.current = 0;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    translateX.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    setOffsetX(diff);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    setOffsetX(diff);
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (offsetX > 50) {
      prevSlide();
    } else if (offsetX < -50) {
      nextSlide();
    }
    setOffsetX(0);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentBgIndex * 100}% + ${offsetX}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>

      <button
        className="absolute p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-4 top-1/2"
        onClick={prevSlide}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute p-3 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-4 top-1/2"
        onClick={nextSlide}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Hero;
