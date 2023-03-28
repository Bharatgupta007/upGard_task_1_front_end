import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../src/component/MovieCard";
import "../src/component/NewMoviePage.css";

// const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";

const FEATURED_API = `http://localhost:8080/findAll`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data)
        console.log('====================================');
        console.log(res.data);
        console.log('====================================');
      })
      .catch((err) => console.log(err));
  };



  return (
    <>
      <div className="moviecard" >
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;