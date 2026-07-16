"use client";
import Image from "next/image";
import { useRef } from "react";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function Navbar() {
  const navMobileRef = useRef<HTMLDivElement | null>(null);
  const isMenuOpenRef = useRef(false);
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);
  const ctaBtnRef = useRef<HTMLButtonElement | null>(null);

  const { contextSafe } = useGSAP();

  // --- Page-load entrance animation ---
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      // Navbar bar itself: fade in
      gsap.from(navRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.1,
      });

      // Logo: fade + slide from left
      if (logoRef.current) {
        tl.from(logoRef.current, {
          x: -20,
          opacity: 0,
          duration: 0.6,
        });
      }

      // Nav links: SplitText char stagger on each link label
      if (navLinksRef.current) {
        const linkSpans =
          navLinksRef.current.querySelectorAll<HTMLElement>(
            ".link-item-child-1",
          );

        linkSpans.forEach((span, i) => {
          const split = SplitText.create(span, {
            type: "chars",
          });

          tl.from(
            split.chars,
            {
              opacity: 0,
              y: 10,
              filter: "blur(3px)",
              duration: 0.4,
              stagger: 0.02,
              ease: "power2.out",
            },
            i === 0 ? "-=0.25" : "-=0.3",
          );
        });
      }

      // Contact button: fade + scale pop
      if (ctaBtnRef.current) {
        gsap.set(ctaBtnRef.current, { autoAlpha: 1 });
        tl.from(
          ctaBtnRef.current,
          {
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "back.out(1.7)",
            clearProps: "all",
          },
          "-=0.3",
        );
      }
    },
    { scope: navRef },
  );

  const openNavClick = contextSafe(() => {
    const isOpen = !isMenuOpenRef.current;
    isMenuOpenRef.current = isOpen;
    if (isOpen) gsap.set(navMobileRef.current, { x: "-100%" });

    gsap.to(navMobileRef.current, {
      x: isOpen ? "0%" : "-100%",
      duration: 0.7,
      ease: "power2.in",
    });
  });

  return (
    <nav className="z-50 border-b-white border-b  " ref={navRef}>
      <div className="py-3! container-padding  section-container flex justify-between items-center">
        <Image
          ref={logoRef}
          src="/logo.svg"
          width={93}
          height={44}
          alt="Ahmed's logo"
        />
        <ul
          ref={navLinksRef}
          className="hidden md:flex gap-4 uppercase font-normal"
        >
          <li>
            <a
              href="#about"
              className="link-item flex flex-col overflow-hidden h-5"
            >
              <span className="link-item-child-1">About</span>
              <span className="link-item-child-2">About</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="link-item flex flex-col overflow-hidden h-5"
            >
              <span className="link-item-child-1">What I do?</span>
              <span className="link-item-child-2">What I do?</span>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="link-item flex flex-col overflow-hidden h-5"
            >
              <span className="link-item-child-1">Recent Work</span>
              <span className="link-item-child-2">Recent Work</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="link-item flex flex-col overflow-hidden h-5"
            >
              <span className="link-item-child-1"> Skills &amp; Tools</span>
              <span className="link-item-child-2"> Skills &amp; Tools</span>
            </a>
          </li>
        </ul>
        <button
          ref={ctaBtnRef}
          className="link-item cursor-pointer hidden md:flex uppercase border  px-4! py-3! rounded-sm hover:bg-black hover:text-white transition-all"
        >
          <a href="#contact" className="flex flex-col overflow-hidden h-5">
            <span className="link-item-child-1 leading-[120%]">Contact Me</span>
            <span className="link-item-child-2 leading-[120%]">Contact Me</span>
          </a>
        </button>
        <Image
          src="/menu.svg"
          className="md:hidden"
          width={26}
          onClick={openNavClick}
          height={24}
          alt="Menu"
        />
      </div>

      <MobileMenu ref={navMobileRef} onClose={openNavClick} />
    </nav>
  );
}
