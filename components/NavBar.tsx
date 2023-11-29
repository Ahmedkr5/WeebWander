
'use client';
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import React, { useState } from "react";
import CustomDialog from "./CustomDialog";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
  <header className="w-full fixed z-10">
    <nav className="mx-auto flex flex-col sm:flex-row items-center justify-between w-full sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex items-center mb-2 sm:mb-0 sm:mr-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={130}
          className="object-contain"
        />
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-white rounded-md hover:bg-indigo-500 bg-indigo-600 font-semibold min-w-[130px] py-3 px-6"
        handleClick={() => setIsOpen(true)}
        
      />
    </nav>
    <CustomDialog title="Login" isOpen={isOpen} closeModal={() => setIsOpen(false)}  />
  </header>

  );
};
export default NavBar;
