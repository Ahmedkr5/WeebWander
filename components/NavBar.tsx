import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10 '>
    <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
    WeebWander
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-white rounded-md bg-red-800 min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;