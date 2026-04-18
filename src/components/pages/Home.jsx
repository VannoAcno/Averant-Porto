import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Service from "../layouts/Service";
import Footer from "../layouts/Footer";
import FAQ from "../layouts/FAQ";
import ButtonParallax from "../layouts/ButtonParallax";

import BackToTop from "../features/BackToTop";

document.title = "Home - Averant Team";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ButtonParallax />
      <Service />


      <FAQ />
      <Footer />
      <BackToTop />
    </>
  );
}