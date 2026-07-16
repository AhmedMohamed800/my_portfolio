"use client";
import { WorkRowProps } from "./definitions";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WorkRow({
  id,
  title,
  num,
  img,
  role,
  client,
  date,
  description,
  liveLink,
  sourceLink,
  onHover,
  onLeave,
}: WorkRowProps) {
  const isOpen = useRef(false);
  const projectInfo = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLImageElement | null>(null);
  gsap.registerPlugin(useGSAP);

  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(projectInfo.current, {
        height: "auto",
        marginTop: 16,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(
        arrowRef.current,
        {
          rotate: 90, // left -> down
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      );
  });

  const toggle = () => {
    isOpen.current = !isOpen.current;

    if (isOpen.current) {
      tl.current?.play();
      onLeave();
    } else {
      tl.current?.reverse();
    }
  };

  return (
    <div
      className={`flex flex-col  w-full  gap-0 border-b border-dashed text-[16px] py-4`}
    >
      <div
        className="flex justify-between"
        onMouseEnter={() => {
          if (!isOpen.current) {
            onHover();
          }
        }}
        onClick={toggle}
      >
        <div className="flex-1">{num}</div>
        <div className="flex-5">{title}</div>
        <div className="flex-3">{role}</div>
        <div className="flex-3">{client}</div>
        <div className="flex-2">{date}</div>
        <div className="flex-1 flex justify-end">
          <Image
            ref={arrowRef}
            src="/projects/arrow-left.svg"
            alt="arrow"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div
        className="projectInfo flex flex-col lg:flex-row gap-8 items-center h-0  overflow-hidden"
        onMouseEnter={onLeave}
        ref={projectInfo}
      >
        <div className="relative w-full max-w-[420px] aspect-[16/10] shrink-0">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
        <article className=" flex flex-col gap-4 flex-1 ">
          <h3 className="text-2xl uppercase font-medium">{title}</h3>
          <p className="text-[16px]">{description}</p>
          <div className="flex lg:items-center gap-3 flex-col lg:flex-row">
            {liveLink && (
              <a
                href={liveLink}
                className="p-2 border border-dashed text-center"
              >
                View Website
              </a>
            )}
            {sourceLink && (
              <a
                href={sourceLink}
                className="py-2 px-4 bg-black text-white border border-white text-center"
              >
                Source Code
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
