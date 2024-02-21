"use client";

import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

export default function CarouselCard({ data }: any) {
  const poster = data.poster_path
    ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
    : "https://image.tmdb.org/t/p/original/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg";
  return (
    <div className="bg-[#05080B] w-fit rounded-md overflow-hidden hover:scale-105 transition-all">
      <Link
        href={{
          pathname: "/stream",
          query: { movie: JSON.stringify(data) },
        }}
      >
        <div className="w-full overflow-hidden rounded-md">
          <Image
            src={poster}
            alt="Image"
            height={400}
            width={300}
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-col p-1">
        <p className="font-semibold text-sm line-clamp-1">
          {data.original_title}
        </p>
        <p className="font-thin text-xs">{data.release_date.slice(0, 4)}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-[#FFC907] font-medium text-sm">
            {data.vote_average.toFixed(1)}
          </p>
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
