import React from "react";
import Navbar from "@/components/new-components/Navbar/page"
import First from "@/components/new-components/First/page"
import Second from "@/components/new-components/Second/page";
import Third from "@/components/new-components/Third/page"
import Fourth from "@/components/new-components/Fourth/page"
import Fifth from "@/components/new-components/Fifth/page"
import Sixth from "@/components/new-components/Sixth/page"
import Seventh from "@/components/new-components/Seventh/page"
import Eighth from "@/components/new-components/Eighth/page"
import Ninth from "@/components/new-components/Ninth/page"
import Footer from "@/components/new-components/Footer/page"

export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden" vaul-drawer-wrapper="">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth />
      <Footer />
    </main>
  );
}
