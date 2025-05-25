import React from "react";
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import './pages/movie.css';
import ANIME from "./pages/ANIME";
import SERIES from "./pages/SERIES";
import HOME from "./pages/Home";
import CARTOON from "./pages/CARTOON";
import LOGIN from "./pages/Login";
import SINGIN from "./pages/Singup";




const App = () =>{
return( 
   <Router>

  <div>
    <nav>
      <ul>
        <li><Link to="/ANIME"><i class="fa-solid fa-dragon"></i>ANIME</Link></li>
        <li><Link to="/SERIES"><i class="fa-solid fa-display"></i>SERIES</Link></li>
        <li><Link to="/"><i class="fa-solid fa-house"></i>HOME</Link></li>
        <li><Link to="/CARTOON"><i class="fa-duotone fa-solid fa-hat-wizard theme-ravenclaw"></i>CARTOON</Link></li>
        <li><Link to="/LOGIN"><i class="fa-solid fa-right-to-bracket"></i>LOGIN</Link></li>
        <li><Link to="/SINGIN"><i class="fa-solid fa-user-plus"></i>SINGIN</Link></li>
      </ul>
    </nav>

  <Routes>
      <Route path="/ANIME" element={<ANIME/>}></Route>
      <Route path="/SERIES" element={<SERIES/>}></Route>
      <Route path="/" element={<HOME/>}></Route>
      <Route path="/CARTOON" element={<CARTOON/>}></Route>
      <Route path="/LOGIN" element={<LOGIN/>}></Route>
      <Route path="/SINGIN" element={<SINGIN/>}></Route>
  </Routes>


  </div>


</Router>
)
}
export default App



