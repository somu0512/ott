import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import Movieslist from './Movieslist';
import Releventmovies from './Releventmovies';
import { useNavigate } from 'react-router-dom';

function Moviedetails() {
  let navigate=useNavigate();
    let{id}=useParams();
    let[movie,setMovie]=useState(null);
    let[error,setError]=useState(null);
    let[pending,setPending]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:3500/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data)
              setMovie(data)
              setPending(true)
           })
           .catch((er)=>{setError(er)}
            
           )
          },1000)
         },[id])
      
         let deleteMovie=()=>{
          
          fetch("http://localhost:3500/movies/"+id,{
            method:"DELETE"
          } )
          .then(()=>{navigate("/")})
          
         
         }
  return (
    <div className='moviedetail'>
      <h1>Watch complete movie</h1>      
      {
        movie&& <div className='movie-details'>
            <img src={movie.poster} alt="" height="300px" width="300px" />
            <h1>Hero :{movie.hero}</h1>
            <h1> Movie :{movie.moviename}</h1>
            <h1>Director :{movie.director}</h1>
            <p>languages:{movie.languages.join(" , ")}</p>
            <p>Gnre:{movie.genre}</p>
            <h3>Story </h3>
            <p>{movie.synopsis}</p>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
         <br />
          <button onClick={deleteMovie}>DeleteMovie</button> <br /><br />
          <Link to={`/edit/${movie.id}`}><button> Update</button></Link>
           
        </div>
      }
     
     {movie && 
      <Releventmovies genre={movie.genre}></Releventmovies>}
    </div>
  )
}

export default Moviedetails
