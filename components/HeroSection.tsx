"use client";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import { DialogForm } from "./DialogForm";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div id="#windows-10" className="relative w-full h-[120vh] flex flex-col justify-center overflow-hidden m-0 p-0 bg-black">
      <Image
        src="/hero_bg.png"
        alt="Background with Laptop"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0 hidden md:block"
      />
      <Image
        src="/hero_bg_mobile.png"
        alt="Background with Laptop"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0 md:hidden"
      />
      <div className="absolute top-0 left-0 w-full z-10 h-24">
        <Navbar />
      </div>
      <div className="absolute md:inset-10 z-10 mt-8 md:mt-28">
      <Image src={"/laptop.png"} alt="laptop" width={1000} height={1000} className="md:hidden w-[90vw] mx-auto my-5" />
        <div className=" flex items-center">
          <div className="text-white p-6 max-w-2xl text-justify">
            {/* <h2 className=" md:hidden text-xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-6 text-[#4fe6ff]">
              Support for Windows 10 ends soon in October 25.
            </h2> */}
            <h2 className="flex text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-[#4fe6ff] flex-col md:gap-2">
              <div>Support for</div> <div>Windows 10 ends</div><div> soon in October 25.</div>
            </h2>
            <p className="text-sm md:text-xl lg:text-2xl mb-6 max-w-xl leading-[25px] md:leading-[40px]">
              Support for Windows 10 is ending soon in October 2025 and devices
              will no longer get security and feature updates. Older devices can
              be less secure so delaying upgrades could be costly to your
              business. Ensure your organization stays protected and productive
              with all the latest security and feature updates with Windows 11
              Pro, including Copilot your personal AI assistant.
            </p>
            <div className="md:mt-12 flex md:block">
              <DialogForm
                isDialogOpen={isDialogOpen}
                toggleDialog={toggleDialog}
                buttonText="Contact Us"
                dialogTitle="Contact Us"
                buttonClassNames="px-6 py-6 mx-auto md:mx-0"
                section="contact-us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
