import { fetchTrending } from "@/actions/movieData";
import CarouselContainer from "@/components/common/CarouselContainer";
import CarouselBanner from "@/components/home/CarouselBanner";

export default async function Home() {
  const trendingMovie = await fetchTrending();

  return (
    <main className="bg-[#000000] min-h-screen text-[#FFFFFF] mb-32">
      <CarouselBanner trendingMovies={trendingMovie} />
      <div className="lg:-mt-40 md:-mt-40 -mt-20 z-40 relative">
        <CarouselContainer category="TRENDING" />
      </div>

      <div className="mt-10">
        <CarouselContainer category="MOVIES" />
      </div>

      <div className="mt-10">
        <CarouselContainer category="TV SHOWS" />
      </div>

      <div className="mt-10">
        <CarouselContainer category="RECOMMENDED FOR YOU" />
      </div>
    </main>
  );
}
