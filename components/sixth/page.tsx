"use client";
import React, { useState } from "react";
import { DialogForm } from "../DialogForm";
import useEmblaCarousel from 'embla-carousel-react';
import { useMediaQuery } from "@/hooks/useMediaQuery";

const cardsData = [
  {
    imageSrc: "/Laptop1.avif",
    title: "Latitude 7455 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/Laptop2.avif",
    title: "Dell Latitude 5440 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/Laptop2.avif",
    title: "Dell Latitude 5440 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
];

const Sixth: React.FC = () => {
  const [dialogStates, setDialogStates] = useState(cardsData.map(() => false));
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
    dragFree: true,
    slidesToScroll: 1
  });

  const toggleDialog = (index: number) => {
    setDialogStates(prevStates =>
      prevStates.map((state, i) => i === index ? !state : state)
    );
  };

  const renderCard = (card: typeof cardsData[0], index: number) => (
    <div className="bg-[#0a1929] p-3 sm:p-4 md:p-5 rounded-lg shadow-md w-full">
      <img
        src={card.imageSrc}
        alt={card.title}
        className="w-full h-40 sm:h-52 md:h-64 object-cover mb-3 sm:mb-4 rounded"
      />
      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">{card.title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-5">{card.description}</p>
      <DialogForm
        isDialogOpen={dialogStates[index]}
        toggleDialog={() => toggleDialog(index)}
        buttonText={card.buttonText}
        dialogTitle="Send Enquiry"
        buttonClassNames="w-full py-2 px-3 text-xs sm:text-sm md:text-base"
      />
    </div>
  );

  return (
    <section className="bg-[#010b1a] py-4 sm:py-8 md:py-12 text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            To break new ground, you need ground-breaking devices. Windows 11 Pro
            devices can accelerate workflows and collaboration 50% on average.
            With experiences that elevate the potential of everyone on your team.
          </p>
        </div>

        {isMobile ? (
          <div className="w-full overflow-hidden">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex -mx-2">
                {cardsData.map((card, index) => (
                  <div key={index} className="embla__slide flex-[0_0_80%] px-2">
                    {renderCard(card, index)}
                  </div>
                ))}
              </div>
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