import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#040b18] pb-6 flex flex-col md:flex-row justify-between p-4 md:p-10 container mx-auto min-w-full">
        <div className="text-white mb-4 md:mb-0">
          <p className="text-[16px] mt-8 md:mt-0 md:text-base">
            Redington provides end-to-end supply chain solutions for all categories
            of <br className="hidden md:inline" />
            Information Technology, Telecom, Lifestyle, Healthcare, and Solar
            products
          </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-3 md:space-x-5">
          <a href="#" className="flex-shrink-0">
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/X.svg" alt="Twitter" className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/youtube.svg" alt="YouTube" className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        </div>
      </div>
      <div className="bg-[#3561FF] flex flex-col md:flex-row justify-between items-center text-white pt-1 pb-3 px-4 md:px-16 gap-4 md:gap-12">
        <Image src="/logo-white.png" alt="Logo" width={120} height={120} className="w-32 md:w-40 h-auto" />
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-xs md:text-sm">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Copyright © 2024 Redington Micro. All rights reserved.</a>
          <a target="_blank" href="https://www.ingrammicro.com/en-us/legal/accessibility-statement" className="hover:underline">Accessibility statement</a>
          <a target="_blank" href="https://www.ingrammicro.com/en-us/legal/privacy-statement" className="hover:underline">Privacy statement</a>
          <a target="_blank" href="https://www.ingrammicro.com/en-us/legal/sales-terms-conditions" className="hover:underline">Sales terms and conditions</a>
          <a target="_blank" href="https://www.ingrammicro.com/en-us/company/contact-us" className="hover:underline">Do not sell/share my information</a>
          <a target="_blank" href="https://www.ingrammicro.com/en-us/legal/terms-of-use" className="hover:underline">Terms of use</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Cookie Options</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
