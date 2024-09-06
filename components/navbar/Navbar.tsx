import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="relative w-full z-20 h-16 min-w-full">
        <div className="px-4 md:px-16 py-4">
          <div className="flex justify-between items-center h-16">
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
              <div className="border-l border-gray-300 h-6"></div>
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
            {/* <div className="md:hidden">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
