import Image from "next/image";

const itemHolderCSS =
  "flex justify-center text-white z-[1] backdrop-blur-[32px] bg-[#0000001a] bg-gradient-to-r from-[#ffffff1a] to-[#ffffff1a] border border-solid border-[#fff3] rounded-3xl shadow-[inset_0_0_16px_#ffffff1a] ";
const textboxCSS =
  "flex flex-row justify-center px-4 py-2 bg-black rounded-full ";

interface ItemHolderProps {
  time: string;
  content: string;
}

const ItemHolder: React.FC<ItemHolderProps> = ({ time, content }) => {
  return (
    <div className={itemHolderCSS + textboxCSS}>
      <Image
        className="m-1"
        src="https://cdn.prod.website-files.com/67190baa260e061369ada0e1/67190baa260e061369ada119_sms.svg"
        loading="eager"
        alt=""
      />
      <p className="m-1 mx-2"> {time} </p>
      <Image
        className="m-1"
        src="https://cdn.prod.website-files.com/67190baa260e061369ada0e1/67190baa260e061369ada10d_Line%2035.svg"
        loading="eager"
        alt="vertical grey line separator"
      />
      <p className="m-1 mx-2"> {content} </p>
    </div>
  );
};

export default ItemHolder;
