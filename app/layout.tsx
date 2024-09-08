import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"; // Change Toaster to ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redington Campaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P2HCCZB8');`,
          }}
        ></script>
      </head>
      <body
        className={inter.className + " antialiased bg-background min-h-screen"}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2HCCZB8"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <ToastContainer /> {/* Update Toaster to ToastContainer */}
        {children}
      </body>
    </html>
  );
}
