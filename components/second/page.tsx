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
    <div className="bg-[#04163b]  text-white py-8 md:py-16 px-2 md:px-6 container mx-auto min-w-full m-0 p-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-24 justify-evenly space-y-1 md:space-y-2 ">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/Second_image.svg"
              alt="Guide Image"
              width={350 * 2}
              height={450 * 2}
              className="object-contain w-72"
            />
          </div>
          <div className="w-full text-center md:text-left">
            <h2 className="mx-auto text-[20px] leading-[24px] md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 md:mb-10 flex flex-wrap  justify-between md:gap-3">
              <span className="mx-auto md:mx-0 w-full">Ensure smooth sailing towards</span> <span className="mx-auto md:mx-0 w-full">Windows 10 end of support!</span>
            </h2>
            <DialogForm
              isDialogOpen={isDialogOpen}
              toggleDialog={toggleDialog}
              buttonText="Download Guide"
              dialogTitle="Download Guide"
              buttonClassNames="lg:px-6 lg:py-7"
              section="download-guide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
