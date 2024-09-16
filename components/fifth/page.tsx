"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DialogForm } from "../EarlyAccess";

const Fifth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div id="work-magic" className="bg-[#010b1a] relative w-full md:min-h-screen flex justify-center items-center overflow-hidden container mx-auto min-w-full pl-4 py-8 md:pl-6 lg:pl-8">
      <div className="flex flex-row justify-between items-center z-10 text-white w-full ">
        <div className="text-left w-full mb-8 lg:mb-0 lg:w-1/2">
          <span className="flex relative">
            <h2 className="text-[22px] md:text-4xl lg:text-5xl xl:text-6xl mb-4 flex flex-col md:gap-5 w-1/2">
              <div className="flex gap-3">Work <span className="font-bold">smart</span></div>
              <div className="flex gap-3">Work <span className="font-bold">secure</span></div>
              <div className="flex gap-3">Work <span className="font-bold">fast</span></div>
              <div className="text-[35px] md:text-6xl lg:text-7xl xl:text-8xl">
                Work
                <span className="text-purple-600 font-bold ml-2 md:ml-3">
                  Magic
                </span>
              </div>
            </h2>
            <div className="md:hidden absolute  top-5 right-3 w-1/2 justify-center items-center">
              <img
                src="/fifth_comp.svg"
                alt="WorkMagic"
                className="min-w-56 h-auto "
              />
            </div>
          </span>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 mt-12 text-center md:text-left md:mt-8">
            Leverage Windows 11 Pro devices + Microsoft 365,
            <br className="hidden md:block" /> the perfect pair for a secure, AI-powered cloud solution.
          </p>
          <div className="flex">
            <DialogForm
              isDialogOpen={isDialogOpen}
              toggleDialog={toggleDialog}
              buttonText="Get Early Access"
              dialogTitle="Get Early Access"
              buttonClassNames="py-4 px-4 md:py-5 md:px-5 lg:py-7 lg:px-6 mx-auto md:mx-0"
              section="work-magic-section"
            />
          </div>
        </div>
        <div className="hidden w-1/2 lg:w-1/2 md:flex justify-center items-center">
          <img
            src="/fifth_comp.svg"
            alt="WorkMagic"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Fifth;