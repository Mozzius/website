"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useToggle } from "../hooks/useToggle";

const LinkItem = ({ href, children }: { href: string; children: string }) => {
  const path = usePathname();
  const isActive = href === "/" ? href === path : path.startsWith(href);

  return (
    <li
      data-active={isActive}
      className="flex-1  bg-slate-500 hover:bg-slate-400 data-[active=true]:bg-slate-400 transition-colors"
    >
      <Link
        href={href}
        className="flex items-center text-6xl w-full h-full px-16 cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
};

export const Navigation = ({ children }: React.PropsWithChildren) => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="w-full h-screen flex align-middle justify-center bg-slate-700 overflow-hidden">
      <div
        data-open={isOpen}
        className="data-[open=true]:scale-[0.6] data-[open=false]:translate-x-[-14.25%] flex transition-transform duration-500"
      >
        <nav className="flex flex-col w-[40vw] h-screen">
          <ul
            className="flex flex-col items-stretch h-full p-0 w-full"
            onClick={toggle}
          >
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/about">About</LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
            <LinkItem href="/contact">Contact</LinkItem>
          </ul>
        </nav>
        <div className="relative">
          <button onClick={toggle} className="absolute top-0 left-0 m-4 z-50">
            <svg
              className="w-8 h-8 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-screen h-screen overflow-auto bg-slate-900">{children}</div>
        </div>
      </div>
    </div>
  );
};
