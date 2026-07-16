"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ContactSection() {
  gsap.registerPlugin(useGSAP);
  const gridContainer = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to(".footer-item", {
        height: "100%",
        stagger: {
          amount: 1.2,
          from: "edges",
        },
        scrollTrigger: {
          trigger: gridContainer.current,
          start: "end 70%",
        },
      });
    },
    { scope: gridContainer },
  );

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".footer-item");

      items.forEach((item) => {
        const move = (e: MouseEvent) => {
          const rect = item.getBoundingClientRect();

          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(item, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1,0.4)",
          });
        };

        item.addEventListener("mousemove", move);
        item.addEventListener("mouseleave", leave);
      });

      return () => {
        items.forEach((item) => {
          item.replaceWith(item.cloneNode(true)); // or remove listeners manually
        });
      };
    },
    { scope: gridContainer },
  );

  return (
    <footer className="flex flex-col justify-between min-h-dvh overflow-hidden">
      <div className="section-container container-padding flex justify-between items-center pt-13 lg:pt-16">
        <div>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none mb-2">
            Contact me
          </h1>
          <p>Hmmmmmmmmmmmmmmmmmmmmmmm...</p>
          <p>
            Reach me at ahmedmoh0107@gmail.com and let’s build something
            meaningful.
          </p>
        </div>

        <div>
          <a href="#">x</a>
          <a href="#">x</a>
          <a href="#">x</a>
        </div>
      </div>
      <div className="flex justify-end items-end  w-full" ref={gridContainer}>
        <div className="flex items-end  h-100 flex-1">
          <div className="footer-item flex-1 border bg-red border-white h-auto"></div>
        </div>
        <div className="flex items-end h-75 flex-1">
          <div className="footer-item flex-1 border bg-red border-white h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-50 flex-1">
          <div className="footer-item flex-1 border bg-red border-white h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-75 flex-1">
          <div className="footer-item flex-1 border bg-red border-white h-auto"></div>
        </div>
        <div className="flex items-end h-100 flex-1">
          <div className="footer-item flex-1 border bg-red border-white h-auto"></div>
        </div>
        <div className="flex items-end h-[430px] flex-1">
          <div className="footer-item flex-1 border bg-white border-black h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-[380px] flex-1">
          <div className="footer-item flex-1 border bg-white border-black h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-[150px] flex-1 ">
          <div className="footer-item flex-1 border bg-gold border-white h-auto"></div>
        </div>
        <div className="flex items-end h-[150px] flex-1">
          <div className="footer-item flex-1 border bg-gold border-white h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-[380px] flex-1">
          <div className="footer-item flex-1 border bg-white border-black h-auto"></div>
        </div>
        <div className="flex items-end h-[430px] flex-1">
          <div className="footer-item flex-1 border bg-white border-black h-auto"></div>
        </div>
        <div className="flex items-end  h-100 flex-1">
          <div className="footer-item flex-1 border bg-black border-white h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-75 flex-1">
          <div className="footer-item flex-1 border bg-black border-white h-auto"></div>
        </div>
        <div className="hidden lg:flex items-end h-50 flex-1">
          <div className="footer-item flex-1 border bg-black border-white h-auto"></div>
        </div>
        <div className="flex items-end h-75 flex-1">
          <div className="footer-item flex-1 border bg-black border-white h-auto"></div>
        </div>
        <div className="flex items-end h-100 flex-1">
          <div className="footer-item flex-1 border bg-black border-white h-auto"></div>
        </div>
      </div>
    </footer>
  );
}
