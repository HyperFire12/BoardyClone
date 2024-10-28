import Hero from "./components/HomeHero/Hero";
import Banner from "./components/HomeHero/Banner";
import HomeHolder from "./components/HomeHero/HomeHolder";
import HomeVideo from "./components/Video/Video";

const page = () => {
  return (
    <div className="bg-[#060C14]">
      <div>
        <Banner />
        <HomeHolder />
        <Hero />
      </div>
      <div>
        <HomeVideo />
      </div>
    </div>
  );
};
export default page;
