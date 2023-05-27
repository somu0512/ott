import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist';
let Sction = ()=>{
  let[movies,setMovies]=useState(null);
  let[pending,setPending]=useState(null);
  let[error,setError]=useState(null);
  useEffect(()=>{

    setTimeout(()=>{
      fetch("http://localhost:3500/movies")
      .then((res)=>{return res.json()})
      .then((data)=>{console.log(data)
       let d =  data.filter((m)=>{return m.genre.includes("action")})
        setMovies(d)
        setPending(true)
     })
     .catch((er)=>{setError(er)}
      
     )
    },3000)
     


  },[])

  return (
    <div className="home">
       {!movies && <h1>Loading...............</h1>}
       {movies && <Movieslist movies={movies} title="action movies"></Movieslist>}
     
     </div>
  )
}

export default Sction   