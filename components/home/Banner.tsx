import genresData from "@/lib/genresData";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Banner({ movies }: { movies: any }) {
  const backGroundImage = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`;

  const genres = genresData;

  const getGenreNamesByIds = (genreIds: number[]) => {
    return movies.genre_ids.map((id: number) => {
      const genre = genresData.genres.find((genre) => genre.id === id);
      return genre ? genre.name : "Unknown Genre";
    });
  };

  const movieGenreNames = getGenreNamesByIds(movies.genre_ids);

  return (
    <main className="text-[#FFFFFF]">
      <div
        className="relative bg-cover bg-center px-8 md:px-0 lg:mx-20 md:mx-6 h-[500px] md:h-[700px] flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${backGroundImage})`,
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 w-full z-10 h-full bg-gradient-to-t from-[#000000] to-transparent" />

        <div className="absolute w-[50%] md:-left-2 left-0 z-20 h-full bg-gradient-to-r from-[#000000] to-transparent" />

        <div className="absolute w-[50%] md:-right-2 right-0 z-20 h-full bg-gradient-to-l from-[#000000] to-transparent" />

        <div className="flex flex-col z-30 w-[80%] md:w-[50%] lg:w-[30%] md:ml-8">
          <h2 className="font-bold lg:text-3xl mb-4">
            {movies.original_title}
          </h2>
          <p className="line-clamp-3 text-xs mb-3 font-light">
            {movies.overview}
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
        </div>
      </div>
    </main>
  );
}
