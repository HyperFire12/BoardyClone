import Hero from "./components/HomeHero/Hero";
import Banner from "./components/HomeHero/Banner";
import HomeHolder from "./components/HomeHero/HomeHolder";
import HomeVideo from "./components/Video/Video";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";

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
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default page;
