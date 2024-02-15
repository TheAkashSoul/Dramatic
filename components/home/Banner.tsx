import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Banner() {
  return (
    <main className="text-[#FFFFFF]">
      <div
        className="relative bg-cover bg-center px-8 md:px-0 lg:mx-20 md:mx-6 h-[500px] md:h-[700px] flex flex-col items-start justify-center"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg')",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 w-full z-10 h-full bg-gradient-to-t from-[#000000] to-transparent" />

        <div className="absolute w-[50%] left-0 z-20 h-full bg-gradient-to-r from-[#000000] to-transparent" />

        <div className="absolute w-[50%] right-0 z-20 h-full bg-gradient-to-l from-[#000000] to-transparent" />

        <div className="flex flex-col z-30 w-[80%] md:w-[50%] lg:w-[30%] md:ml-8">
          <h2 className="font-bold lg:text-3xl mb-4">
            Ant-Man and the Wasp: Quantumania
          </h2>
          <p className="line-clamp-3 text-xs mb-3 font-light">
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
    </main>
  );
}
