import React, { useState } from "react"; // Added useState import
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hamburger from "../../public/Hamburger.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { X, ChevronRight } from "lucide-react"; // Import X icon from lucide-react

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for drawer open/close

  return (
    <div>
      <nav className="relative w-full z-20 h-16 min-w-full">
        <div className="px-4 md:px-16 py-4">
          <div className="flex justify-between items-center h-16">
            <div className="md:hidden flex items-center flex-col justify-center"> {/* Hamburger icon for mobile */}
              <button onClick={() => setIsOpen(true)} className="mobile-menu-button">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L20 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12L20 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 6L20 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex">
              <a href="#" className="flex-shrink-0">
                <Image className="hidden md:block" src="/logo.svg" alt="Logo" width={150} height={150} />
                <Image className="md:hidden" src="/logo.svg" alt="Logo" width={80} height={80} />
              </a>
            </div>
            <div className="flex items-center space-x-3 md:space-x-5">
              <a href="#" className="flex-shrink-0">
                <Image
                  className="hidden md:block"
                  src="/windows-11.svg"
                  alt="Windows 11"
                  width={200}
                  height={50}
                />
                <Image
                  className="md:hidden"
                  src="/windows-11.svg"
                  alt="Windows 11"
                  width={100}
                  height={100}
                />
              </a>
              <div className="hidden md:block border-l border-gray-300 h-6"></div>
              <a href="#" className="flex-shrink-0">
                <Image
                  className="hidden md:block"
                  src="/office360.png"
                  alt="Microsoft 365"
                  width={160}
                  height={30}
                />
                <Image
                  className="md:hidden"
                  src="/office360.png"
                  alt="Microsoft 365"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </div>
          <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}> {/* Pass state to Drawer */}
            <DrawerContent className="md:hidden text-white w-[80vw] h-full bg-[#010B1A] border-1 ">
              <DrawerHeader className="flex justify-end p-4">
                <DrawerClose>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 mb-12" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="px-5">
                <Link href="#" className="flex justify-between"><span>Windows 10 End of Support </span> <span><ChevronRight /></span></Link>
                <div className="border-b border-[#E2E4E93D] my-4 mb-8"></div>
                <Link href="#" className="flex justify-between"><span>Access Ebook </span> <span><ChevronRight /></span></Link>
                <div className="border-b border-[#E2E4E93D] my-4 mb-8"></div>
                <Link href="#" className="flex justify-between"><span>Copilot+ PCs Benefits </span> <span><ChevronRight /></span></Link>
                <div className="border-b border-[#E2E4E93D] my-4 mb-8"></div>
                <Link href="#" className="flex justify-between"><span>Work Magic </span> <span><ChevronRight /></span></Link>
                <div className="border-b border-[#E2E4E93D] my-4 mb-8"></div>
                <Link href="#" className="flex justify-between"><span>Case Studies </span> <span><ChevronRight /></span></Link>
                <div className="border-b border-[#E2E4E93D] my-4 mb-8"></div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="hidden md:flex text-white justify-center items-center gap-8 py-3">
          <Link href="#" className="hover:text-[#4fe7fe] cursor-pointer">Windows 10 End of Support</Link>
          <Link href="#" className="hover:text-[#4fe7fe] cursor-pointer">Access Ebook</Link>
          <Link href="#" className="hover:text-[#4fe7fe] cursor-pointer">Copilot+ PCs Benefits</Link>
          <Link href="#" className="hover:text-[#4fe7fe] cursor-pointer">Work Magic</Link>
          <Link href="#" className="hover:text-[#4fe7fe] cursor-pointer">Case Studies</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
