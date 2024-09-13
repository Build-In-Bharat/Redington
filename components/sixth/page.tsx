"use client";
import React, { useState } from "react";
import { DialogForm } from "../DialogForm";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const cardsData = [
  {
    imageSrc: "/l1.webp",
    title: "Acer VT AIO Laptop",
    description:
      "Acer VT AIO Intel Core i3 12th Gen (Windows 11 Home/8 GB/512 GB) Z4694G (D22W1) 60.5cm (23.8 Inch)Display with Wireless Mouse and Keyboard.",
    buttonText: "Send Enquiry",
    formSection: "send-enquiry-Acer-VT-AIO-Laptop",
  },
  {
    imageSrc: "/l2.jpg",
    title: "Acer TravelMate Laptop",
    description:
      "Acer TravelMate TMP414-51 11th Gen Intel Core i5 (Windows 11 Home/16 GB/512 GB SSD) 35.56 cm (14 Inch) Full HD Display Laptop...",
    buttonText: "Send Enquiry",
    formSection: "send-enquiry-Acer-TravelMate-Laptop",
  },
  {
    imageSrc: "/l3.webp",
    title: "Acer TravelLite Business Laptop",
    description:
      "Acer TravelLite Business Laptop 13th Gen Intel Core i5-1335U Processor (Windows 11 Home/16 GB RAM/512 GB SSD) TL14-52M with 35.5 cm (14 Inch) Full HD Display...",
    buttonText: "Send Enquiry",
    formSection: "send-enquiry-Acer-TravelLite-Business-Laptop",
  },
];

const Sixth: React.FC = () => {
  const [dialogStates, setDialogStates] = useState(cardsData.map(() => false));
  const isMobile = useMediaQuery("(max-width: 640px)");

  const toggleDialog = (index: number) => {
    setDialogStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const renderCard = (card: (typeof cardsData)[0], index: number) => (
    <div className="bg-[#0a1929] p-3 sm:p-4 md:p-5 rounded-lg shadow-md w-full">
      <img
        src={card.imageSrc}
        alt={card.title}
        className="w-full h-40 sm:h-52 md:h-64 object-cover mb-3 sm:mb-4 rounded"
      />
      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
        {card.title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-5">
        {card.description}
      </p>
      <DialogForm
        isDialogOpen={dialogStates[index]}
        toggleDialog={() => toggleDialog(index)}
        buttonText={card.buttonText}
        dialogTitle="Send Enquiry"
        buttonClassNames="w-full py-2 px-3 text-xs sm:text-sm md:text-base"
        section={card.formSection}
      />
    </div>
  );

  return (
    <section className="bg-[#010b1a] py-4 sm:py-8 md:py-12 text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            To break new ground, you need ground-breaking devices. Windows 11
            Pro devices can accelerate workflows and collaboration 50% on
            average. With experiences that elevate the potential of everyone on
            your team.
          </p>
        </div>

        {isMobile ? (
          <div className="w-full overflow-hidden">
            <div className="flex -mx-2 overflow-x-auto">
              {cardsData.map((card, index) => (
                <div key={index} className="flex-[0_0_80%] px-2">
                  {renderCard(card, index)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {cardsData.map((card, index) => (
              <React.Fragment key={index}>
                {renderCard(card, index)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Sixth;
