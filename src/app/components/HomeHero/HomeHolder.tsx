"use client";

const bannerCSS = "flex justify-start p-[14px] mx-[40px] max-h-[120px]";
const clickable = "cursor-pointer max-w-[120px] h-auto";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <div className={bannerCSS}>
      <a
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          className={clickable}
          src="https://cdn.prod.website-files.com/67190baa260e061369ada0e1/67190baa260e061369ada111_image%2012513770.avif"
          alt="Boardy"
          width={120}
          height={82}
        />
      </a>
    </div>
  );
};

export default Banner;
