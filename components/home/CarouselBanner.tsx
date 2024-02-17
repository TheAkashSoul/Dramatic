"use client";

import * as React from "react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banner from "./Banner";
import { Movie } from "@/lib/types";

export default function CarouselBanner({
  trendingMovies,
}: {
  trendingMovies: any;
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
        {trendingMovies?.map((movie: { id: React.Key | null | undefined }) => (
          <CarouselItem key={movie.id}>
            <Banner movies={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
