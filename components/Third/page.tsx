"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogForm } from "../EarlyAccess";

const Third: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
      <div className="bg-[#010b1a] text-white pt-10 md:pt-14 font-sans container mx-auto min-w-full">
        <div className="max-w-screen md:mx-auto flex flex-col">
          <div className="mb-8 w-70 text-justify px-3 md:px-24 pb-5 md:pb-10 ">
            <div className="text-[#50aed8] font-bold text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4 flex flex-col gap-1 md:gap-3">
              <span className="leading-tight">
                "We&apos;re able to do a lot of things much faster, much more
                efficiently. Windows 11 Pro made my whole team very effective."
              </span>{" "}
              <span className="ml-4">
      
              </span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg md:text-xl lg:text-2xl">
                Jeyalakshmi Venkatanarayanan
              </div>
              <div className="text-base md:text-lg lg:text-xl"> Founder, Universe Power</div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#010b1a] to-[#06183E] flex md:gap-x-12 items-center">
            <div className="w-0 h-full md:w-fit">
              <Image
                src="/Third_comp.svg"
                alt="Windows 11 Pro laptop"
                className="hidden md:block w-0 h-[100%] md:w-[30vw]  "
                width={300}
                height={250}
              />
            </div>
            <div className="w-full md:w-fit md:mt-8 px-12 text-center md:text-left sm:px-6 lg:px-8 md:max-w-3xl md:mx-auto">
              <div className="w-full flex items-center justify-center md:justify-start">
                <Image
                  src="/copilot.svg"
                  alt="Copilot logo"
                  className="mr-4 h-[100%] w-5 "
                  width={40}
                  height={35}
                />
                <span className="text-[16px] sm:text-lg md:text-xl lg:text-2xl font-bold md:font-semibold">Copilot + PC</span>
              </div>
              <div className="w-full pr-1">
                <h2 className="w-full text-[16px] sm:text-4xl md:text-5xl my-1 sm:my-6 md:my-8 md:font-bold">A new AI era at work</h2>
                <p className="w-full text-[12px] sm:text-base md:text-lg mb-4 leading-relaxed">
                  Introducing the world's fastest, most intelligent
                  Windows PCs ever. Accelerate innovation, solve
                  problems faster, and drive transformative business
                  impact with Copilot+ PCs.
                </p>
                <DialogForm
                  isDialogOpen={isDialogOpen}
                  toggleDialog={toggleDialog}
                  buttonText="Get Early Access"
                  dialogTitle="Get Early Access"
                  buttonClassNames="mx-auto md:mx-0 block mb-8 px-[32px] py-[3px] font-bold md:px-3 md:py-1 mt-4 sm:mt-6 w-fit text-[14px] sm:text-lg sm:w-auto"
                  section="AI-section"
                />
              </div>
            </div>
          </div>
          {/* <div>
          <DialogForm
                  isDialogOpen={isDialogOpen}
                  toggleDialog={toggleDialog}
                  buttonText="Get Early Access"
                  dialogTitle="Get Early Access"
                  buttonClassNames="mb-2 px-[32px] py-[3px] font-bold md:px-3 md:py-1 mt-4 sm:mt-6 w-fit text-[14px] sm:text-lg sm:w-auto"
                />
          </div> */}
        </div>
      </div>
      
      
    

  );
};

export default Third;
