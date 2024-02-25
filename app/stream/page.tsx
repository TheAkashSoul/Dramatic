"use client";

import CarouselContainer from "@/components/common/CarouselContainer";
import ModalStream from "@/components/common/ModalStream";
import Image from "next/image";
import { addMovie, removeMovie } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import {
  MovieArray,
  MovieArrayItem,
  MovieData,
  MovieDetails,
  VideoItem,
} from "@/lib/types";

type props = {
  searchParams: {
    movie: number;
  };
};

type genres = {
  id: number;
  name: string;
};
export default function Stream({ searchParams: { movie } }: props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newMovie, setNewMovie] = useState<MovieDetails>();
  const [similarMovies, setSimilarMovies] = useState<MovieArray>();
  const [videoKey, setVideoKey] = useState<string>();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };

  const getMovieDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie}?append_to_response=videos`,
        options
      );
      const data = await res.json();

      if (data) {
        const index = data?.videos.results?.findIndex(
          (result: VideoItem) => result.type === "Trailer"
        );

        const key = newMovie?.videos.results[index].key;
        setVideoKey(key);
        setNewMovie(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSimilarMovie = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie}/similar`,
        options
      );
      const data = await res.json();

      if (data) {
        setSimilarMovies(data?.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getSimilarMovie();
  }, [movie]);

  const poster = newMovie?.poster_path
    ? `https://image.tmdb.org/t/p/original${newMovie.poster_path}`
    : "https://image.tmdb.org/t/p/original/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg";

  const dispatch = useDispatch();
  const addedList = useSelector((data: MovieData) => data?.movies);

  const isMovieAdded = addedList.some(
    (movie: MovieArrayItem) => movie?.movie?.id === newMovie?.id
  );

  const addMovieToMyList = () => {
    dispatch(addMovie(newMovie));
  };

  const removeMovieFromMyList = () => {
    dispatch(removeMovie(newMovie?.id));
  };

  const watchMovie = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="mt-20 text-white relative">
      <div className="flex md:flex-row flex-col items-start gap-10 mx-6 md:mx-8 lg:mx-20">
        <div className="w-fit overflow-hidden">
          <Image
            src={poster}
            alt="image"
            height={300}
            width={240}
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-[60%] mb-4">
          <h2 className="font-bold text-xl md:text-3xl mb-4">
            {newMovie?.original_title}
          </h2>
          <p className="text-xs md:text-sm mb-3 font-light">
            {newMovie?.overview}
          </p>
          <p className="font-medium text-base text-[#9F1D00]">GENRES</p>
          <div className="flex flex-row gap-3 flex-wrap">
            {newMovie?.genres?.map((genreName: genres) => (
              <p key={genreName.id} className="font-medium text-sm">
                {genreName.name}
              </p>
            ))}
          </div>

          <div className="flex flex-col w-fit md:flex-row gap-3 mt-3">
            <button
              onClick={watchMovie}
              className="bg-[#5436A9] px-4 py-2 rounded-full text-xs md:text-sm items-center justify-center flex flex-row gap-1"
            >
              WATCH
              <FaPlay size={16} />
            </button>
            {isMovieAdded ? (
              <button
                onClick={removeMovieFromMyList}
                className="bg-[#5C5C5C] backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm items-center justify-center flex flex-row gap-1"
              >
                Remove
                <FiMinus size={16} />
              </button>
            ) : (
              <button
                onClick={addMovieToMyList}
                className="bg-[#5C5C5C] backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm items-center justify-center flex flex-row gap-1"
              >
                MY LIST
                <FaPlus size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-col w-full lg:w-[40%]">
            <div className="flex flex-row flex-wrap gap-3 mt-10 mb-3 items-center">
              <p className="text-[#D7B438] font-medium text-lg">
                {newMovie?.vote_average.toFixed(1)}
              </p>
              <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
                U/A
              </p>
              <p className="text-[#FFFFFF] font-medium text-base border border-white px-1">
                4K
              </p>
              <p className="text-[#FFFFFF] font-medium text-sm">
                {newMovie?.release_date}
              </p>
            </div>
            <div className="flex flex-col mb-3">
              <p className="font-semibold text-base text-[#9F1D00]">AUDIO</p>
              <p className="font-medium text-sm">
                {newMovie?.original_language}
              </p>
            </div>
          </div>
        </div>
      </div>

      {similarMovies && similarMovies?.length > 0 && (
        <div className="my-10 md:mt-20">
          <div className="mt-10">
            <CarouselContainer category="MORE LIKE THIS" data={similarMovies} />
          </div>
        </div>
      )}
      <div className="">
        {showModal && (
          <ModalStream
            title={newMovie?.original_title || ""}
            overview={newMovie?.overview || ""}
            videoKey={videoKey || ""}
            closeModal={watchMovie}
          />
        )}
      </div>
    </main>
  );
}
