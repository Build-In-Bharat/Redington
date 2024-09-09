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
          <a href="https://www.facebook.com/profile.php?id=61565468454865" className="flex-shrink-0">
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
          </a>
          <a href="https://www.instagram.com/windows11forsmbs.redington/" className="flex-shrink-0">
            <img src="/X.svg" alt="Twitter" className="h-8 w-8 md:h-10 md:w-10" />
          </a>
          <a href="https://www.linkedin.com/company/windows-11-for-smbs-by-redington-limited/" className="flex-shrink-0">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
