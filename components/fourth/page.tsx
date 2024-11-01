"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CardData {
  imageSrc: string;
  videoUrl: string;
  title: string;
  subtitle: string;
}

const Fourth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
    slidesToScroll: 1
  });

  const cardsData: CardData[] = [
    {
      imageSrc: "/Video4.png",
      videoUrl: "https://www.youtube.com/watch?v=SPHto1DHcZ4",
      title: "A new AI era at work",
      subtitle: "Introducing the world's fastest, most intelligent Windows PCs ever. Accelerate innovation, solve problems faster, and drive transformative business impact with Copilot+ PCs."
    },
    {
      imageSrc: "/3.png",
      videoUrl: "https://www.youtube.com/watch?v=Xfsv_c0vJvM",
      title: "Recall almost anything anywhere",
      subtitle: "Use recall to search across your personal timeline, apps, documents, and communications to find and predict the most relevant content. With just a few words, describe it to find it using natural language options."
    },
    {
      imageSrc: "/1.png",
      videoUrl: "https://www.youtube.com/watch?v=a3bEOqiv3yU",
      title: "Keep communication flowing effortlessly",
      subtitle: "Using live captions with translation,2 you can understand almost any video call or recording with real-time translation from 40+ languages into English."
    },
    {
      imageSrc: "/2.png",
      videoUrl: "https://www.youtube.com/watch?v=zVv_mJoSh_g",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
  ];

  const openDialog = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentVideoUrl("");
  };

  const renderVideoCard = (card: CardData, index: number) => (
    <div className="flex flex-col px-4"> {/* Added horizontal padding */}
      <div
        onClick={() => openDialog(card.videoUrl)}
        className="relative aspect-video overflow-hidden shadow-lg group cursor-pointer rounded-lg"
        style={{
          backgroundImage: `url(${card.imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg sm:text-xl flex gap-2 items-center">
            Play <IconPlayerPlayFilled size={20} className="sm:w-6 sm:h-6" />
          </span>
        </div>
      </div>
      <div className="text-center mt-3 sm:mt-4">
        <h3 className="text-[16px] sm:text-xl font-semibold mb-1 sm:mb-2">{card.title}</h3>
        <p className="text-[12px] sm:text-sm">{card.subtitle}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#010b1a] py-10 sm:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 sm:gap-16 w-full sm:w-[90vw] md:w-[80vw] mx-auto">
          <div className="mt-5">
            <div className="text-[32px] font-bold leading-[39px] text-center">How Copilot+ PCs help your business</div>
            <div className="text-[14px] leading-[17px] my-4 text-center">Accelerate success with a turbocharged NPU for an unmatched experience with lightning speed and smooth performance. Copilot+ PCs bring intelligent edge computing to your desktop experience.</div>
          </div>
          {/* Main video */}
          <div className="w-full">
            <div
              onClick={() => openDialog(cardsData[0].videoUrl)}
              className="relative w-full aspect-video overflow-hidden shadow-lg group cursor-pointer rounded-lg"
              style={{
                backgroundImage: `url(${cardsData[0].imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl sm:text-3xl flex gap-2 sm:gap-3 items-center">
                  Play Video <IconPlayerPlayFilled size={24} className="sm:w-10 sm:h-10" />
                </span>
              </div>
            </div>
            <div className="md:text-center mt-4 sm:mt-6">
              <h2 className="text-[20px] leading-[24px] sm:text-3xl font-semibold mb-2 sm:mb-3">{cardsData[0].title}</h2>
              <p className="text-[14px] leading-[17px] sm:text-lg max-w-3xl mx-auto">{cardsData[0].subtitle}</p>
              <div className="h-1 w-full border-b border-gray-600 mt-8 mb-3"></div>
            </div>
          </div>

          {/* Smaller videos carousel */}
          <div className="w-full overflow-hidden"> {/* Added overflow-hidden */}
            {isMobile ? (
              <div className="embla" ref={emblaRef}> {/* Removed overflow-visible */}
                <div className="embla__container flex -mx-4"> {/* Added negative margin to counteract padding */}
                  {cardsData.slice(1).map((card, index) => (
                    <div key={index} className="embla__slide flex-[0_0_90%]"> {/* Adjusted slide width */}
                      {renderVideoCard(card, index)}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                {cardsData.slice(1).map((card, index) => (
                  <React.Fragment key={index}>
                    {renderVideoCard(card, index)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#0f172a] bg-opacity-75 flex justify-center items-center z-50">
          <DialogContent className="bg-[#1f2937] p-4 sm:p-6 rounded-lg max-w-3xl w-full h-full text-white flex items-center justify-center">
            <ReactPlayer url={currentVideoUrl} controls width="100%" height="100%" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </section>
  );
};

export default Fourth;
