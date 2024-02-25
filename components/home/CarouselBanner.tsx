"use client";

import * as React from "react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Banner from "./Banner";
import { Movie, MovieArray } from "@/lib/types";

export default function CarouselBanner({
  trendingMovies,
}: {
  trendingMovies: MovieArray;
}) {
  const autoplay = useCallback(
    Autoplay({
      delay: 3000,
    }),
    []
  );
  return (
    <Carousel
      className="w-full"
      plugins={[autoplay]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {trendingMovies?.map((movie: Movie) => (
          <CarouselItem key={movie.id}>
            <Banner movies={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
