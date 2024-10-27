import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#282833] px-4 sm:px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="w-full lg:w-[30vw]">
        <Image
          src={"/new-ui/third.png"}
          width={582}
          height={556}
          alt=""
          className="w-full lg:w-[30vw]"
        />
      </div>
      <div className="w-full lg:w-[50vw] mt-4 lg:mt-8">
        <div className="text-[#60CDFF] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[47px] font-semibold">
          Make the move to supercharged efficiency now
        </div>
        <div className="text-lg sm:text-xl lg:text-2xl leading-normal lg:leading-lg text-white mt-4 lg:mt-5 text-justify">
          You can&apos;t save time with outdated devices. New Windows 11 Pro PCs can
          enhance every workstyle with business AI and features to get organized
          in a snap, speeding workflows 50% faster on average.<sup className="text-xs lg:text-sm">2</sup>
        </div>
      </div>
    </div>
  );
};

export default page;
