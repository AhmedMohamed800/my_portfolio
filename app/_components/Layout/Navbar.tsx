"use client";
import Image from "next/image";
import { useRef } from "react";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navMobileRef = useRef<HTMLDivElement | null>(null);
  const isMenuOpenRef = useRef(false);

  const { contextSafe } = useGSAP();

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
    <nav className="container-padding   border-b-black border-b border-dashed">
      <div className="py-3!  section-container flex justify-between items-center">
        <Image src="/logo.svg" width={93} height={44} alt="Ahmed's logo" />
        <ul className="hidden md:flex gap-4 uppercase font-normal">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">What I do?</a>
          </li>
          <li>
            <a href="#work">Recent Work</a>
          </li>
          <li>
            <a href="#about">Skills &amp; Tools</a>
          </li>
        </ul>
        <button className="hidden md:flex uppercase border border-dashed px-4! py-2! rounded-sm">
          <a href="#contact">Contact Me</a>
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
