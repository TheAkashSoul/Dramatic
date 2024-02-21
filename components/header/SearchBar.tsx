"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({
  onClickSearch,
}: {
  onClickSearch?: () => void;
}) {
  const [searchName, setSearchName] = useState<string>("");

  const router = useRouter();

  const searchMovies = () => {
    if (searchName.length < 1) {
      return;
    }
    router.push(`/search?keyword=${encodeURIComponent(searchName)}`);
    setSearchName("");
    if (onClickSearch) {
      onClickSearch();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  return (
    <main className="md:ml-auto md:mr-10">
      <div className="flex flex-row items-center justify-center rounded-full overflow-hidden h-6 w-64">
        <input
          className="pl-4 pr-1 h-full w-full text-xs font-extralight outline-none text-[#FFFFFF] bg-[#3B567D] placeholder-[#A2B3CD]"
          placeholder="Search..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchMovies} className="bg-[#3B567D] h-full px-1">
          <Search color="#FFFFFF" size={18} />
        </button>
      </div>
    </main>
  );
}
