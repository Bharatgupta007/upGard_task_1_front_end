import { Movie } from './Movie';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Navigate
} from "react-router-dom";
// import MovieDetail from './MovieDetail';
// import AddNew from './AddNew'
import { lazy, Suspense, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';


const MovieDetail = lazy(()=> import("./MovieDetail"))
const AddNew = lazy(()=> import("./AddNew"))
const NewMovieDetail = lazy(()=> import("./NewMovieDetail"))
const NewMovieMain = lazy(()=> import("./NewMovieMain"))



function App() {



  // const [data , setData] = useState([]);


  return (
    <>
    <div className = 'app'>
      <BrowserRouter>
      <Breadcrumbs/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Navigate to = "/home"/>}/>
        <Route path='/detail' element={<Navigate to = "/home"/>}/>
        <Route path='/home' element={ <Movie/>}/>
        <Route path='/home/detail' element={<Navigate to = "/home"/>}/>
        <Route path='/home/add-new' element={<AddNew/>}/>
        <Route path='/home/detail/:id' element={ <MovieDetail/>}/>
        <Route path='/home/new-detail' element = {<NewMovieDetail/>}/>
        <Route path='/home/new-movie-main' element={ <NewMovieMain/>}/>
        <Route path='/home/new-movie-detail/:id' element={<NewMovieDetail/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
