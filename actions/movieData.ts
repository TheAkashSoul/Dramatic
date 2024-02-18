import { getApiResponse } from "@/lib/requests";

export const fetchTrending = async () => {
  const data = await getApiResponse("/trending/movie/week");
  const trending = data.results;

  return trending;
};

export const fetchNowPlaying = async () => {
  const data = await getApiResponse("/movie/now_playing");
  const NowPlaying = data.results;

  return NowPlaying;
};

export const fetchPopular = async () => {
  const data = await getApiResponse("/movie/popular");
  const Popular = data.results;

  return Popular;
};

export const fetchTopRated = async () => {
  const data = await getApiResponse("/movie/top_rated");
  const TopRated = data.results;

  return TopRated;
};

export const fetchUpcoming = async () => {
  const data = await getApiResponse("/movie/upcoming");
  const Upcoming = data.results;

  return Upcoming;
};

// export const fetchMovieData = async (external_id: number) => {
//   try {
//     const data = await getApiResponse(`/find/${external_id}?external_source=`);
//     const MovieData = data.results;

//     return MovieData;
//   } catch (error) {
//     console.log(error);
//   }
// };
