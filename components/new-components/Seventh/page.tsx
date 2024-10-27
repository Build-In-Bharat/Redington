import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#60CDFF] px-4 sm:px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="w-full lg:w-[45vw] text-base sm:text-lg lg:text-xl text-white py-3 lg:py-5">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Stay up-to-date and protected against evolving threats
        </div>
        <div className="font-semibold mt-3 lg:mt-5">
          Shield your business now with the latest security updates and layers
          of powerful hardware-backed protection enabled by default, for a
          reported 62% drop in security incidents.<sup className="text-xs lg:text-sm">3</sup>
        </div>
      </div>
      <Image src={"/new-ui/seventh.png"} height={556} width={582} alt="" className="w-full lg:w-[30vw] lg:ml-12" />
    </div>
  );
};

export default page;
