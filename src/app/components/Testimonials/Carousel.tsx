"use client";

import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import images from "../../assets/testimonials.json";

// Extended images array with duplicates for seamless looping
const extendedImages = [
  images[images.length - 1], // Clone last image at the start
  ...images,
  ...images, // Clone first image at the end
];

const Carousel = () => {
  const [index, setIndex] = useState(1); // Start from the first image in the extended array
  const [isTransitioning, setIsTransitioning] = useState(true);

  const props = useSpring({
    transform: `translateX(-${index * 20}%)`, // Adjust based on number of items shown
    config: config.gentle,
    immediate: !isTransitioning, // Instantly apply transform when resetting
    onRest: () => {
      // Reset index to avoid displaying only one image after reaching end
      if (index === 0) {
        setIsTransitioning(false);
        setIndex(images.length);
      } else if (index === images.length + 1) {
        setIsTransitioning(false);
        setIndex(1);
      }
    },
  });

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transition after reset
      setTimeout(() => setIsTransitioning(true), 50);
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="carousel-container overflow-hidden w-full">
      <animated.div
        className="carousel flex"
        style={{
          transform: props.transform,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {extendedImages.map((image, i) => (
          <div key={i} className="carousel-item min-w-[20%] px-[10px] relative">
            <img
              src={image.image_url}
              alt={`Carousel item ${i + 1}`}
              className="w-full h-auto object-cover aspect-[3/4] rounded-[8px]"
            />
            <div className="ml-2 w-3/4 nameplate absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-20 text-white px-2 py-1 rounded text-[0.9rem]">
              <p className="text-[24px]">{image.name}</p>
              <p className="text-[14px]">{image.position}</p>
            </div>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Carousel;
