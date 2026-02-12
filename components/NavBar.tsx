'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomDialog from "./CustomDialog";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070A12]/95 backdrop-blur">
  <nav className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Weeb Wander"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="text-white font-semibold tracking-wide">
            Weeb<span className="text-white/60">Wander</span>
          </span>
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 shadow-lg shadow-indigo-600/20 transition"
          handleClick={() => setIsOpen(true)}
        />
      </nav>

      <CustomDialog title="Login" isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </header>
  );
};

export default NavBar;
