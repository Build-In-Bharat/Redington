import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-[#040b18] flex justify-between p-10 container mx-auto min-w-full">
        <div className="text-white">
          <p>
            Redington provides end-to-end supply chain solutions for all
            categories of <br />
            Information Technology, Telecom, Lifestyle, Healthcare, and Solar
            products
          </p>
        </div>
        <div className="flex space-x-5">
          <a href="#" className="flex-shrink-0">
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="h-10 w-10 rounded-full"
            />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/X.svg" alt="Twitter" className="h-10 w-10 " />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-10 w-10 " />
          </a>
          <a href="#" className="flex-shrink-0">
            <img src="/youtube.svg" alt="YouTube" className="h-10 w-10" />
          </a>
        </div>
      </div>
      <div className="bg-[#3561FF] flex justify-center items-center text-white p-2">
        <p>Copyright &copy; 2024 Redington</p>
      </div>
    </div>
  );
};

export default Footer;
