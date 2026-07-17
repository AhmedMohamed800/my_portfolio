import SkillCard from "./SkillCard";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <section className="bg-red relative min-h-dvh " id="skills">
      <div className=" section-container container-padding text-white pt-12 pb-12 lg:pt-16 lg:pb-16 ">
        <h1 className="relative z-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none">
          Skills & Tools
        </h1>
        <div className="relative flex flex-col  gap-8 mt-6 lg:mt-12 z-3">
          <div className="flex flex-col  gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium uppercase leading-tight">
              Programming Languages & 2 Imposters
            </h2>
            <div className="flex gap-4 flex-wrap">
              <SkillCard title="jAVASCRIPT" />
              <SkillCard title="tYPESCRIPT" />
              <SkillCard title="PHP" />
              <SkillCard title="HTML" />
              <SkillCard title="CSS" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium uppercase leading-tight">
              Frameworks{" "}
            </h2>
            <div className="flex gap-4 flex-wrap">
              <SkillCard title="Next.js" />
              <SkillCard title="Worpdress" />
              <SkillCard title="Tailwindcss" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium uppercase leading-tight">
              lIBRARIES
            </h2>
            <div className="flex gap-4 flex-wrap">
              <SkillCard title="REACT.js" />
              <SkillCard title="gsap" />
              <SkillCard title="zustand" />
              <SkillCard title="Jest" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium uppercase leading-tight">
              tools
            </h2>
            <div className="flex gap-4 flex-wrap">
              <SkillCard title="vITE" />
              <SkillCard title="fIGMA" />
              <SkillCard title="dOCKER" />
              <SkillCard title="VS CODE" />
              <SkillCard title="git" />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute w-[60%] h-full top-0 right-0 opacity-20 ">
        <Image
          src="/code.png"
          alt="Description"
          fill
          sizes="100%"
          className=" object-cover object-top"
        />
      </div>
    </section>
  );
}
