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
    <div className="bg-[#010b1a] relative w-full h-screen flex justify-center items-center overflow-hidden container mx-auto min-w-full">
      <div className="flex flex-row justify-between items-center z-10 text-white p-6 w-full max-w-7xl">
        <div className="text-left max-w-2xl">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-4 leading-loose">
            Work <span className="font-bold">smart</span>
            <br />
            Work <span className="font-bold">secure</span>
            <br />
            Work <span className="font-bold">fast</span>
            <br />
            Work
            <span className="text-purple-600 font-bold text-7xl xl:text-8xl ml-3">
              Magic
            </span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl mb-6">
            Leverage Windows 11 Pro devices + Microsoft 365,
            <br /> the perfect pair for a secure, AI-powered cloud solution.
          </p>
          <DialogForm
            isDialogOpen={isDialogOpen}
            toggleDialog={toggleDialog}
            buttonText="Download Guide"
            dialogTitle="Download Guide"
          />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2">
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
