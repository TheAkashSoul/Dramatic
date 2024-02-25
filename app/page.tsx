import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchTrending,
  fetchUpcoming,
} from "@/actions/movieData";
import CarouselContainer from "@/components/common/CarouselContainer";
import CarouselBanner from "@/components/home/CarouselBanner";
import { MovieArray } from "@/lib/types";

export default async function Home() {
  const trendingMovie: MovieArray = await fetchTrending();

  const nowPlaying: MovieArray = await fetchNowPlaying();
  const popular: MovieArray = await fetchPopular();
  const topRated: MovieArray = await fetchTopRated();
  const upcoming: MovieArray = await fetchUpcoming();

  return (
    <main className="bg-[#000000] min-h-screen text-[#FFFFFF] mb-10 md:mb-20">
      <CarouselBanner trendingMovies={trendingMovie} />

      <div className="lg:-mt-40 md:-mt-40 -mt-20 z-40 relative">
        <CarouselContainer category="POPULAR MOVIES" data={popular} />
      </div>

      <div className="mt-10">
        <CarouselContainer category="NOW PLAYING" data={nowPlaying} />
      </div>

      <div className="mt-10">
        <CarouselContainer category="TOP RATED" data={topRated} />
      </div>

      <div className="mt-10">
        <CarouselContainer category="UPCOMING" data={upcoming} />
      </div>
    </main>
  );
}
