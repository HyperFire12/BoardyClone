"use client";

import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import ItemHolder from "./ItemHolder";
import data from "../../assets/introductions.json"; 

// Extended data array for seamless vertical looping
const extendedData = [...data, ...data];

const VerticalCarousel = () => {
  const [index, setIndex] = useState(1); // Start from the first item in the extended array
  const [isTransitioning, setIsTransitioning] = useState(true);

  const props = useSpring({
    transform: `translateY(-${index * 2}%)`, // Move vertically based on index
    config: config.gentle,
    immediate: !isTransitioning,
    onRest: () => {
      if (index === 0) {
        setIsTransitioning(false);
        setIndex(data.length); // Reset to last original item
      } else if (index === data.length + 1) {
        setIsTransitioning(false);
        setIndex(1); // Reset to first original item
      }
    },
  });

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50); // Re-enable transition after reset
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="carousel-container overflow-hidden w-full h-[310px] relative">
      <animated.div
        className="carousel flex flex-col"
        style={{
          transform: props.transform,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {extendedData.map((item, i) => (
          <div
            key={i}
            className="carousel-item min-h-[100%] px-4 py-4 flex items-center justify-center"
          >
            <ItemHolder time={item.time} content={item.content} />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default VerticalCarousel;
