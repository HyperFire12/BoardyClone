const bannerCSS =
  "flex justify-center text-white z-[5] backdrop-blur-[32px] bg-[#0000001a] bg-gradient-to-r from-[#ffffff1a] to-[#ffffff1a] border border-solid border-[#fff3] shadow-[inset_0_0_16px_#ffffff1a] py-[12px]";

const Banner = () => {
  return (
    <div className={bannerCSS}>
      <p>The First 10,000 People in My Network Get Lifetime Access For Free</p>
    </div>
  );
};

export default Banner;
