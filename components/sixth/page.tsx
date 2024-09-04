"use client";
import React, { useState } from "react";
import { DialogForm } from "../DialogForm";

const cardsData = [
  {
    imageSrc: "/Laptop1.avif",
    title: "Latitude 7455 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/sixth_card.svg",
    title: "FPO Product Name",
    description: "Product spec, information, and details go here",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/sixth_card.svg",
    title: "FPO Product Name",
    description: "Product spec, information, and details go here",
    buttonText: "Send Enquiry",
  },
];

const Sixth: React.FC = () => {
  const [dialogStates, setDialogStates] = useState(cardsData.map(() => false));

  const toggleDialog = (index: number) => {
    setDialogStates(prevStates =>
      prevStates.map((state, i) => i === index ? !state : state)
    );
  };

  return (
    <section className="bg-[#010b1a] py-14 text-white container mx-auto min-w-full">
      <div className="container mx-auto text-center mb-12">
        <p className="text-lg md:text-lg max-w-3xl mx-auto">
          To break new ground, you need ground-breaking devices. Windows 11 Pro
          devices can accelerate workflows and collaboration 50% on average.
          With experiences that elevate the potential of everyone on your team.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {cardsData.map((card, index) => (
          <div key={index} className="p-6 max-w-xs text-start">
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-auto object-contain mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300 mb-6">{card.description}</p>
            <DialogForm
              isDialogOpen={dialogStates[index]}
              toggleDialog={() => toggleDialog(index)}
              buttonText={card.buttonText}
              dialogTitle="Send Enquiry"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sixth;
