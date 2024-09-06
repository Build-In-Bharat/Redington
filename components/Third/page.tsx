"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogForm } from "../DialogForm";

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
            <span>
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
          <div className="w-1/2 md:w-fit">
            <Image
              src="/Third_comp.svg"
              alt="Windows 11 Pro laptop"
              className="w-full md:w-[30vw]  "
              width={300}
              height={150}
            />
          </div>

          <div className="w-1/2 md:w-fit md:mt-8 sm:px-6 lg:px-8 md:max-w-3xl md:mx-auto">
            <div className="w-full flex items-center">
              <Image
                src="/copilot.svg"
                alt="Copilot logo"
                className="mr-4 h-[100%] w-5"
                width={40}
                height={35}
              />
              <span className="text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold">Copilot + PC</span>
            </div>

            <div className="w-full pr-1">
              <h2 className="w-full text-lg sm:text-4xl md:text-5xl my-1 sm:my-6 md:my-8 font-bold">A new AI era at work</h2>
              <p className="w-full text-xs sm:text-base md:text-lg mb-4 leading-relaxed">
                Introducing the world's fastest, most intelligent
                Windows PCs ever. Accelerate innovation, solve
                problems faster, and drive transformative business
                impact with Copilot+ PCs.
              </p>
              <DialogForm
                isDialogOpen={isDialogOpen}
                toggleDialog={toggleDialog}
                buttonText="Download e-book"
                dialogTitle="Download e-book"
                buttonClassNames="hidden md:block px-3 py-1 mt-4 sm:mt-6 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
