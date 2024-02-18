import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchTrending,
  fetchUpcoming,
} from "@/actions/movieData";
import CarouselContainer from "@/components/common/CarouselContainer";
import CarouselBanner from "@/components/home/CarouselBanner";

export default async function Home() {
  const trendingMovie = await fetchTrending();

  const nowPlaying = await fetchNowPlaying();
  const popular = await fetchPopular();
  const topRated = await fetchTopRated();
  const upcoming = await fetchUpcoming();

  return (
    <main className="bg-[#000000] min-h-screen text-[#FFFFFF] mb-32">
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
