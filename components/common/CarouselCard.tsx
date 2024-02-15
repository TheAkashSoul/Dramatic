"use client";

import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

export default function CarouselCard() {
  return (
    <div className="bg-[#05080B] w-fit rounded-md overflow-hidden">
      <Link href={"/stream"}>
        <div className="lg:w-44 lg:h-56 md:w-40 md:h-48 w-32 h-40 relative overflow-hidden rounded-md">
          <Image
            src="https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg"
            alt="Image"
            layout="fill"
          />
        </div>
      </Link>

      <div className="flex flex-col p-1">
        <p className="font-semibold text-sm">Scream VI</p>
        <p className="font-thin text-xs">2019</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-[#FFC907] font-medium text-sm">9.1</p>
          <button
            onClick={() => console.log("added")}
            className="p-2 hover:text-[#FFC907]"
          >
            <GoPlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
