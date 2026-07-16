import fs from "fs/promises";
import path from "path";

import Navbar from "./_components/Layout/Navbar";
import AboutSection from "./_components/About/AboutSection";
import ServicesSection from "./_components/Services/ServicesSection";
import WorkSection from "./_components/Work/WorkSection";

export default async function Home() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return (
    <>
      <Navbar />
      <AboutSection />
      <ServicesSection />
      <WorkSection projects={data.projects} />
    </>
  );
}
