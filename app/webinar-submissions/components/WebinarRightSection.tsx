import Image from "next/image";
import React from "react";

const WebinarRightSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400  via-purple-600 to-blue-600 min-h-[240vh] lg:min-h-screen  relative">
      <div className="relative">
        <Image
          src="/webinar-submissions/DPS_Device_Swirls.png"
          alt="Windows 11 Laptop"
          width={800}
          height={600}
          className="w-full"
        />

        <div className="absolute z-2 sm:top-[80%]">
          {/* White Box */}
          <div className="bg-white text-black p-6 mx-6 rounded-tl-[100px] rounded-br-[100px] relative z-10">
            {/* Quote Section */}
            <div className="m-4 sm:m-8">
              <blockquote className="text-sm mb-4 text-black">
                “Migrating from Windows 10 to Windows 11 Pro was seamless with
                absolutely no issues. With this new version of Windows,
                everything simply works—all the applications, all the devices,
                any keyboard, any mouse, touch, pen. When I don’t hear from my
                IT team, that’s a good thing.”
              </blockquote>
              <p className="text-right text-gray-700">
                - Madhusudhana Holla, General Manager
              </p>
            </div>

            {/* Webinar Information */}
            <div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                Windows 10 support is ending.
              </h2>
              <p className="mb-4 text-sm flex flex-col text-black">
                Don’t miss our webinar to learn more about upgrading to Windows
                11 Pro before support ends for Windows 10.
                <span className="mt-4">
                  Why start now? A well-structured and phased approach ensures a
                  smoother transition, minimizes disruptions, and maximizes the
                  benefits of upgrading to Windows 11 Pro. Plus, you can gain a
                  competitive edge with AI-enhanced productivity and get
                  powerful out-of-the-box security with new Windows 11 Pro
                  devices.
                </span>
              </p>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                In this webinar, you will learn how to:
              </h3>
              <ul className="list-disc pl-6 mb-8 space-y-1 text-sm text-black">
                <li>
                  Assess your devices’ technical readiness for Windows 11 Pro
                  deployment.
                </li>
                <li>
                  Increase your competitive edge with performance and
                  AI-enhanced features in Windows 11 Pro.
                </li>
                <li>
                  Simplify deployment and ensure a smooth transition to Windows
                  11 Pro.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Webinar agenda
              </h3>
              <div className="space-y-2 mb-8 text-sm text-gray-800">
                <p className="flex gap-2">
                  <span className="text-pink-500 font-bold">
                    4:00 - 4:30 PM:
                  </span>
                  <span className="text-sm text-pink-500">
                    Upgrading to Windows 11 - How outdated devices put your{" "}
                    <br />
                    business at risk
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-pink-500 font-bold">
                    4:30 - 4:40 PM:
                  </span>
                  <span className="text-sm text-pink-500">Q/A Session</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-pink-500 font-bold">
                    4:40 - 4:45 PM:
                  </span>
                  <span className="text-sm text-pink-500">Closing Note</span>
                </p>
              </div>

              {/* Speaker Section */}
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Speakers
              </h3>
              <div className="flex items-center space-x-4 text-gray-800">
                <Image
                  src="/webinar-submissions/rajesh_sharma.png"
                  alt="Rajesh Sharma"
                  width={84}
                  height={84}
                  className="rounded-full"
                />
                <div>
                  <p className="font-extrabold">Rajesh Sharma</p>
                  <p>Microsoft Product Specialist</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-16 right-0 -mx-6">
              <Image
                src="/webinar-submissions/swirl-Frame.png"
                alt="swirl-2"
                className="w-[560px] object-cover"
                width={600}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarRightSection;
