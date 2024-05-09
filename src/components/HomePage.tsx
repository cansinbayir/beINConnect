import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieContext } from "../context/MovieContext";

import Banner from "../elements/Banner";

import "../style/Home.scss";


interface Movie {
  id: number;
  name: string;
  category: string;
  releaseYear: number;
  imdbRating: number;
  imageUrl: string;
  type: "Film" | "Dizi";
  origin: "Yerli" | "Yabancı";
}

const HomePage: React.FC = () => {
  
  const { movies } = useMovieContext();

  const groupedMovies = movies.reduce((acc, movie) => {
    if (!acc[movie.category]) {
      acc[movie.category] = [];
    }
    acc[movie.category].push(movie);
    return acc;
  }, {} as { [key: string]: Movie[] });

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };


  return (
    <div className="grid-container">
      <Banner></Banner>
      {Object.entries(groupedMovies).map(([category, movies]) => (
        <div key={category} className="category">
          <h2>
            {category.includes(" ")
              ? category.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {word}
                    {index !== category.split(" ").length - 1 && <br />}
                  </React.Fragment>
                ))
              : category}
          </h2>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="movie-grid"
          >
            {movies.map((movie, index) => (
              <SwiperSlide
                movie-name={movie.name}
                key={index}
                onClick={() => handleClick(movie.id)}
              >
                <img src={movie.imageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
