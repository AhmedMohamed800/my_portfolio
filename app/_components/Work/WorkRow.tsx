"use client";
import { WorkRowProps } from "./definitions";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/src/CustomEase";
export default function WorkRow({
  id,
  title,
  num,
  img,
  technologies,
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
  gsap.registerPlugin(useGSAP, CustomEase);

  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(projectInfo.current, {
        height: "auto",
        marginTop: 8,
        marginBottom: 14,

        duration: 0.5,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.293,0.973 0.451,1.121 0.643,1.3 0.818,1.001 1,1 ",
        ),
      })
      .to(
        arrowRef.current,
        {
          rotate: 90,
          duration: 0.2,
          ease: "power2.out",
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
    <div className={`work-row-item flex flex-col w-full gap-0 border-b text-sm lg:text-base`}>
      <div
        className="flex flex-col lg:flex-row  justify-between cursor-pointer lg:gap-4 relative  py-4"
        onMouseEnter={() => {
          if (!isOpen.current) {
            onHover();
          }
        }}
        onClick={toggle}
      >
        <div className="flex-2 ">
          {num}
        </div>
        <div className="flex-5 mb-4 lg:mb-0">
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
          <h3 className="text-xl sm:text-2xl uppercase font-medium">{title}</h3>
          <p className="text-sm lg:text-base font-light">{description}</p>

          <div className="flex lg:items-center gap-3 flex-col lg:flex-row">
            {liveLink && (
              <button className="link-item text-sm  cursor-pointer  flex  uppercase border rounded-sm hover:bg-black hover:text-white transition-all">
                <a
                  href={liveLink}
                  target="_black"
                  className="flex flex-col overflow-hidden h-12 px-2"
                >
                  <span className="flex gap-2 items-center link-item-child-1 leading-[120%]  pt-[14px]">
                    <span>
                      <Image
                        src="/projects/externalLink.svg"
                        alt="externalLink"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span> View Website</span>
                  </span>
                  <span
                    className="flex gap-2 items-center link-item-child-2 leading-[120%]"
                    aria-hidden="true"
                  >
                    <span>
                      <Image
                        src="/projects/externalLink.svg"
                        alt="externalLink"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span> View Website</span>
                  </span>
                </a>
              </button>
            )}

            {sourceLink && (
              <button className="link-item text-sm cursor-pointer  flex  uppercase border rounded-sm hover:bg-black hover:text-white transition-all">
                <a
                  href={sourceLink}
                  target="_black"
                  className="flex flex-col overflow-hidden h-12 px-2"
                >
                  <span className="flex gap-2 items-center link-item-child-1 leading-[120%]  pt-[14px]">
                    <span>
                      <Image
                        src="/projects/github.svg"
                        alt="github"
                        width={18}
                        height={18}
                      />
                    </span>
                    <span>Source Code</span>
                  </span>
                  <span
                    className="flex gap-2 items-center link-item-child-2 leading-[120%]"
                    aria-hidden="true"
                  >
                    <span>
                      <Image
                        src="/projects/github.svg"
                        alt="github"
                        width={18}
                        height={18}
                      />
                    </span>
                    <span>Source Code</span>
                  </span>
                </a>
              </button>
            )}
          </div>
          <ul className="flex gap-2  ">
            {technologies.map((tech, index) => (
              <li key={tech}>
                {tech}
                {index !== technologies.length - 1 && " -"}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
