import Hero from "./components/HomeHero/Hero";
import Banner from "./components/HomeHero/Banner";
import HomeHolder from "./components/HomeHero/HomeHolder";
import HomeVideo from "./components/Video/Video";

const page = () => {
  return (
    <div className="bg-[#060C14]">
      <div className="mb-20">
        <Banner />
        <HomeHolder />
        <Hero />
      </div>
      <div className="my-20">
        <HomeVideo />
      </div>
    </div>
  );
};
export default page;
