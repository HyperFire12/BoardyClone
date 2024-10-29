const videoCSS = "flex flex-row justify-center text-white";
const description = "flex flex-col items-start w-[615px] ";

const Video = () => {
  return (
    <div className={videoCSS}>
      <div className="relative cursor-pointer">
        <iframe
          className="w-full h-full"
          src={
            "https://player.vimeo.com/video/1022562284?autoplay=1&loop=1&muted=1&controls=1"
          }
          style={{ aspectRatio: "16/9" }}
          allowFullScreen
        />
      </div>
      <div className={description}>
        <h1 className=" text-[60px] font-extrabold leading-[72px] tracking-[-0.04em] mb-7">
          I just had the most mind-blowing phone call 🤯...{" "}
          <span className="text-[#DF054A]">with an AI.</span>
        </h1>
        <h2 className="text-[20px] mb-7">
          As someone who's heard every pitch, I didn't think much could surprise
          me anymore, but today I got on the phone with Boardy and it was
          incredible.
        </h2>
        <h2 className="text-[20px] ">Michele Romanow</h2>
        <p className="text-[14px] text-[#fff9]">
          Serial Entrepreneur, Dragon on Dragon's Den.
        </p>
      </div>
    </div>
  );
};

export default Video;
