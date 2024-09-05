"use client";

import ArrowForwardIcon from "@/icons/arrow-forward";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

interface SliderProps {
  slides: ReactNode[] | ReactElement[];
}

const Slider = ({ slides }: SliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return slides.length - 1;
      }
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === slides.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  useEffect(() => {
    const remove = setTimeout(() => {
      setImageIndex((index) => {
        if (index === slides.length - 1) {
          return 0;
        }
        return index + 1;
      });
    }, 5000);
    return () => clearTimeout(remove);
  }, [imageIndex, setImageIndex, slides]);
  return (
    <section
      aria-label="Slider Label"
      className="w-[100%] flex flex-col gap-5 items-center"
    >
      <div className="w-[100%] flex overflow-hidden rounded-[21px]">
        {slides.map((node, index) => (
          <div
            key={index}
            className="slider-node"
            style={{ translate: `${-100 * imageIndex}%` }}
          >
            {node}
          </div>
        ))}
      </div>

      <div className="flex gap-5 items-center">
        <button
          disabled={imageIndex === 0}
          onClick={showPrevImage}
          className="disabled:opacity-20 rotate-180 w-[50px] h-[50px] rounded-full bg-transparent text-[#292D32] border-[1px] border-[#DAE0E6] flex items-center justify-center"
        >
          <ArrowForwardIcon />
        </button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className="w-[7.777px] h-[7.777px] text-[#D9D9D9] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
              >
                <circle
                  cx="4.64931"
                  cy="3.92373"
                  r="3.88857"
                  fill="currentColor"
                />
              </svg>
            </button>
          ))}
        </div>

        <button
          disabled={imageIndex === slides.length - 1}
          onClick={showNextImage}
          className="disabled:opacity-20 w-[50px] h-[50px] rounded-full bg-transparent text-[#292D32] border-[1px] border-[#DAE0E6] flex items-center justify-center"
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </section>
  );
};

export default Slider;
