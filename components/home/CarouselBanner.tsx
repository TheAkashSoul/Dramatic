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

export default function CarouselBanner() {
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
        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>

        <CarouselItem>
          <Banner />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
