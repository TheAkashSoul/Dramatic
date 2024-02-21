"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/DRAMATIC.png";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

export default function MobileHeader() {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const searchToggle = () => {
    setSearchActive(!searchActive);
    setMenuActive(false);
  };

  const menuToggle = () => {
    setMenuActive(!menuActive);
    setSearchActive(false);
  };

  const ref = useOnclickOutside(() => {
    setMenuActive(false);
    setSearchActive(false);
  });

  return (
    <header className="bg-[#504179]/30 backdrop-blur-md h-16 md:hidden flex items-center fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between flex-row w-full">
        <Link href="/" className="relative h-5 w-20 mx-6 flex items-center">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex flex-row items-center mr-6 space-x-8">
          <button ref={ref} onClick={searchToggle}>
            <FiSearch color="#FFFFFF" size={20} />
          </button>

          <button ref={ref} onClick={menuToggle}>
            <GiHamburgerMenu color="#FFFFFF" size={20} />
          </button>
        </div>
      </div>

      {searchActive && (
        <div ref={ref} className="absolute top-16 mt-2 z-50">
          <SearchMobile />
        </div>
      )}

      {menuActive && (
        <div ref={ref} className="absolute top-16 mt-2 z-50 right-6">
          <MenuMobile toggleMenu={menuToggle} />
        </div>
      )}
    </header>
  );
}

const SearchMobile = () => {
  return (
    <main className="w-screen flex items-center justify-center py-1">
      <div className="bg-[#504179]/30 backdrop-blur-md p-1">
        <SearchBar />
      </div>
    </main>
  );
};

const MenuMobile = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <main className="flex flex-col gap-2 p-2 items-start justify-center bg-[#504179]/30 backdrop-blur-md rounded-lg">
      <Link
        onClick={toggleMenu}
        href="/"
        className="font-medium text-[#FFFFFF] hover:bg-gray-600 px-2 rounded-md text-sm w-full"
      >
        Account
      </Link>
      <Link
        onClick={toggleMenu}
        href="/"
        className="font-medium text-[#FFFFFF] hover:bg-gray-600 px-2 rounded-md text-sm w-full"
      >
        Notifications
      </Link>
      <Link
        onClick={toggleMenu}
        href="/"
        className="font-medium text-[#FFFFFF] hover:bg-gray-600/30 px-2 rounded-md text-sm w-full"
      >
        Settings
      </Link>
      <Link
        onClick={toggleMenu}
        href="/mylist"
        className="font-medium text-[#FFFFFF] hover:bg-gray-600 px-2 rounded-md text-sm w-full"
      >
        My List
      </Link>
      <Link
        onClick={toggleMenu}
        href="/"
        className="font-medium text-[#FFFFFF] hover:bg-gray-600 px-2 rounded-md text-sm w-full"
      >
        Logout
      </Link>
    </main>
  );
};
