import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Addmovie() {
  let navigate=useNavigate();

  let moviename= useRef();
  let hero=useRef();
  let heroine=useRef();
  let director=useRef();
  let genre=useRef();
  let poster=useRef();
 let trailer=useRef();
 let release=useRef();
 let rating=useRef();
 let synopsis=useRef();

 let handleclick=(e)=>{
  e.preventDefault()
  // create new movie object
  let newMovie = {
      moviename : moviename.current.value,
      hero : hero.current.value,
      heroine : heroine.current.value,
      director : director.current.value,
      languages:[],
      genre:  genre.current.value,
      poster: poster.current.value,
      trailer: trailer.current.value,
      release: release.current.value,
      rating: rating.current.value,
      synopsis: synopsis.current.value
  }
  let options = document.getElementsByName("lang");
  for(let i = 0; i < options.length; i++) 
  {
      if(options[i].checked==true)
      {
          newMovie.languages.push( options[i].value )
      }  
  }

  // send the movie obj to the database
  fetch("http://localhost:3500/movies" , 
                                          {
                                              method : "POST",
                                              headers : {"Content-Type": "application/json"},
                                              body : JSON.stringify(newMovie)
                                          })
  .then(()=>{
      alert("New movie added to database");
      navigate("/");
  })





  

 }

  return (
    <>
    <div className='addmovie'>
    <div id='addmovie'>
        <h1 id="y" align="center">Add movie details </h1>
      <form onSubmit={handleclick}>
        <div id="search">
        <input type="text" placeholder='enter movie name' ref={moviename} /><br />
      <input type="text" placeholder='enter hero name' ref={hero} /><br />
      <input type="text" placeholder='enter heroine name' ref={heroine} /><br />
      <input type="text" placeholder='enter director name'  ref={director}/><br />

        </div>
    
    <fieldset>
    
      <legend align="center">selct  languages</legend>
   <input type="checkbox" name='lang' value="kannada" id="k"/><label for="k">kannada</label> 
   
      <input type="checkbox"  name='lang' value="Hindi" id="h"/> <label for="h">Hindi</label>
      <input type="checkbox"  name='lang' value="Telugu" id="t" /> <label for="t">Telugu</label>
      <input type="checkbox"  name='lang' value="Tamil" id="tm" /> <label  for="tm">Tamil</label>
      <input type="checkbox"  name='lang' value="Malayalam"  id="m"/><label for="m" >Malayalam</label>
      
    
    
     </fieldset>
     {/* <input type="text" placeholder='enter languages' /><br /> */}

     <div id="search">   
     
     <input type="text" placeholder='type of genre'  ref={genre}/><br />
    <input type="url" placeholder='link for poster' ref={poster} /><br />
    <input type="url" placeholder='link for trailer'  ref={trailer}/><br />
    <input type="number" min="1950" max="2024" placeholder='enter year'  ref={release}/><br />
    <input type="number" step="0.1" min="1" max="2024" placeholder='enter rating' ref={rating} /><br />
       </div>
  
     <label htmlFor="">Synopsis </label>
    <textarea name="" id="" cols="90" rows="10" ref={synopsis}></textarea><br></br>
   
    <input type="submit" value="Addmovie"  id="submit"/>
      </form>

    </div>
    </div>
    
    </>
  )
}

export default Addmovie
