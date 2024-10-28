"use client";

import { useState } from "react";
const videoCSS = "flex flex-row justify-center text-white";
const description = "flex flex-col items-start ";

const Video = () => {
  const [videoClicked, setVideoClicked] = useState(false);
  const [videoSRC, setVideoSRC] = useState(
    "https://player.vimeo.com/video/1022562284?autoplay=1&loop=0&muted=0&controls=1"
  );

  return (
    <div className={videoCSS}>
      <div
        onClick={() => {
          setVideoClicked(true);
        }}
      >
        {videoClicked ? (
          <iframe
            className=""
            src="https://player.vimeo.com/video/1022562284?autoplay=1&loop=0&muted=0&controls=1"
          />
        ) : (
          <iframe
            className=""
            src="https://player.vimeo.com/video/1022562284?autoplay=1&loop=1&muted=1&controls=0"
          />
        )}
      </div>
      <div className={description}>
        <h1>I just had the most mind-blowing phone call 🤯...with an AI.</h1>
        <h2>
          As someone who's heard every pitch, I didn't think much could surprise
          me anymore, but today I got on the phone with Boardy and it was
          incredible.
        </h2>
        <h2>Michele Romanow</h2>
        <p>Serial Entrepreneur, Dragon on Dragon's Den.</p>
      </div>
    </div>
  );
};

export default Video;
