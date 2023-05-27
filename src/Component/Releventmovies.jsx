import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist'

function Releventmovies({genre}) {

   let[movies,setMovies]=useState(null)
   let[error,setError]=useState(null)
  

    useEffect(()=>{
       
            fetch("http://localhost:3500/movies/")
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data)
                setMovies(data)
              
           })
           .catch((er)=>{setError(er)}
            
           )
            },[])

  return (
    <div className='relevent-movies'>
     {movies &&  <Movieslist movies={movies.filter((m)=>{return m.genre.includes(genre)})} title="Relevent movies"></Movieslist>}
    </div>
  )
}

export default Releventmovies
