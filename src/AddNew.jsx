import React, { useState } from 'react'
import "./App.css";

import axios from 'axios';
import { Link } from 'react-router-dom';


const AddNew = () => {
  const url="http://localhost:8080/addCard";
  const[data, setData] = useState({
    title:"",
    country:"",
    year:"",
    actors:"",
    director:"",
    genre:"",
    image1:"",
    image2:"",
    image3:""
  })




  var images1 = [];
  images1.push(data.image1);
  images1.push(data.image2);
  images1.push(data.image3);

  var div1 = document.getElementById('heading'); 
  var div2 = document.getElementById('success');
  

  function submit(e){
    e.preventDefault();
    axios.post(url,{
      title: data.title,
      country: data.country,
      year : data.year,
      genre: data.genre,
      actors: data.actors,
      director: data.director,
      images: images1
    }).then(res=>{
      if(res.status==200)
      {
         div1.style.visibility = 'hidden'
         div2.style.visibility = 'visible'

         document.getElementById('title').value = ''
         document.getElementById('country').value = ''
         document.getElementById('genre').value = ''
         document.getElementById('year').value = ''
         document.getElementById('actors').value = ''
         document.getElementById('director').value = ''
         document.getElementById('image1').value = ''
         document.getElementById('image2').value = ''
         document.getElementById('image3').value = ''


      }
      console.log(res.data);
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
  <>


  <div class="main-block">
      <div class="left-part">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <div id="heading">
        <h1 style={{margin: "0 0 20px" , color: "#1c87c9"}}> Add New Movie </h1>
        </div>
        <div id="success" style={{visibility: 'hidden'}}>
        <h1 style={{margin: "0 0 20px" , color: "#1c87c9"}}> SuccessFully Added </h1>
        </div>
        <div class="info">
          <input class="fname" type="text" onChange={(e) => handle(e)} value={data.title} id="title" placeholder="Title"/>
          <input type="text" onChange={(e) => handle(e)} value={data.country} id="country" name="name" placeholder="Country"/>
          <input type="text" onChange={(e) => handle(e)} value={data.year} id="year" name="name" placeholder="Year"/>
          <input type="text" onChange={(e) => handle(e)} value={data.actors} id="actors" name="name" placeholder="Actors"/>
          <input type="text" onChange={(e) => handle(e)} value={data.director} id="director" name="name" placeholder="Director"/>
          <input type="text" onChange={(e) => handle(e)} value={data.genre} id="genre" name="name" placeholder="Genre"/>
          <input type="text" onChange={(e) => handle(e)} value={data.image1} id="image1" name="name" placeholder="Image 1"/>
          
          {data.image1?<img src={data.image1} alt='Enter Link' style={{height:'200px' , width:'200px'}}  />:""}
          <input type="text" onChange={(e) => handle(e)} value={data.image2} id="image2" name="name" placeholder="Image 2"/>
          {data.image2?<img src={data.image2} alt='Enter Link' style={{height:'200px' , width:'200px'}}  />:""}
          <input type="text" onChange={(e) => handle(e)} value={data.image3} id="image3" name="name" placeholder="Image 3"/>
          {data.image3?<img src={data.image3} alt='Enter Link' style={{height:'200px' , width:'200px'}}  />:""}
          </div>
        <button type="submit" onClick={submit}>Submit</button>
      </form>
    </div>
  </>
  )
}


export default AddNew
