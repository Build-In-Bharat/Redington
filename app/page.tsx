"use client";
import React from "react";
import Second from "@/components/second/page";
import Third from "@/components/Third/page";
import Fourth from "@/components/fourth/page";
import Last from "@/components/last/page";
import Fifth from "@/components/fifth/page";
import Sixth from "@/components/sixth/page";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/HeroSection";
import { useFormStore } from "@/lib/store";

export default function Home() {
  const { formData } = useFormStore();

  console.log("Global Form Data:", formData);

  return (
    <main className="m-0 p-0">
      <HeroSection />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Last />
      <Footer />
    </main>
  );
}
