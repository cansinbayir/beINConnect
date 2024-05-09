import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 50px;
  max-height: 600px;
  overflow-y: auto;

  h2 {
    margin: auto;
    color: #b5aeae;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`;

const MovieItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:hover::after {
    content: attr(data-movie-name);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px;
    border-radius: 5px;
    pointer-events: none;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const Movies = () => {

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
  const { movies } = useMovieContext();

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const location = useLocation();
  const category = location.state.category;

  const filteredMovies = movies.filter((movie) => {
    if (category === "Yerli Film" && movie.type === "Film" && movie.origin === "Yerli") {
      return true;
    } else if (category === "Yabancı Film" && movie.type === "Film" && movie.origin === "Yabancı") {
      return true;
    } else if (category === "Yerli Dizi" && movie.type === "Dizi" && movie.origin === "Yerli") {
      return true;
    } else if (category === "Yabancı Dizi" && movie.type === "Dizi" && movie.origin === "Yabancı") {
      return true;
    }
    return false;
  });
  

  return (
    <GridContainer>
      <h2>{category}</h2>
      {filteredMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          onClick={() => handleClick(movie.id)}
          data-movie-name={movie.name}
        >
          <MovieImage src={movie.imageUrl} alt={movie.name} />
        </MovieItem>
      ))}
    </GridContainer>
  );
};

export default Movies;
