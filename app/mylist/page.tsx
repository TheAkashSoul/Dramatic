"use client";

import CarouselCard from "@/components/common/CarouselCard";
import { useSelector } from "react-redux";

export default function MyList() {
  const myList = useSelector((data: any) => data.movies);

  return (
    <main className="flex items-center justify-center text-white min-h-screen">
      {myList?.length < 1 ? (
        <div>No Movies are added to My List</div>
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 items-center gap-10 lg:mx-20 md:mx-8 mx-6 mt-20">
          {myList?.map((movie: any) => (
            <div key={movie.movieId}>
              <CarouselCard data={movie.movie} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
