"use client";

import Image from "next/image";
import logo from "../../public/assets/DRAMATIC.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-[#504179]/30 backdrop-blur-md h-16 flex items-center justify-between flex-row fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row space-x-6 items-center">
        <Link href={"/"} className="relative h-5 w-20 mx-20">
          <Image src={logo} alt="logo" layout="fill" />
        </Link>

        <Link
          className={`text-xs hover:text-[#FFFFFF] ${
            pathName === "/home"
              ? "text-[#FFFFFF] font-semibold"
              : "text-[#A1B1CB] font-medium"
          } `}
          href="/home"
        >
          HOME
        </Link>
        <Link
          className={`text-xs hover:text-[#FFFFFF] ${
            pathName === "/movies"
              ? "text-[#FFFFFF] font-semibold"
              : "text-[#A1B1CB] font-medium"
          } `}
          href="/movies"
        >
          MOVIES
        </Link>
        <Link
          className={`text-xs hover:text-[#FFFFFF] ${
            pathName === "/tvshow"
              ? "text-[#FFFFFF] font-semibold"
              : "text-[#A1B1CB] font-medium"
          } `}
          href="/tvshow"
        >
          TV SHOW
        </Link>
        <Link
          className={`text-xs hover:text-[#FFFFFF] ${
            pathName === "/mylist"
              ? "text-[#FFFFFF] font-semibold"
              : "text-[#A1B1CB] font-medium"
          } `}
          href="/mylist"
        >
          MY LIST
        </Link>
      </div>

      <div className="flex flex-row space-x-8 mr-20 items-center justify-between">
        <SearchBar />
        <Link href={"/"}>
          <Bell color="#FFFFFF" size={20} />
        </Link>
        <Link href={"/"}>
          <CircleUserRound color="#FFFFFF" size={24} />
        </Link>
      </div>
    </header>
  );
}
