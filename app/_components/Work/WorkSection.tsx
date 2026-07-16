"use client";

import { WorkSectionProps, ProjectProps } from "./definitions";
import WorkRow from "./WorkRow";
import { useState } from "react";
import Image from "next/image";
import FloatingPreview from "./FloatingPreview";

export default function WorkSection({ projects }: WorkSectionProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section className="section-container container-padding mt-12 mb-12 lg:mt-16 lg:mb-16 ">
      <h1 className="text-5xl font-bold uppercase">Recent Work</h1>

      <div
        className="flex flex-col w-full mt-8 lg:mt-12"
        onMouseMove={(e) =>
          setMouse({
            x: e.clientX,
            y: e.clientY,
          })
        }
        onMouseLeave={() => setPreview(null)}
      >
        <div className="hidden lg:flex justify-between w-full gap-4  border-b border-dashed text-[18px] pb-2">
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
