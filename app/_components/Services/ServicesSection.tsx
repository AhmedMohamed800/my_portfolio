"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { useRef } from "react";

export default function ServicesSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(
    () => {
      const containerCurrent = servicesRef.current;
      if (!containerCurrent) return;

      const getDistance = () => {
        const wrapper = containerCurrent.parentElement!;
        return containerCurrent.scrollWidth - wrapper.clientWidth;
      };

      gsap.to(servicesRef.current, {
        x: -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section className="h-dvh bg-red overflow-x-clip" ref={container}>
      <div className="section-container container-padding py-16 lg:py-24 ">
        <div className="border-b border-dashed border-white pb-4">
          <h1 className="text-5xl text-white uppercase font-bold">
            What I do?
          </h1>
        </div>
        <div className="servicesLayout mt-16  relative bg-red">
          <div
            className="servicesContainer flex gap-8 absolute top-0 left-0 bg-red"
            ref={servicesRef}
          >
            <ServiceCard
              img="img_holder.jpg"
              title="Creating Websites"
              description="A website tailored for your identity and goals"
            />
            <ServiceCard
              img="img_holder.jpg"
              title="Teaching Web Development"
              description="Guiding beginners from fundamentals to real-world skills"
            />
            <ServiceCard
              img="img_holder.jpg"
              title="Building Web Applications"
              description="Interactive systems built to solve real problems"
            />
            <ServiceCard
              img="img_holder.jpg"
              title="Website Support"
              description="Fixing bugs, adding features, improving performance, and keeping sites running."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
