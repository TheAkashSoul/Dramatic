import { fetchSearchMovieData } from "@/actions/movieData";
import CarouselCard from "@/components/common/CarouselCard";

type props = {
  searchParams: {
    keyword: string;
  };
};

export default async function SearchMovie({
  searchParams: { keyword },
}: props) {
  const searchedMovie = await fetchSearchMovieData(keyword);

  return (
    <main className="flex items-center justify-center text-white">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 items-center gap-10 lg:mx-20 md:mx-8 mx-6 mt-20">
        {searchedMovie?.length > 0 ? (
          searchedMovie.map((movie: any) => (
            <div key={movie.id} className="">
              <CarouselCard data={movie} />
            </div>
          ))
        ) : (
          <div>
            <p>Null</p>
          </div>
        )}
      </div>
    </main>
  );
}
