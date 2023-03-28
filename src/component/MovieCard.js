import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, images,actors, id }) => {
 
  let navigate = useNavigate();
  // const setVoteClass = (vote) => {
  //   if (vote >= 8) {
  //     return "green";
  //   } else if (vote >= 6) {
  //     return "orange";
  //   } else {
  //     return "red";
  //   }
  // };

  return (
    
    <div
      className="movie"
    >
      <img src={images[0] ? images[0] : defaultImage} alt="" />
      <div>
        <h2 style={{color:'white', padding:'20px'}}>{title}</h2>
      </div>
      <div className="movie-over">
        <h2>Actors</h2>
        <p>{actors}</p>
      </div>
    </div>

  );
};

export default MovieCard;