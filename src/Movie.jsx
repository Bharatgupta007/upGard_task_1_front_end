import React from "react";
import { useEffect } from "react";
import "./App.css";
import { movieData } from "./data";
import axios from "axios";
import { useState } from "react";
import { MovieDetail } from "./MovieDetail";
import { Link, useHref } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const Movie = () => {
  //google login code
  const google = window.google;
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var obj = jwt_decode(response.credential);
    console.log(obj);
    setUser(obj);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "308214293251-cfhlpupp0mlh0h5s5qnf7aes6dnge4fj.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  //google login code end

  const [val, newVal] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/findAll").then((res) => {
      newVal(res.data);
      setFilter(res.data);
    });
  }, []);
  var timerId;
  var debounceFunction = (func, delay) => {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };

  function search() {
    let arr = [];
    let input = document.getElementById("search").value;
    console.log(input);
    let noResults = true;
    if (val.length > 0) {
      console.log(val);
      for (var i = 0; i < val.length; i++) {
        if (!val[i].title.toLowerCase().includes(input)) {
          continue;
        } else {
          arr.push(val[i]);
          noResults = false;
        }
      }
    }
    setFilter(arr);
    let listContainer = document.getElementById("list");
    listContainer.style.display = noResults ? "none" : "block";
  }

  //search by Genre

  function searchByGenre() {
    let arr = [];
    let input = document.getElementById("cars").value;
    console.log(input);
    let noResults = true;
    if (val.length > 0) {
      console.log(val);
      for (var i = 0; i < val.length; i++) {
        if (!val[i].genre.toLowerCase().includes(input)) {
          continue;
        } else {
          arr.push(val[i]);
          noResults = false;
        }
      }
    }
    setFilter(arr);
    let listContainer = document.getElementById("list");
    listContainer.style.display = noResults ? "none" : "block";
  }



  return (
    <>
      <div className="NavBar">
        

        <div className="app">
          <div id="signInDiv"></div>
          {Object.keys(user).length != 0 && (
            <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
          )}

          {user && (
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
          )}
        </div>

        <input
          id="search"
          type="text"
          className="input"
          placeholder="Search..."
          onChange={() => {
            debounceFunction(search, 2000);
          }}
        />

        <button id="addNewMobile">
          <Link className="addNew" to={"/home/add-new"}>
            Add New Movie
          </Link>
        </button>
        <div id="list"></div>


  <label for="cars"><strong style={{fontSize: '50px'}}>Choose a car:</strong></label>

<select name="cars" id="cars">
  <option value="">All Movie</option>
  <option value="action">Action</option>
  <option value="adventure">Adventure</option>
  <option value="fantasy">Fantasy</option>
  <option value="romantic">Romantic</option>
</select>
<button onClick={()=>{
  searchByGenre();
}}>Submit</button>
      </div>

      <div className="movie-container">
        {filter.map((data, key) => {
          return (
            <div key={key} className="ex1">
              {
                <Link
                  className="card"
                  to={`/home/detail/${key}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {/* <Link to={`/detail/${key}`} state = {{data: data.Country}}>
                                    
                                </Link> */}
                  <img
                    src={data.images[0]}
                    alt="Avatar"
                    height="200px"
                    width="200px"
                  />
                  <div className="container1">
                    <h4>
                      <b>{data.title}</b>
                    </h4>
                    <p>{data.director}</p>
                    <p>{data.country}</p>
                    <p>{data.year}</p>
                    <p>{data.genre}</p>
                  </div>
                </Link>
              }
            </div>
          );
        })}
      </div>
    </>
  );
  function movieD(genre, detail, imageSrc, country) {
    var arr = [genre, detail, imageSrc, country];
  }
};
