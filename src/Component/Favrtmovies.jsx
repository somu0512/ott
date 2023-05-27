import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist';

function Favrtmovies() {
  let[favoriteMovies,setFavrt]=useState(null);


  useEffect(()=>{
    setFavrt(JSON.parse(localStorage.getItem("fav")))

  })


  return (
    <div>
      {!favoriteMovies && <h1>loading </h1>}
  {favoriteMovies &&  <Movieslist movies={favoriteMovies} title="favrt movies"></Movieslist>}

    </div>
  )
}

export default Favrtmovies
