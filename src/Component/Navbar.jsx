import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const Navbar = () => {

  let{id}=useParams();
  let[searchword,setSearchword]=useState("");
  let[movienames,setMoviename]=useState([]);
  let[menu,setMenu]=useState(false);
  let R=useRef()

useEffect(()=>{
  fetch("http://localhost:3500/movies/")
.then((res)=>{return res.json()})
.then((data)=>{
  let names=data.map((m)=>{return { moviename :m.moviename,id:m.id}})
  let filteredNames=names.filter((movie)=>{return  movie.moviename.toLowerCase().startsWith(searchword.toLowerCase())})
   
  setMoviename(filteredNames)
})

},[searchword])



  return (
    <nav>
    <div id='logo'>
      <Link to="/"><h1>Movies 🕷 </h1></Link>
        
    </div>
    <div id='search-bar'>
        <input type="search" value={searchword} placeholder='search for movie'
        onChange={(e)=>{ setSearchword(e.target.value)}}
        />
        <Link to={`/search/${searchword}`}>
        <button >search</button>
        </Link>
        
    </div>

    <div id="fav-movie">
                <a href="/fav">Favorite movies</a>
    </div>
    <div id="add-movie">
       <Link to="/addmovie">Add movie</Link>
       </div>

       <div id='hamberger'>
        <span onClick={()=>{setMenu(!menu)}}>
          {menu==false ?<i class='bx bx-menu'></i>:
        <i class='bx bx-menu-alt-right'></i>}
        </span>

       </div>
     {menu && <div id="menu">
           <div id="menu-fav-movie">
                <a href="/fav">Favorite movies</a>
            </div>
            <div id="menu-add-movie">
            <Link to="/addmovie">Add movie</Link>
             </div>

       </div>}
      
      {searchword!="" && <div className="suggestionbox">
        <ul>
         {movienames.map((name)=>{return (
         <Link to={`/moviedetails/${name.id}`} onClick={()=>{setSearchword("")}}>
         <li >{name.moviename}</li>
         </Link>
         
         )})}
          
        </ul>
       </div>}
     
    </nav>
  )
}

export default Navbar
