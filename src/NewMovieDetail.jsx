
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../src/component/NewMoviePage.css";

const NewMovieDetail = () => {


    const { id } = useParams();
  //  const [data, setData] = useState({});
    const [movieDetails, setMovieDetails] = useState();
    const [videoKey, setVideoKey] = useState();
  
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    const defaultImage =
      "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  





      useEffect(() => {
        axios.get("http://localhost:8080/findAll").then((res) => {
          setMovieDetails(res.data[id] ? res.data[id] : []);
        });
      }, []);









  return (
    <div className="container py-5">
    <h1 className="text-center"> <strong>{movieDetails?.title}</strong></h1>
    <div className="videoContainer">
          <iframe classname="iframe" width="1280" height="720" src="https://www.youtube.com/embed/NLOp_6uPccQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="cardDetail">
      <div className="row g-0">
        <div className="cardContainer">
          <img
            src={
              movieDetails?.images[0]
                ? movieDetails?.images[0]
                : defaultImage
            }
            style={{height:'1000px' ,width:'800px'}}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
       
          <div className="card-body">
            <h1 className="card-title">About the Movie</h1>
            <p className="card-text">{movieDetails?.actors}</p>
          </div>
          <ul className="list-group ">
            <li className="list-group-item">
              {"Director : " + movieDetails?.director}
            </li>
            <li className="list-group-item">
              {"Genre : " + movieDetails?.genre}
            </li>
            <li className="list-group-item">
              {"Country : " + movieDetails?.country}
            </li>
          </ul>
        </div>
      </div>
  </div>
  )
}

export default NewMovieDetail
