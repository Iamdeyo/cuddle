import {
  HeartIcon,
  InfoIcon,
  LocationIcon,
  StopWatchIcon,
  UsersIcon,
} from "@/utils/svgs";
import Image from "next/image";

const Property = () => {
  const precent = 45;
  return (
    <div className="card-shadow group bg-white aspect-[363/432] rounded-[20px] flex flex-col transition-all ease-in-out duration-300 xs:max-h-[432px] xs:w-full md:max-h-none hover:scale-105">
      <div className="rounded-[20px] relative w-full h-[62%] flex-none bg-yellow-950 overflow-hidden">
        <Image
          src="/properties-2.jpg"
          width={280.39}
          height={262}
          alt="properties-image"
          sizes="100vh"
          className="group-hover:scale-125 transition-all ease-in-out duration-300"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute left-0 top-0 w-full h-full card-img-cover"></div>
        <div className="capitalize absolute left-6 top-6 bg-white text-primary px-2 py-0.5 rounded-[7px] text-sm ">
          rental
        </div>
        <div className="absolute left-0 px-6 bottom-6 flex justify-between items-center text-white w-full">
          <span className="font-bold text-xl">Sold out</span>
          <span>
            <HeartIcon />
          </span>
        </div>
      </div>
      <div className="p-6 text-[#3c3c3c] h-[38%] flex justify-between">
        <div className="flex flex-col h-full">
          <p className="font-semibold text-[0.9375rem] md:text-base text-[#292D32]">
            Cuddle UK living
          </p>
          <p className="text-[0.6875rem] md:text-xs flex gap-1 items-center">
            <span>
              <LocationIcon />
            </span>
            Manchester, England
          </p>
          <p className="flex gap-0.5 items-center mt-auto">
            <span className="text-sm font-medium">Total Raise:</span>
            <span className="font-semibold text-lg">340</span>
            <Image src="/coin.svg" width={15} height={14} alt="coin-image" />
          </p>
          <p className="text-[0.375rem]">
            23% raised to total rasise <InfoIcon className="inline" />
          </p>

          <div className="w-full mt-1 bg-[#D9D9D9] rounded-full h-[12px] text-white text-[5px]">
            <div
              className="bg-primary h-full rounded-full flex items-center justify-end pr-2"
              style={{ width: precent + "%" }}
            >
              <span>{precent + "%"}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2">
            <StopWatchIcon />
            <div className="">
              <p className="text-xs font-semibold leading-none">
                60 <span className="text-[0.4375rem]">days</span>
              </p>
              <p className="text-[0.375rem]">Left to invest</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <UsersIcon />
            <div className="">
              <p className="text-xs font-semibold leading-none">200</p>
              <p className="text-[0.375rem]">Investors</p>
            </div>
          </div>
          <button className="bg-primary font-semibold w-[4.9375rem] h-7 text-[0.625rem] rounded-[0.4375rem] text-white mt-auto">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
