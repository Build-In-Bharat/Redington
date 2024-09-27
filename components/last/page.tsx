"use client";
import Image from "next/image";
import { useState } from "react";
import { DialogForm } from "../DialogForm";

const Last: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div id="case-studies" className="bg-black ">
      <div className="relative w-full md:h-screen flex items-center overflow-hidden container mx-auto min-w-full bg-[#0a1929]">
        <Image
          src="/last_comp.png"
          alt="Background with Laptop"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="z-10 mt-48 ml-20 text-white">
          <DialogForm
            isDialogOpen={isDialogOpen}
            toggleDialog={toggleDialog}
            buttonText="Get Early Access"
            dialogTitle="Get Early Access"
            buttonClassNames="hidden md:flex"
            section="last-section"
          />

        </div>

      </div>
      <div className="flex ">
        <DialogForm
          isDialogOpen={isDialogOpen}
          toggleDialog={toggleDialog}
          buttonText="Download Case Study"
          dialogTitle="Download Case Study"
          buttonClassNames="flex md:hidden mx-auto mt-6 mb-10"
          section="last-section"
        />
      </div>
    </div>
  );
};

export default Last;