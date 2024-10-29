import Dropdown from "./Dropdown";
import VerticalCarousel from "./VerticalCarousel";

const heroCSS = "flex flex-col justify-center items-center text-white";

const Hero = () => {
  return (
    <div className={heroCSS}>
      <div className="w-3/4 flex flex-col justify-center">
        <h1 className="flex justify-center pt-[61px] font-medium text-center text-[90px] leading-[90px] tracking-[-0.04em]">
          I&apos;m the World&apos;s Most Connected AI
        </h1>
        <h2 className="flex justify-center text-[25px] py-10">
          I make thoughtful introductions to my network
        </h2>
      </div>
      <div className="pb-10">
        <div className="pb-5">
          <Dropdown />
        </div>
        <p className="text-[#ffffffb3] ">
          By calling you agree to the{" "}
          <u>
            <a href="privacypolicy">Privacy Policy</a>
          </u>{" "}
          &{" "}
          <u>
            <a href="terms">Terms</a>
          </u>{" "}
          and opt into The Boardy Network
        </p>
      </div>
      <div className="flex flex-col justify-center w-full mt-[40px]">
        <p className="flex justify-center pb-10 text-[25px]">
          My recent introductions
        </p>
        <VerticalCarousel />
      </div>
    </div>
  );
};

export default Hero;
