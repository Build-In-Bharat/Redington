"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DialogForm } from "../DialogForm";

const Fifth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="bg-[#010b1a] relative w-full md:min-h-screen flex justify-center items-center overflow-hidden container mx-auto min-w-full px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-row justify-between items-center z-10 text-white w-full max-w-7xl">
        <div className="text-left max-w-2xl mb-8 lg:mb-0 lg:w-1/2">
          <span className="flex">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 flex flex-col gap-1 md:gap-5 w-1/2">
              <div className="flex gap-3">Work <span className="font-bold">smart</span></div>
              <div className="flex gap-3">Work <span className="font-bold">secure</span></div>
              <div className="flex gap-3">Work <span className="font-bold">fast</span></div>
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                Work
                <span className="text-purple-600 font-bold ml-2 md:ml-3">
                  Magic
                </span>
              </div>
            </h2>
        <div className="md:hidden w-1/2 justify-center items-center">
          <img
            src="/fifth_comp.svg"
            alt="WorkMagic"
            className="w-72 h-auto object-contain"
          />
        </div>
          </span>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 mt-6 md:mt-8">
            Leverage Windows 11 Pro devices + Microsoft 365,
            <br className="hidden md:block" /> the perfect pair for a secure, AI-powered cloud solution.
          </p>
          <DialogForm
            isDialogOpen={isDialogOpen}
            toggleDialog={toggleDialog}
            buttonText="Download Guide"
            dialogTitle="Download Guide"
            buttonClassNames="py-4 px-4 md:py-5 md:px-5 lg:py-7 lg:px-6"
          />
        </div>
        <div className="hidden w-full lg:w-1/2 md:flex justify-center items-center">
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
