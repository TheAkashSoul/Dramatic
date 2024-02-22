import { fetchMovieData, fetchSimilarMovieData } from "@/actions/movieData";
import CarouselContainer from "@/components/common/CarouselContainer";
import genresData from "@/lib/genresData";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

type props = {
  searchParams: {
    movie: number;
  };
};

export default async function Stream({ searchParams: { movie } }: props) {
  const newMovie = await fetchMovieData(movie);
  const poster = newMovie.poster_path
    ? `https://image.tmdb.org/t/p/original/${newMovie.poster_path}`
    : "https://image.tmdb.org/t/p/original/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg";

  const similarMovies = await fetchSimilarMovieData(movie);

  return (
    <main className="mt-20 text-white">
      <div className="flex md:flex-row flex-col items-start gap-10 mx-6 md:mx-8 lg:mx-20">
        <div className="w-fit overflow-hidden">
          <Image
            src={poster}
            alt="image"
            height={300}
            width={240}
            className="object-cover w-auto"
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
            {newMovie?.genres?.map((genreName: any) => (
              <p key={genreName.id} className="font-medium text-sm">
                {genreName.name}
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

      {similarMovies?.length > 0 && (
        <div className="my-10 md:mt-20">
          <div className="mt-10">
            <CarouselContainer category="MORE LIKE THIS" data={similarMovies} />
          </div>
        </div>
      )}
    </main>
  );
}
