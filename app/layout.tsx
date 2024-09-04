import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"; // Change Toaster to ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

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
      <body
        className={inter.className + " antialiased bg-background min-h-screen"}
      >
        <ToastContainer /> {/* Update Toaster to ToastContainer */}
        {children}
      </body>
    </html>
  );
}
