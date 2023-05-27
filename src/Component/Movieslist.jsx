import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Movieslist = ({movies,title}) => {
  
  let[favid,setFavid]=useState([]);
  let[altered,setAltered]=useState(0);
  useEffect(()=>{
    let fav= JSON.parse(localStorage.getItem("fav"));
    setFavid(fav.map((m)=>{return m.id }))
    console.log("usefect executed")

  },[altered])
  let Add = (v)=>{
      let fav = JSON.parse(localStorage.getItem("fav"));
      fav.push(v);
      fav = JSON.stringify(fav);
      localStorage.setItem("fav" , fav);
      setAltered(altered+1);

      alert("movie added to favorites list")
     }

  let remove=(v)=>{
      
    let fav=JSON.parse(localStorage.getItem("fav"));
     fav=fav.filter((m)=>{return m.id!=v.id });
         localStorage.setItem("fav" ,JSON.stringify(fav));
          setAltered(altered+1);
          alert("movie is removed from favorites")
  }
  //  let wish=(v)=>{
  //   let fav=JSON.parse(localStorage.getItem("fav"));
  //    b=fav.some((m)=>{return m.id==v.id})
  //  }
       

  
  return (
    <div className='movies-list'>
       <h1 id="title">{title}</h1>
     <div className='movies'>
         { movies.map((v,i,a)=>{
              return(
                 <div className='movie'>
                  {favid.includes(v.id) ? <button onClick={()=>{remove(v)}} id="remove">💓 </button>  : <button onClick={()=>{Add(v)}} id="add">💛  </button>
                 }
             
                <Link to={`/moviedetails/${v.id}`}>
                <div className='movi'>
                  <img src={v.poster} alt="lo"  />
                  <h3> Movie :{v.moviename}</h3>
                  <h4> Hero  :{v.hero}</h4>
                  <h4>Heroin : {v.heroine}</h4>
                  <h4> Gener :{v.genre}</h4>
                
                 </div>
               </Link></div>
               )
                  } )}

</div>
    </div>
  )
}

export default Movieslist
