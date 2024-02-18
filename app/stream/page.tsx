// import CarouselContainer from "@/components/common/CarouselContainer";
import genresData from "@/lib/genresData";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

type props = {
  searchParams: {
    movie: any;
  };
};

export default async function Stream({ searchParams: { movie } }: props) {
  const newMovie = JSON.parse(movie);
  const poster = `https://image.tmdb.org/t/p/original/${newMovie.poster_path}`;

  const getGenreNamesByIds = (genreIds: number[]) => {
    return newMovie.genre_ids.map((id: number) => {
      const genre = genresData.genres.find((genre) => genre.id === id);
      return genre ? genre.name : "Unknown Genre";
    });
  };

  const movieGenreNames = getGenreNamesByIds(newMovie.genre_ids);
  return (
    <main className="mt-20 text-white">
      <div className="flex md:flex-row flex-col items-start gap-10 mx-6 md:mx-20">
        <div className="w-fit overflow-hidden">
          <Image
            src={poster}
            alt="image"
            height={300}
            width={240}
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-[60%] mb-4">
          <h2 className="font-bold text-xl md:text-3xl mb-4">
            {newMovie.original_title}
          </h2>
          <p className="text-xs md:text-sm mb-3 font-light">
            {newMovie.overview}
          </p>
          <p className="font-medium text-base text-[#9F1D00]">GENRES</p>
          <div className="flex flex-row gap-3 flex-wrap">
            {movieGenreNames?.map((genreName: string, index: number) => (
              <p key={index} className="font-medium text-sm">
                {genreName}
              </p>
            ))}
          </div>

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

          <div className="flex flex-col w-full lg:w-[40%]">
            <div className="flex flex-row flex-wrap gap-3 mt-10 mb-3 items-center">
              <p className="text-[#D7B438] font-medium text-lg">
                {newMovie.vote_average.toFixed(1)}
              </p>
              <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
                U/A
              </p>
              <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
                4K
              </p>
              <p className="text-[#FFFFFF] font-medium text-sm">
                {newMovie.release_date}
              </p>
            </div>
            <div className="flex flex-col mb-3">
              <p className="font-semibold text-base text-[#9F1D00]">AUDIO</p>
              <p className="font-medium text-sm">
                {newMovie.original_language}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <div className="mt-10">
          {/* <CarouselContainer category="MORE LIKE THIS" /> */}
        </div>
      </div>
    </main>
  );
}
