"use client";

const bannerCSS = "flex justify-start ";
const clickable = "cursor-pointer ";
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
        <img
          className={clickable}
          src="https://cdn.prod.website-files.com/67190baa260e061369ada0e1/67190baa260e061369ada111_image%2012513770.avif"
        />
      </a>
    </div>
  );
};

export default Banner;