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
    <div className="relative w-full h-screen flex items-center overflow-hidden container mx-auto min-w-full bg-black">
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
          buttonText="Download Case Study"
          dialogTitle="Download Case Study"
        />
      </div>
    </div>
  );
};

export default Last;