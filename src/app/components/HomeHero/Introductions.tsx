"use client";

import React, { useState, useEffect } from "react";
import data from "../../assets/introductions.json";
import ItemHolder from "./ItemHolder";

const introductionsCSS = "flex justify-center overflow-hidden w-full h-28";

const Introductions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 300000); // Adjust delay time here

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (currentIndex + 1) % data.length;

  return (
    <div className={introductionsCSS}>
      <div className="animate-scroll-up space-y-4">
        {data.map((item) => (
          <div key={item.id}>
            <ItemHolder time={item.time} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introductions;
