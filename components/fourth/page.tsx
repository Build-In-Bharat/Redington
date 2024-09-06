"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface CardData {
  imageSrc: string;
  videoUrl: string;
  title: string;
  subtitle: string;
}

const Fourth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const cardsData: CardData[] = [
    {
      imageSrc: "/Video4.png",
      videoUrl: "https://youtu.be/SPHto1DHcZ4",
      title: "A new AI era at work",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video1.png",
      videoUrl: "https://youtu.be/Xfsv_c0vJvM",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video2.png",
      videoUrl: "https://youtu.be/a3bEOqiv3yU",
      title: "Put AI to work for you",
      subtitle: "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more."
    },
    {
      imageSrc: "/Video3.png",
      videoUrl: "https://youtu.be/zVv_mJoSh_g",
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

  return (
    <section className="bg-[#010b1a] py-10 sm:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 sm:gap-16 w-full sm:w-[90vw] md:w-[80vw] mx-auto">
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
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl sm:text-3xl flex gap-2 sm:gap-3 items-center">
                  Play Video <IconPlayerPlayFilled size={24} className="sm:w-10 sm:h-10" />
                </span>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">{cardsData[0].title}</h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">{cardsData[0].subtitle}</p>
            </div>
          </div>

          {/* Smaller videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {cardsData.slice(1).map((card, index) => (
              <div key={index} className="flex flex-col">
                <div
                  onClick={() => openDialog(card.videoUrl)}
                  className="relative aspect-video overflow-hidden shadow-lg group cursor-pointer rounded-lg"
                  style={{
                    backgroundImage: `url(${card.imageSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg sm:text-xl flex gap-2 items-center">
                      Play <IconPlayerPlayFilled size={20} className="sm:w-6 sm:h-6" />
                    </span>
                  </div>
                </div>
                <div className="text-center mt-3 sm:mt-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm">{card.subtitle}</p>
                </div>
                {/* Add line divider for mobile view */}
                {index < cardsData.slice(1).length - 1 && (
                  <hr className="border-t border-gray-600 my-6 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#0f172a] bg-opacity-75 flex justify-center items-center z-50">
          <DialogContent className="bg-[#1f2937] p-4 sm:p-6 rounded-lg max-w-3xl w-full text-white">
            <ReactPlayer url={currentVideoUrl} controls width="100%" height="auto" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </section>
  );
};

export default Fourth;
