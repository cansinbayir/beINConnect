import React, { createContext, useContext, useState, ReactNode } from "react";

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

const movies: Movie[] = [
  {
    id: 1,
    name: "Inception",
    category: "Science Fiction",
    releaseYear: 2010,
    imdbRating: 8.8,
    imageUrl:
      "https://fastly.picsum.photos/id/17/1200/800.jpg?hmac=W1FdZFwUoRFthUAoHLp6dL5GVlRBSSPhebui7EC3J6Q",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    category: "Drama",
    releaseYear: 1994,
    imdbRating: 9.3,
    imageUrl:
      "https://fastly.picsum.photos/id/1063/1200/800.jpg?hmac=wtiMesctJumSUMpQq2GJRjf8BIEZseaAhlwCIABw3jo",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 3,
    name: "The Godfather",
    category: "Crime",
    releaseYear: 1972,
    imdbRating: 9.2,
    imageUrl:
      "https://fastly.picsum.photos/id/172/1200/800.jpg?hmac=X2K80TvzIMiztjjQ8OZ_oRxgzQ152C17h-bO38Pv_J0",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 4,
    name: "The Dark Knight",
    category: "Action",
    releaseYear: 2008,
    imdbRating: 9.0,
    imageUrl:
      "https://fastly.picsum.photos/id/404/1200/800.jpg?hmac=CkiGrIqf-5nyZD_Alw5LL7bTMRLx6IZ7FfFN0qk5iwI",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 5,
    name: "Pulp Fiction",
    category: "Crime",
    releaseYear: 1994,
    imdbRating: 8.9,
    imageUrl:
      "https://fastly.picsum.photos/id/421/1200/800.jpg?hmac=CxR6D1FjEFfChXApgk7PNATPSJNL64IduYTud8pp8IQ",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 6,
    name: "Forrest Gump",
    category: "Drama",
    releaseYear: 1994,
    imdbRating: 8.8,
    imageUrl:
      "https://fastly.picsum.photos/id/625/1200/800.jpg?hmac=DVVF3-Pm4j37JPxGJfR8U7vImDVHVGoil_nEou6Da0Y",
    type: "Film",
    origin: "Yerli",
  },
  {
    id: 7,
    name: "Fight Club",
    category: "Drama",
    releaseYear: 1999,
    imdbRating: 8.8,
    imageUrl:
      "https://fastly.picsum.photos/id/643/1200/800.jpg?hmac=C3YE12wCJcAGHz3NQPG0FEfnke2NRwjiew6EJXE3Tdc",
    type: "Dizi",
    origin: "Yabancı",
  },
  {
    id: 8,
    name: "The Matrix",
    category: "Action",
    releaseYear: 1999,
    imdbRating: 8.7,
    imageUrl:
      "https://fastly.picsum.photos/id/950/1200/800.jpg?hmac=J2jDHCEYUouCqT3bD6bWaiL5bshRILUMBVOcMeTMr1M",
    type: "Dizi",
    origin: "Yerli",
  },
  {
    id: 9,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    category: "Fantasy",
    releaseYear: 2001,
    imdbRating: 8.8,
    imageUrl:
      "https://fastly.picsum.photos/id/399/1200/800.jpg?hmac=1PVH9vTH9E0HktPeVtrgrt0eyZjacBSp6_CMdTyBWWU",
    type: "Dizi",
    origin: "Yabancı",
  },
  {
    id: 10,
    name: "Interstellar",
    category: "Science Fiction",
    releaseYear: 2014,
    imdbRating: 8.6,
    imageUrl:
      "https://fastly.picsum.photos/id/630/1200/800.jpg?hmac=kGNqbMe8xIwN7Brd2PQVhPun7CZdq5jH37CXLlK-97U",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 11,
    name: "Inception 2",
    category: "Science Fiction",
    releaseYear: 2022,
    imdbRating: 9.0,
    imageUrl:
      "https://fastly.picsum.photos/id/256/1200/800.jpg?hmac=iR_Aknw6Rhmyx6DAT35aupPELfvN1xZqfFT0t6cG_jU",
    type: "Film",
    origin: "Yerli",
  },
  {
    id: 12,
    name: "The Godfather 2",
    category: "Crime",
    releaseYear: 2023,
    imdbRating: 9.5,
    imageUrl:
      "https://fastly.picsum.photos/id/217/1200/800.jpg?hmac=AkLD-Bg6ztVvkGTnh9eHfAUBIGlwXU7JMT6UmMJjXR4",
    type: "Film",
    origin: "Yerli",
  },
  {
    id: 13,
    name: "The Dark Knight 2",
    category: "Action",
    releaseYear: 2025,
    imdbRating: 9.2,
    imageUrl:
      "https://fastly.picsum.photos/id/217/1200/800.jpg?hmac=AkLD-Bg6ztVvkGTnh9eHfAUBIGlwXU7JMT6UmMJjXR4",
    type: "Film",
    origin: "Yabancı",
  },
  {
    id: 14,
    name: "Forrest Gump 2",
    category: "Drama",
    releaseYear: 2024,
    imdbRating: 8.9,
    imageUrl:
      "https://fastly.picsum.photos/id/217/1200/800.jpg?hmac=AkLD-Bg6ztVvkGTnh9eHfAUBIGlwXU7JMT6UmMJjXR4",
    type: "Dizi",
    origin: "Yerli",
  },
  {
    id: 15,
    name: "The Matrix 2",
    category: "Action",
    releaseYear: 2026,
    imdbRating: 8.8,
    imageUrl:
      "https://fastly.picsum.photos/id/217/1200/800.jpg?hmac=AkLD-Bg6ztVvkGTnh9eHfAUBIGlwXU7JMT6UmMJjXR4",
    type: "Dizi",
    origin: "Yabancı",
  },
];

interface MovieContextType {
  movies: Movie[];
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movieList, setMovieList] = useState<Movie[]>(movies);

  return (
    <MovieContext.Provider value={{ movies: movieList }}>
      {children}
    </MovieContext.Provider>
  );
};
