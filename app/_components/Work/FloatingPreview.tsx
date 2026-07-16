"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface FloatingPreviewProps {
  preview: string | null;
  mouse: {
    x: number;
    y: number;
  };
}

export default function FloatingPreview({
  preview,
  mouse,
}: FloatingPreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // Follow the mouse
  useEffect(() => {
    if (!wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      x: mouse.x + 24,
      y: mouse.y + 24,
      duration: 0.5,
      ease: "bounce.p",
    });
  }, [mouse]);

  // Reveal / Hide
  useEffect(() => {
    if (!revealRef.current) return;

    if (preview) {
      gsap.fromTo(
        revealRef.current,
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 0.5,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(revealRef.current, {
        clipPath: "inset(100% 0 0 0)",
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [preview]);

  if (!preview) return null;

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed left-0 top-0 z-50"
    >
      <div
        ref={revealRef}
        className="overflow-hidden rounded-xl shadow-2xl"
        style={{
          clipPath: "inset(100% 0 0 0)",
        }}
      >
        <Image
          src={preview}
          alt=""
          width={320}
          height={220}
          className="h-[220px] w-[320px] object-cover"
        />
      </div>
    </div>
  );
}
