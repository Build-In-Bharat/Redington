export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-white md:bg-gray-100">
      <div className="bg-white   w-[1080px]    sm:px-10 md:px-20 py-6 md:shadow-lg rounded-lg text-center">
        {/* Logos */}
        <div className="flex justify-around items-center mb-4">
          <img
            src="/webinar-submissions/Redington-logo-2.png" // Replace with your Ingram logo
            alt="Redington Logo"
            className="h-9"
            width="auto"
            height="32"
          />
          <img
            src="/webinar-submissions/windows-logo-2.png" // Replace with your Windows 11 logo
            alt="Windows 11 Logo"
            className="h-6"
            width="auto"
            height="22"
          />
        </div>

        <hr className=" border-black" />

        {/* Thank You Message */}

        <div className="mt-16 mb-8 flex items-center justify-center flex-col">
          <div className=" rounded-lg text-center">
            <img
              src="/webinar-submissions/Thank-you-image.png" // Replace with your Windows 11 logo
              alt="Thank you!"
              className="h-16"
              width="auto"
              height="147"
            />
          </div>

          <p className="text-black text-xl mt-4 font-[400]">
            You have successfully registered yourself for the webinar.
          </p>
        </div>

        <div className="mt-4 mb-2">
          {/* Contact Info */}
          <div className="flex items-center justify-center mt-10">
            <div className="text-black text-sm mt-4 font-[400] mb-2">
              To learn more, please connect with our team at{" "}
              <p>
                <a
                  href="mailto:shiwangi@windows11forsmb.com"
                  className="text-blue-500 underline"
                >
                  shiwangi@windows11forsmb.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
