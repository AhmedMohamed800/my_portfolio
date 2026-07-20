"use client";

import { WorkSectionProps, ProjectProps } from "./definitions";
import WorkRow from "./WorkRow";
import { useRef, useState } from "react";
import FloatingPreview from "./FloatingPreview";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function WorkSection({ projects }: WorkSectionProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const tableHeaderRef = useRef<HTMLDivElement | null>(null);
  const rowsContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let headingSplit: SplitText | null = null;

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
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
          opacity: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
          onComplete: () => headingSplit?.revert(),
        });
      }

      // --- Table header columns: stagger fade-up ---
      if (tableHeaderRef.current) {
        tl.from(
          tableHeaderRef.current.children,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }

      // --- Project rows: stagger fade-up ---
      if (rowsContainerRef.current) {
        const rows =
          rowsContainerRef.current.querySelectorAll(".work-row-item");
        if (rows.length) {
          tl.from(
            rows,
            {
              opacity: 0,
              y: 40,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.3",
          );
        }
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="flex flex-col justify-center section-container container-padding pt-12 pb-12 lg:pt-16 lg:pb-16 min-h-dvh"
      id="work"
      ref={sectionRef}
    >
      <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none invisible">
        Recent Work
      </h1>

      <div
        className="flex flex-col w-full mt-8 lg:mt-12"
        onMouseMove={(e) =>
          setMouse({
            x: e.clientX,
            y: e.clientY,
          })
        }
        onMouseLeave={() => setPreview(null)}
        ref={rowsContainerRef}
      >
        <div
          ref={tableHeaderRef}
          className="hidden lg:flex justify-between w-full gap-4 border-b text-sm lg:text-base pb-2"
        >
          <div className="flex-2">Number</div>
          <div className="flex-5">Title</div>
          <div className="flex-3">Role</div>
          <div className="flex-3">Client</div>
          <div className="flex-2">Date</div>
          <div className="flex-1"></div>
        </div>
        {projects.map((project: ProjectProps) => {
          return (
            <WorkRow
              key={project.id}
              {...project}
              onHover={() => setPreview(project.img)}
              onLeave={() => setPreview(null)}
            />
          );
        })}

        <FloatingPreview preview={preview} mouse={mouse} />
      </div>
    </section>
  );
}
