import React from "react";
import { useEffect } from "react";
import "./App.css";
import { movieData } from "./data";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const MovieDetail = () => {

  const { id } = useParams("id");
  console.log(id);
  const [val, newVal] = useState(id);
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/findAll").then((res) => {
      setData(res.data[id] ? res.data[id] : []);
    });
  }, []);

  function deleteCard(id) {
    axios.delete("http://localhost:8080/delete/" + id).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
      <div className="container">
        <div className="deletebutton">
          <button
            onClick={() => {
              console.log(data.id);
              deleteCard(data.id);
            }}
          >
          <Link to={"/"}>Delete this Movie</Link>  
            </button>
        </div>
        <h1>Title = {data?.title}</h1>
        <h1>Year = {data?.year}</h1>
        <h1>Actors = {data?.actors}</h1>
        <h1>Director = {data?.director}</h1>
        <img
          style={{ padding: "10px" }}
          src={data.images ? data.images[1] : ""}
          alt="Avatar"
          height="400px"
          width="400px"
        />

        <img
          style={{ padding: "10px" }}
          src={data.images ? data.images[2] : ""}
          alt="Avatar"
          height="400px"
          width="400px"
        />
      </div>
    </>
  );
};

export default MovieDetail;
