"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface CardData {
  imageSrc: string;
  title: string;
  subtitle: string;
  videoUrl: string;
}

const Fourth: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const cardsData: CardData[] = [
    {
      imageSrc: "/Video1.png",
      title: "Recall almost anything anywhere.",
      subtitle:
        "Use recall to search across your personal timeline, apps, documents, and communications to find and predict the most relevant content. With just a few words, describe it to find it using natural language options",
      videoUrl: "https://youtu.be/H66l6QHE89c",
    },
    {
      imageSrc: "/Video2.png",
      title: "Keep communication flowing effortlessly",
      subtitle:
        "Using live captions with translation,2 you can understand almost any video call or recording with real-time translation from 40+ languages into English.",
      videoUrl: "https://youtu.be/ZKBl9uUMW-I",
    },
    {
      imageSrc: "/Video3.png",
      title: "Put AI to work for you",
      subtitle:
        "Experience superb-quality video calls in any app. Windows Studio Effects dynamically responds to you and your environment to automatically adjust your lighting, filter background noise and movement, keep you in the frame, and more.",
      videoUrl: "https://youtu.be/_8eyJc5kmcc",
    },
    {
      imageSrc: "/Video4.png",
      title: "A new AI era at work",
      subtitle:
        "Introducing the world’s fastest, most intelligent Windows PCs ever. Accelerate innovation, solve problems faster, and drive transformative business impact with Copilot+ PCs.",
      videoUrl: "https://youtu.be/lz3-Hojjeh4",
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
    <section className="bg-[#010b1a] pt-16 pb-12 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold mb-4 mt-14">
          How Copilot+ PCs help your business
        </h2>
        <p className="mb-12 text-lg max-w-3xl mx-auto">
          Accelerate success with a turbocharged NPU for an unmatched experience
          with lightning speed and smooth performance. Copilot+ PCs bring
          intelligent edge computing to your desktop experience.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full max-w-xl">
              <div
                onClick={() => openDialog(card.videoUrl)}
                className="relative w-full h-80 overflow-hidden shadow-lg group cursor-pointer"
                style={{
                  backgroundImage: `url(${card.imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg flex gap-1 items-center">
                    Play Video <IconPlayerPlayFilled />
                  </span>
                </div>
              </div>
              <div className="py-6 text-white text-start">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm mb-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-[#0f172a] bg-opacity-75 flex justify-center items-center z-50">
          <DialogContent className="bg-[#1f2937] p-6 rounded-lg max-w-3xl w-full text-white">
            <ReactPlayer url={currentVideoUrl} controls width="100%" />
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </section>
  );
};

export default Fourth;
