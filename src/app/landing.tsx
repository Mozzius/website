"use client";

import Image from "next/image";
import { useRef } from "react";

import { useScroll } from "../hooks/useScroll";

import mountains from "../public/images/mountain.jpg";

export const Landing = () => {
  const imageRef1 = useRef<HTMLDivElement>(null!);
  const imageRef2 = useRef<HTMLDivElement>(null!);
  const containerRef = useScroll((scroll) => {
    imageRef1.current.style.rotate = `${scroll * 0.5}deg`;
    imageRef2.current.style.rotate = `${scroll * -0.5}deg`;
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-auto overflow-x-hidden text-white text-center"
    >
      <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
        <div className="max-square-95 absolute pointer-events-none z-10 overflow-visible flex items-center justify-center">
          <Image
            src={mountains}
            alt="Mountains"
            className="w-screen h-screen object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div
          ref={imageRef1}
          className="max-square-80 absolute pointer-events-none z-10 rounded-full overflow-hidden flex items-center justify-center"
        >
          <Image
            src={mountains}
            alt="Mountains"
            className="w-screen h-screen object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div
          ref={imageRef2}
          className="max-square-60 absolute pointer-events-none z-20 rounded-full overflow-hidden flex items-center justify-center"
        >
          <Image
            src={mountains}
            alt="Mountains"
            className="w-screen h-screen object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div className="max-square-40 absolute pointer-events-none z-20 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={mountains}
            alt="Mountains"
            className="w-screen h-screen object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <h1 className="text-6xl text-center z-40 w-full">Hello World</h1>
      </div>
      <div className="h-screen bg-[#1b3644]" />
    </div>
  );
};
