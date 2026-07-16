import Navbar from "./_components/Layout/Navbar";
import AboutSection from "./_components/About/AboutSection";
import ServicesSection from "./_components/Services/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
