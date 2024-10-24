import React from "react";
import WebinarRegistrationForm from "./components/WebinarRegistrationForm";
import WebinarRightSection from "./components/WebinarRightSection";
import Image from "next/image";

const WebinarRegistrationPage: React.FC = () => {
  return (
    <div className="bg-gray-100 h-auto mx-auto grid lg:grid-cols-2 ">
      {/*Summary section*/}
      <div className="p-10 sm:px-16">
        {/* logos */}
        <div className="flex justify-between items-center mb-12">
          <Image
            src="/webinar-submissions/redington-logo.png"
            alt="Redington"
            width={120}
            height={10}
            className="w-[120px] sm:w-[160px]"
          />
          <Image
            src="/webinar-submissions/Windows_11_logo_horiz_blue.svg"
            alt="Windows 11"
            width={120}
            height={10}
            className="w-[120px] sm:w-[160px]"
          />
        </div>

        <div className="mb-8">
          {/* moto */}
          <>
            <p className="text-black text-2xl mb-2">Designed to help you</p>
            <h1 className="text-5xl">
              Stay ahead,
              <br />
              <span className="bg-gradient-to-r font-bold from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                stay secure.
              </span>
            </h1>
            <p className="text-2xl my-6">
              Join us to learn how outdated devices put your business at risk.
            </p>
            <p className="text-4xl font-light my-12">
              Register now for the webinar
            </p>
          </>

          <>
            {/* date and time */}
            <p className="text-purple-600 text-lg font-bold">
              When:
              <span className="font-light">
                28 November, 2024 | 16:00 PM-16:40 PM IST
              </span>
            </p>
          </>

          {/*Summary*/}
          <div className="my-6 sm:my-12">
            <p className="text-black ">
              Support for Windows 10 is ending on October 14, 2025, and outdated
              devices will no longer get security and features updates. To
              ensure you stay secure, supported, and up to date, register below
              to learn more about upgrading to Windows 11 Pro.
            </p>
            <p className="text-sm text-black my-6">
              Fill out the form below to register today.
            </p>
          </div>
        </div>

        {/* Form Component */}
        <WebinarRegistrationForm />
      </div>

      {/* Right Column - Content */}
      <WebinarRightSection />
    </div>
  );
};

export default WebinarRegistrationPage;
