
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movieslist from './Movieslist';

function Search() {
  let{searchword}=useParams();
  let[movies,setMovies]=useState(null);
  let[error,setError]=useState(null);
  let[pending,setPending]=useState(true)

  useEffect(()=>{
    setMovies(null)
    setPending(null)

    setTimeout(()=>{
      fetch("http://localhost:3500/movies")
      .then((res)=>{return res.json()})
      .then((data)=>{
        let d=data.filter((m)=>{
          return (m.moviename.toLowerCase().startsWith(searchword.toLowerCase()))||
        (m.genre.toLowerCase()===searchword.toLowerCase())||
        (m.languages.includes(searchword))
        
        })
       
       
        console.log(data)
        setMovies(d)
        setPending(false)
      
     })
     .catch((er)=>{setError(er)
      setPending(false)
    }
     
      
     )
    },1000)
  console.log(searchword)

  },[searchword])

  


  
  return (
    <div>
      
      <h1>search result </h1>
      
     {movies && <Movieslist movies={movies} title="search result"></Movieslist>}
    
    </div>
  )
}

export default Search
