"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { DialogForm } from "../DialogForm"; // Import the new DialogForm component

const Second: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="bg-[#04163b]  text-white py-16 px-6 container mx-auto min-w-full m-0 p-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-24 justify-evenly space-y-16 md:space-y-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/Second_image.svg"
              alt="Guide Image"
              width={350 * 2}
              height={450 * 2}
              className="object-contain"
            />
          </div>
          <div className="w-full text-center md:text-left">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-10 flex flex-col justify-between gap-3">
              <span>Ensure smooth sailing towards</span> <span>Windows 10 end of support!</span>
            </h2>
            <DialogForm
              isDialogOpen={isDialogOpen}
              toggleDialog={toggleDialog}
              buttonText="Download Guide"
              dialogTitle="Download Guide"
              buttonClassNames="px-6 py-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
