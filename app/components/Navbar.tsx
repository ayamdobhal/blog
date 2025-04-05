"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    switch (key) {
      case "B":
        window.open("/", "_self");
        break;
      case "P":
        window.open("https://iamdobhal.dev", "_blank");
        break;
      case "R":
        window.open("https://cv.iamdobhal.dev", "_blank");
        break;
      case "G":
        window.open("https://github.com/ayamdobhal", "_blank");
        break;
    }
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <nav className="px-32 py-4 flex w-full top-0 z-20 fixed items-center justify-between">
      <div className="w-full flex gap-1 max-w-7xl">
        <div className="text-sm font-sans font-bold text-black bg-gray-400 p-1 hover:bg-pink-400 hover:text-white">
          <Link href="/">[B] Blog</Link>
        </div>
        <div className="text-sm font-sans font-bold text-black bg-gray-400 p-1 hover:bg-pink-400 hover:text-white">
          <Link href="https://iamdobhal.dev" target="_blank">
            [P] Portfolio
          </Link>
        </div>
        <div className="text-sm font-sans font-bold text-black bg-gray-400 p-1 hover:bg-pink-400 hover:text-white">
          <Link href="https://cv.iamdobhal.dev" target="_blank">
            [R] Resumé
          </Link>
        </div>
        <div className="text-sm font-sans font-bold text-black bg-gray-400 p-1 hover:bg-pink-400 hover:text-white">
          <Link href="https://github.com/ayamdobhal" target="_blank">
            [G] Github
          </Link>
        </div>
      </div>
    </nav>
  );
}
