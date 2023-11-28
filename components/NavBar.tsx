import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full fixed z-10">
    <nav className="mx-auto flex flex-col sm:flex-row items-center justify-between w-full sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex items-center mb-2 sm:mb-0 sm:mr-4">
        <Image
          src="./logo.svg"
          alt="logo"
          width={80}
          height={70}
          className="object-contain"
          layout="responsive"
        />
        <span className="font-semibold text-2xl tracking-tight ml-2 sm:ml-0">Weeb Wander</span>
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-white rounded-md bg-red-800 min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
