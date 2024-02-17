import CarouselContainer from "@/components/common/CarouselContainer";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Stream() {
  return (
    <main className="mt-20 text-white">
      <div className="flex md:flex-row flex-col items-start gap-10 mx-6 md:mx-20">
        <div className="relative h-64 w-48">
          <Image
            src="https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg"
            alt="image"
            layout="fill"
          />
        </div>

        <div className="w-full md:w-[60%] mb-4">
          <h2 className="font-bold lg:text-3xl mb-4">
            Ant-Man and the Wasp: Quantumania
          </h2>
          <p className="text-xs md:text-sm mb-3 font-light">
            Super-Hero partners Scott Lang and Hope van Dyne, along with with
            Hope&apos;s parents Janet van Dyne and Hank Pym, and Scott&apos;s
            daughter Cassie Lang, find themselves exploring the Quantum Realm,
            interacting with strange new creatures and embarking on an adventure
            that will push them beyond the limits of what they thought possible.
          </p>
          <p className="font-medium text-base text-[#9F1D00]">GENRES</p>
          <p className="font-medium text-sm">Romance Drama Action</p>

          <div className="flex flex-col w-fit md:flex-row gap-3 mt-3">
            <button className="bg-[#5436A9] px-4 py-2 rounded-full text-xs md:text-sm items-center justify-center flex flex-row gap-1">
              WATCH
              <FaPlay size={16} />
            </button>
            <button className="bg-[#5C5C5C] backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm items-center justify-center flex flex-row gap-1">
              MY LIST
              <FaPlus size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row my-6 lg:items-center gap-10 mx-6 md:mx-20">
        <div className="flex flex-col w-full lg:w-[40%]">
          <div className="flex flex-row gap-3 mt-5 mb-3 items-center">
            <p className="text-[#FFFFFF] font-medium text-lg">9.1</p>
            <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
              U/A
            </p>
            <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
              4K
            </p>
            <p className="text-[#FFFFFF] font-medium text-sm">2019-07-04</p>
          </div>
          <div className="flex flex-col mb-3">
            <p className="font-semibold text-base text-[#9F1D00]">AUDIO</p>
            <p className="font-medium text-sm">
              English - Audio Description, English [Original]
            </p>
          </div>
          <div className="flex flex-col mb-5">
            <p className="font-semibold text-base text-[#9F1D00]">SUBTITLES</p>
            <p className="font-medium text-sm">English, Hindi</p>
          </div>
        </div>
        <div>vnnn</div>
      </div>

      <div className="mt-20 mb-10">
        <div className="mt-10">
          <CarouselContainer category="MORE LIKE THIS" />
        </div>
      </div>
    </main>
  );
}
