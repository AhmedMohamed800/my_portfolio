"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ onClose }, ref) => {
    return (
      <div
        className="flex flex-col h-dvh w-full fixed bg-white top-0 left-0 py-4! z-50"
        style={{ transform: "translateX(100%)" }}
        ref={ref}
      >
        <div
          className="flex px-4! pb-4! border-b h-[53px] border-b-black border-dashed w-full "
          onClick={onClose}
        >
          <Image
            src="/close.svg"
            className="ms-auto!"
            width={24}
            height={24}
            alt="close menu"
          />
        </div>

        <ul
          className="flex flex-col gap-4 uppercase font-normal pt-6! px-4!"
          onClick={onClose}
        >
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
      </div>
    );
  },
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
