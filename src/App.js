
import './App.css';
import{BroserRouter,Routes,Route, BrowserRouter} from "react-router-dom"

import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Addmovie from './Component/Addmovie';
import Movieslist from './Component/Movieslist';
import Sction from './Component/Sction';
import Moviedetails from './Component/Moviedetails';
import Favrtmovies from './Component/Favrtmovies';
import Search from './Component/Search';
import Editmovie from './Component/Editmovie';


function App() {
  console.log("hi")
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
            console.log("app .js  s s")
            console.log("kokok")
            <Route path='/addmovie' element={ <Addmovie></Addmovie>}></Route>
            <Route path='/actionmovie' element={<Sction/>}></Route>
            <Route path="/moviedetails/:id" element={<Moviedetails/>}></Route>
            <Route path="/fav" element={<Favrtmovies></Favrtmovies>}></Route>    
            <Route path="/search/:searchword" element={<Search></Search>}></Route>  
            <Route path="/edit/:id" element={<Editmovie></Editmovie>}></Route>      

       </Routes>
       </div>
    </BrowserRouter>
   
  );
}

export default App;
