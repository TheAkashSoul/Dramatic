import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="text-[#FFFFFF] bg-[#161214] md:mt-28">
      <div className="lg:mx-20 md:mx-6 mx-6 flex flex-col pt-20 pb-6">
        <div className="flex md:flex-row flex-col justify-between items-start mb-20 gap-10">
          <div className="flex flex-row items-center bg-[#362F33] px-2 py-1 gap-2 h-fit cursor-pointer">
            <BsGlobe />
            <p className="text-xs font-light">English</p>
            <IoIosArrowDown />
          </div>
          <div className="flex flex-col">
            <p className="text-[#FFFFFF] font-semibold text-sm mb-3">
              NAVIGATION
            </p>
            <Link className="text-xs font-extralight mt-2" href="/">
              Home
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              FAQ
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Investor Relations
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Jobs
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              About Us
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Help Center
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="text-[#FFFFFF] font-semibold text-sm mb-3">LEGAL</p>
            <Link className="text-xs font-extralight mt-2" href="/">
              Privacy Policy
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Terms of Service
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Cookie Preferences
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              Corporate Information
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="text-[#FFFFFF] font-semibold text-sm mb-3">
              TALK TO US
            </p>
            <Link className="text-xs font-extralight mt-2" href="/">
              support@help.com
            </Link>
            <Link className="text-xs font-extralight mt-2" href="/">
              +66 5544 3322
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="text-[#FFFFFF] font-semibold text-sm mb-3">
              FOLLOW US
            </p>
            <div className="flex flex-row justify-between gap-4">
              <Link
                className="h-8 w-8 border border-gray-400 rounded-full flex justify-center items-center"
                href="/"
              >
                <RiFacebookFill />
              </Link>
              <Link
                className="h-8 w-8 border border-gray-400 rounded-full flex justify-center items-center"
                href="/"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                className="h-8 w-8 border border-gray-400 rounded-full flex justify-center items-center"
                href="/"
              >
                <IoLogoTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center text-xs font-extralight">
            &copy; 2024 Dramatic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
