"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

export default function ServicesSection() {
  const container = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceTitle = useRef<HTMLHeadingElement | null>(null);

  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  useGSAP(
    () => {
      const containerCurrent = servicesRef.current;
      if (!containerCurrent) return;

      const getDistance = () => {
        const wrapper = containerCurrent.parentElement!;
        return containerCurrent.scrollWidth - wrapper.clientWidth;
      };

      gsap.to(servicesRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: container.current,
          start: "start 70%",
        },
      });

      if (serviceTitle.current) {
        gsap.set(serviceTitle.current, { autoAlpha: 1 });

        const headingSplit = SplitText.create(serviceTitle.current, {
          type: "chars",
          mask: "chars",
        });

        tl.from(headingSplit.chars, {
          y: "100%",
          // opacity: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
        });
      }

      if (servicesRef.current) {
        tl.from(
          servicesRef.current?.children,
          {
            // opacity: 1,
            y: 100,
            stagger: 0.1,
            ease: "back",
            duration: 0.6,
          },
          "<",
        );
      }
    },
    { scope: container },
  );

  return (
    <section
      className=" h-dvh  bg-red overflow-x-clip "
      id="services"
      ref={container}
    >
      <div className="section-container container-padding pt-12 pb-12 lg:pt-32 lg:pb-32">
        <div className="border-b border-dashed border-white pb-4">
          <h1
            ref={serviceTitle}
            className="invisible text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase font-bold leading-none"
          >
            What I do?
          </h1>
        </div>
        <div className="servicesLayout mt-12 lg:mt-16  relative bg-red">
          <div
            className="servicesContainer flex gap-8 absolute top-0 left-0 bg-red "
            ref={servicesRef}
          >
            <ServiceCard
              img="services/applications.webp"
              title="Building Web Applications"
              description="Interactive systems built to solve real problems."
            />
            <ServiceCard
              img="services/websites.webp"
              title="Creating Websites"
              description="Modern, responsive websites tailored to your brand and business goals."
            />
            <ServiceCard
              img="services/servers.webp"
              title="Website Support"
              description="Fixing bugs, adding features, improving performance, and keeping your website running smoothly."
            />
            <ServiceCard
              img="services/class.webp"
              title="Teaching Web Development"
              description="Helping aspiring developers build practical, real-world web development skills."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
