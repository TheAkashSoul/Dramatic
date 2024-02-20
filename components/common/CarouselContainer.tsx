import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarouselCard from "./CarouselCard";

type props = {
  category: string;
  data: any;
};

export default function CarouselContainer({ category, data }: props) {
  return (
    <main className="lg:mx-20 mx-6">
      <div className="my-2 pl-2">
        <h2 className="font-semibold lg:text-xl md:text-lg text-md">
          {category}
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data?.map((movie: any) => (
            <CarouselItem
              key={movie.id}
              className="basis-2/5 md:basis-1/5 lg:basis-1/6"
            >
              <div className="p-1">
                <CarouselCard data={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 lg:-left-8 hidden md:flex" />
        <CarouselNext className="absolute right-0 lg:-right-8 hidden md:flex" />
      </Carousel>
    </main>
  );
}
