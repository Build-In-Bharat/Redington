import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#282833] px-4 sm:px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-24">
      <Image
        src={"/new-ui/eighth.png"}
        height={1000}
        width={1000}
        alt=""
        className="w-full lg:w-[35vw]"
      />
      <div className="w-full lg:w-[40vw] mt-4 lg:mt-8">
        <div className="text-[#60CDFF] text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Easy to deploy, compatible with existing tech
        </div>
        <div className="text-white text-base sm:text-lg lg:text-xl mt-3 lg:mt-5">
          Designed to work with your existing technology, Windows 11 Pro enables
          a reported 25% faster deployment,4 automated updates, and granular
          control across apps, data, and AI.
        </div>
        <div className="my-6 lg:my-8 h-[1px] bg-white w-28 lg:w-36"></div>
        <div className="text-[#60CDFF] text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Set the pace with faster performance
        </div>
        <div className="text-white text-base sm:text-lg lg:text-xl mt-3 lg:mt-5">
          Make a bigger impact today with accelerated performance, all day
          battery life⁵ and optional NPU, including Copilot+ PCs6 with more than
          2X NPU TOPS than MacBook Air with M3.<sup className="text-xs lg:text-sm">7</sup>
        </div>
      </div>
    </div>
  );
};

export default page;
