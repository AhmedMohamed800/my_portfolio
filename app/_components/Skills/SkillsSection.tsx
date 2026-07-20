"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const SKILL_GROUPS = [
  {
    label: "Programming Languages & 2 Imposters",
    skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "WordPress", "TailwindCSS"],
  },
  {
    label: "Libraries",
    skills: ["React.js", "GSAP", "Zustand", "Jest"],
  },
  {
    label: "Tools",
    skills: ["Vite", "Figma", "Docker", "VS Code", "Git"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      let headingSplit: SplitText | null = null;

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        onComplete: () => {
          headingSplit?.revert();
        },
      });

      // --- Heading: SplitText char-by-char stagger reveal ---
      if (headingRef.current) {
        gsap.set(headingRef.current, { autoAlpha: 1 });

        headingSplit = SplitText.create(headingRef.current, {
          type: "chars",
          mask: "chars",
        });

        tl.from(headingSplit.chars, {
          y: "100%",
          duration: 0.6,
          stagger: 0.02,
          ease: "power4.out",
        });
      }

      // --- Skill groups: stagger reveal per group ---
      groupRefs.current.forEach((groupEl) => {
        if (!groupEl) return;

        const label = groupEl.querySelector(".skill-group-label");
        const line = groupEl.querySelector(".skill-group-line");
        const cards = groupEl.querySelectorAll(".skill-card");

        if (label) {
          tl.from(
            label,
            {
              y: 15,
              opacity: 0,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.3",
          );
        }

        if (line) {
          tl.from(
            line,
            {
              scaleX: 0,
              duration: 0.5,
              ease: "power3.inOut",
            },
            "-=0.3",
          );
        }

        if (cards.length) {
          tl.from(
            cards,
            {
              y: 20,
              opacity: 0,
              duration: 0.35,
              stagger: 0.04,
              ease: "back.out(1.7)",
            },
            "-=0.5",
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="flex flex-col justify-center items-center bg-red relative min-h-dvh" id="skills" ref={sectionRef}>
      <div className="section-container container-padding text-white  pt-12 pb-12 lg:pt-32 lg:pb-32">
        <h1
          ref={headingRef}
          className="invisible relative z-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none"
        >
          Skills & Tools
        </h1>

        <div className="relative flex flex-col gap-10 mt-8 lg:mt-14 z-3">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.label}
              ref={(el) => { groupRefs.current[i] = el; }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <h2 className="skill-group-label text-lg sm:text-xl md:text-2xl font-normal uppercase leading-tight ">
                  {group.label}
                </h2>
                <div className="skill-group-line flex-1 h-px bg-white/30 origin-left" />
              </div>
              <div className="flex gap-3 flex-wrap">
                {group.skills.map((skill) => (
                  <SkillCard key={skill} title={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="skills-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#skills-noise)" />
        </svg>
      </div>
    </section>
  );
}
