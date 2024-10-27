import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#282833] px-4 sm:px-8 lg:px-24 py-8 pb-44 md:pb-0 lg:py-12 relative">
      <div className="text-white text-2xl sm:text-3xl lg:text-4xl">
        <span className="font-semibold">Check device</span> eligibility for{" "}
        <span className="font-semibold">Windows 11.</span>
      </div>
      <div className="flex flex-row gap-8 sm:gap-12 lg:gap-24 mt-8 lg:mt-12">
        <div className="flex flex-col w-full sm:w-fit gap-5">
          <Image src={"/new-ui/sixth.png"} height={250} width={250} alt="" className="w-full sm:w-auto" />
          <button className="text-white bg-[#0078D4] font-semibold text-sm sm:text-xl px-4 sm:px-5 py-2 sm:py-3">
            Download Guide
          </button>
        </div>
        <div className="flex flex-col w-full sm:w-fit gap-5">
          <Image src={"/new-ui/sixth.png"} height={250} width={250} alt="" className="w-full sm:w-auto" />
          <button className="text-white bg-[#0078D4] font-semibold text-sm sm:text-xl px-4 sm:px-5 py-2 sm:py-3">
            Download Guide
          </button>
        </div>
        <Image 
          src={"/new-ui/sixth-2.png"} 
          height={541} 
          width={700} 
          alt="" 
          className="w-[55vw] md:w-[40vw]  block absolute bottom-0 right-0" 
        />
      </div>
    </div>
  );
};

export default page;
