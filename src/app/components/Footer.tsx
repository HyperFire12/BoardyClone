import Image from "next/image";

const footerCSS =
  "flex justify-start w-3/4 items-center p-[14px] mx-[40px] pb-[20px] max-h-[120px] text-white";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className={footerCSS}>
        <Image
          src="https://cdn.prod.website-files.com/67190baa260e061369ada0e1/671927d3acddbca59e106841_Logo%20(4).svg"
          alt="Boardy.ai"
          height={54}
          width={131}
        />
        <div className="grow"></div>
        <p className="text-[18px]">2024</p>
      </div>
    </div>
  );
};

export default Footer;
