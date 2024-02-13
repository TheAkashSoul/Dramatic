import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <main className="ml-20 mr-16">
      <div className="flex flex-row items-center justify-center rounded-full overflow-hidden h-6 w-64">
        <input
          className="pl-4 pr-1 h-full w-full text-xs font-extralight outline-none text-[#FFFFFF] bg-[#3B567D] placeholder-[#A2B3CD]"
          placeholder="Search..."
        />
        <button className="bg-[#3B567D] h-full pr-1">
          <Search color="#FFFFFF" size={18} />
        </button>
      </div>
    </main>
  );
}
