"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Image from "next/image";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaContainerRef = useRef<HTMLDivElement | null>(null);
  const NumbersContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Track SplitText instances so we can revert after animation
      let headingSplit: SplitText | null = null;
      let paraSplit: SplitText | null = null;

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.7,
        onComplete: () => {
          headingSplit?.revert();
          paraSplit?.revert();
        },
      });

      // --- Heading: SplitText char-by-char stagger reveal ---
      if (headingRef.current) {
        // Set initial state before split
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
        });
      }

      // --- Subtitle: ScrambleText decode effect ---
      if (subtitleRef.current) {
        tl.to(
          subtitleRef.current,
          {
            duration: 0.9,
            scrambleText: {
              text: "Full Stack Developer",
              chars: "█▓▒░/\\|01XYZABC<>{}",
              revealDelay: 0.3,
              speed: 0.4,
              tweenLength: false,
            },
            ease: "none",
          },
          "-=0.5",
        );
      }

      // --- Paragraph: SplitText line-by-line reveal ---
      if (paragraphRef.current) {
        gsap.set(paragraphRef.current, { autoAlpha: 1 });

        paraSplit = SplitText.create(paragraphRef.current, {
          type: "lines",
          mask: "lines",
          linesClass: "about-line",
        });

        tl.from(
          paraSplit.lines,
          {
            y: "100%",
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6",
        );
      }

      if (NumbersContainerRef.current) {
        tl.to(NumbersContainerRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      // --- CTA buttons: fade & slide up ---
      if (ctaContainerRef.current) {
        tl.to(
          ctaContainerRef.current.children,
          {
            opacity: 1,

            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      // --- Image: clip reveal ---
      const imageEl = sectionRef.current?.querySelector(".about-image");
      if (imageEl) {
        tl.to(
          imageEl,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.8",
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container container-padding pt-0 lg:pt-0 lg:pb-16"
    >
      <div className="flex flex-col justify-between md:flex-row md:items-center uppercase gap-2 md:gap-4 my-4 lg:my-8">
        <h2
          ref={headingRef}
          className="text-[clamp(2.2rem,8vw,6rem)] font-extrabold leading-[100%] flex-1 invisible"
        >
          Ahmed Mohamed
        </h2>
        <p
          ref={subtitleRef}
          className="text-[clamp(1rem,2vw,1.125rem)] font-medium"
        >
          &nbsp;
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 md:gap-6 relative h-full mt-2!">
        <div className="w-full lg:w-[60%] order-2 lg:order-1 h-full sticky top-2 lg:mb-4 ">
          <div className="flex items-stretch gap-3">
            <p ref={paragraphRef} className="invisible flex-1 py-1 text-sm sm:text-base">
              I enjoy building things for the web that are fast, accessible, and
              hopefully a little fun to use.
            </p>
          </div>
          <div
            className="grid grid-auto-fill-200 gap-4 mt-2  "
            ref={NumbersContainerRef}
          >
            <article className="flex flex-col gap-1 py-4 px-4 opacity-0 translate-y-8 rounded-sm items-center bg-black border border-red text-white">
              <h3 className="text-xl sm:text-2xl text-red">&lt;6&gt;</h3>
              <p className="text-white text-center text-sm sm:text-base">Websites Delivered</p>
            </article>
            <article className="flex flex-col gap-1 py-4 px-4 opacity-0 translate-y-8 rounded-sm items-center bg-black border border-red text-white">
              <h3 className="text-xl sm:text-2xl text-red">&lt;95+&gt;</h3>
              <p className="text-white text-center text-sm sm:text-base">Students Mentored</p>
            </article>
            <article className="flex flex-col gap-1 py-4 px-4 opacity-0 translate-y-8 rounded-sm items-center bg-black border border-red text-white">
              <h3 className="text-xl sm:text-2xl text-red">&lt;160+&gt;</h3>
              <p className="text-white text-center text-sm sm:text-base">Hours Mentoring</p>
            </article>
            <article className="flex flex-col gap-1 py-4 px-4 opacity-0 translate-y-8 rounded-sm items-center bg-black border border-red text-white">
              <h3 className="text-xl sm:text-2xl text-red">&lt;Infinity&gt;</h3>
              <p className="text-white text-center text-sm sm:text-base">Vibes</p>
            </article>
          </div>
          <div
            ref={ctaContainerRef}
            className="flex flex-col sm:flex-row mt-4! items-center justify-baseline gap-3 lg:gap-4"
          >
            <button className="link-item w-full cursor-pointer translate-y-10 opacity-0 flex uppercase border px-4! py-3! rounded-sm hover:bg-black hover:text-white transition-all">
              <a href="#contact" className="flex flex-col overflow-hidden h-5">
                <span className="link-item-child-1 leading-[120%]">
                  Contact Me
                </span>
                <span className="link-item-child-2 leading-[120%]">
                  Contact Me
                </span>
              </a>
            </button>
            <button className="link-item w-full cursor-pointer bg-white text-black translate-y-10 opacity-0 flex uppercase border px-4! py-3! rounded-sm  transition-all">
              <a href="https://drive.google.com/file/d/12k48HRR4NVWXswjAvxXxuP7H-kGOQnJx/view?usp=sharing" className="flex flex-col overflow-hidden h-5">
                <span className="link-item-child-1 leading-[120%]">
                  Download Resume
                </span>
                <span className="link-item-child-2 leading-[120%]">
                  Download Resume
                </span>
              </a>
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("/me.webp")` }}
          className="about-image w-full h-100 lg:h-225 order-1 bg-cover bg-top bg-no-repeat rounded-tl-md rounded-tr-md"
        ></div>
      </div>
    </section>
  );
}
