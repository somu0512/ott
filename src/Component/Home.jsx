import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist';

const Home = () => {
  let[movies,setMovies]=useState(null);
  let[pending,setPending]=useState(null);
  let[error,setError]=useState(null);
  useEffect(()=>{
       
    if( localStorage.getItem("fav")==null )
    {
        localStorage.setItem("fav" , "[]")
    }
    

    setTimeout(()=>{
      fetch("http://localhost:3500/movies")
      .then((res)=>{return res.json()})
      .then((data)=>{console.log(data)
        setMovies(data)
        setPending(true)
     })
     .catch((er)=>{setError(er)}
      
     )
    },1000)
     


  },[])

  return (
    <div className="home">
       {!movies && <h1>Loading...............</h1>}
       {movies && <Movieslist movies={movies} title="All movies"></Movieslist>}
       {movies && <Movieslist movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action movies"></Movieslist>}
       {movies && <Movieslist movies={movies.filter((m)=>{return m.rating >8.5})} title="Top rated movies"></Movieslist>}
     
     </div>
  )
}

export default Home
