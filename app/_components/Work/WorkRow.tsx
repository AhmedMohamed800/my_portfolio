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
        marginTop: 8,
        marginBottom: 14,

        duration: 0.5,
        ease: "power2.in",
      })
      .to(
        arrowRef.current,
        {
          rotate: 90,
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
      className={`flex flex-col  w-full  gap-0 border-b border-dashed text-[16px] `}
    >
      <div
        className="flex flex-col lg:flex-row  justify-between cursor-pointer lg:gap-4 relative  py-4"
        onMouseEnter={() => {
          if (!isOpen.current) {
            onHover();
          }
        }}
        onClick={toggle}
      >
        <div className="flex-2 font-medium text-[18px] lg:font-normal lg:text-[16px]">
          {num}
        </div>
        <div className="flex-5 font-medium text-[18px] mb-4 lg:mb-0 lg:font-normal lg:text-[16px]">
          {title}
        </div>
        <div className="flex-3 flex gap-4 mb-2 lg:mb-0">
          <span className="flex-1 block lg:hidden text-red lg:text-black">
            Role
          </span>
          <span className="flex-6">{role}</span>
        </div>
        <div className="flex-3 flex gap-4  mb-2 lg:mb-0">
          <span className="flex-1 block lg:hidden text-red lg:text-black">
            Client
          </span>
          <span className="flex-6">{client}</span>
        </div>
        <div className="flex-2 flex gap-4  mb-2 lg:mb-0">
          <span className="flex-1 block lg:hidden text-red lg:text-black">
            Date
          </span>
          <span className="flex-6">{date}</span>
        </div>
        <div className="flex-1 flex justify-end absolute top-[20px] right-0 lg:relative lg:top-0 ">
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
        className="projectInfo flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center h-0  overflow-hidden"
        onMouseEnter={onLeave}
        ref={projectInfo}
      >
        <div className="relative w-full lg:max-w-[420px] aspect-[16/10] shrink-0">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
        <article className=" flex flex-col gap-3 lg:gap-4 flex-1 ">
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
