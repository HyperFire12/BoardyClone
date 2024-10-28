"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";

const heroCSS = "flex flex-col justify-center items-center text-white";

const Hero = () => {
  return (
    <div className={heroCSS}>
      <div>
        <h1>I'm the World's Most Connected AI</h1>
        <p>I make thoughtful introductions to my network</p>
      </div>
      <div>
        <div>
          <Dropdown />
        </div>
        <p className="text-[#ffffffb3] ">
          By calling you agree to the{" "}
          <u>
            <a href="www.youtube.com">Privacy Policy</a>
          </u>{" "}
          &{" "}
          <u>
            <a href="www.youtube.com">Terms</a>
          </u>{" "}
          and opt into The Boardy Network
        </p>
      </div>
      <div>
        <p>My recent introductions</p>
      </div>
    </div>
  );
};

export default Hero;
