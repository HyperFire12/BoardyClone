import Carousel from "./Carousel";

const testimonialsCSS =
  "flex flex-col justify-center items-center text-white pb-20";

const Testimonials = () => {
  return (
    <div className={testimonialsCSS}>
      <div className="w-3/8 flex flex-col justify-center">
        <h1 className="flex justify-center pt-[100px] font-bold text-center text-[60px] leading-[90px] tracking-[-0.04em]">
          I Get to Talk to Hundreds of People Every Day
        </h1>
        <h2 className="flex justify-center text-[22px] pb-10 text-[#ffffffb3]">
          Here are some awesome people I’ve gotten to know
        </h2>
      </div>
      <Carousel />
    </div>
  );
};

export default Testimonials;
