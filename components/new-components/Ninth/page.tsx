import React from "react";
import Link from "@/components/assets/Link";

const page = () => {
  return (
    <div className="bg-[#000014] px-4 sm:px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-24">
      <div className="w-full lg:w-[35vw]">
        <div className="text-2xl sm:text-3xl lg:text-4xl text-[#60CDFF] font-bold mb-6 lg:mb-10">
          Deploy with confidence
        </div>
        <div className="text-lg sm:text-xl text-white font-semibold mb-4 lg:mb-6">
          Next steps to upgrade to modern Windows 11 Pro devices
        </div>
        <div className="text-base sm:text-lg lg:text-xl text-white text-justify">
          Plan for modern Windows 11 Pro devices. Ask your Microsoft
          representative about your organization&apos;s potential cost savings
          and business value for Windows 11 modern devices.
        </div>
      </div>
      <div className="w-full lg:w-[35vw]">
        <div className="h-[1px] w-full bg-white mb-4"></div>
        <div className="text-white text-lg sm:text-xl font-semibold mb-3">
          Plan your upgrade to Windows 11
        </div>
        <div className="flex gap-2 text-[#60CDFF] text-lg sm:text-xl mb-3 cursor-pointer">
          <Link />
          Get more details
        </div>
        <div className="h-[1px] w-full bg-white mb-4"></div>
        <div className="text-white text-lg sm:text-xl font-semibold mb-3">
          Identify devices eligible for upgrade with Microsoft Intune and
          Endpoint analytics
        </div>
        <div className="flex gap-2 text-[#60CDFF] text-lg sm:text-xl mb-3 cursor-pointer">
          <Link />
          Get more details
        </div>
        <div className="h-[1px] w-full bg-white mb-4"></div>
        <div className="text-white text-lg sm:text-xl font-semibold mb-3">
          Prepare a pilot deployment
        </div>
        <div className="flex gap-2 text-[#60CDFF] text-lg sm:text-xl mb-3 cursor-pointer">
          <Link />
          Get more details
        </div>
        <div className="h-[1px] w-full bg-white mb-4"></div>
        <div className="text-white text-lg sm:text-xl font-semibold mb-3">
          Review the latest Total Economic Impact™ of Windows 11 Pro Modern
          Devices Report4
        </div>
        <div className="flex gap-2 text-[#60CDFF] text-lg sm:text-xl mb-3 cursor-pointer">
          <Link />
          Get more details
        </div>
      </div>
    </div>
  );
};

export default page;
