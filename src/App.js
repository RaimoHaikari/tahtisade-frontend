import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import FrontPage from "./pages/FrontPage";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Critics from "./pages/Critics";
import Critic from "./pages/Critic";
import Genres from "./pages/Genres";
import Genre from "./pages/Genre";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const login = (user) => {
    setUser(user)
  }

  return (
    <Router>

      <section>
    
        <Navbar 
          user={user}
          toggle={toggle}
        />

        <Sidebar 
          isOpen={isOpen}
          toggle={toggle}
        />

        <Routes>
          <Route path="/genret/:id" element={<Genre />} />
          <Route path="/genret" element={<Genres />} />
          <Route path="/kriitikot/:id" element={<Critic />} />
          <Route path="/kriitikot" element={<Critics />} />
          <Route path="/elokuvat/:id" element={<Movie />} />
          <Route path="/elokuvat" element={<Movies />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>

        <Footer />

      </section>

    </Router>
  );
};

/*

        <Routes>
          <Route path="/genret" element={<Genres />} />
          <Route path="/kriitikot" element={<Critics />} />
          <Route path="/elokuvat/:id" element={<Movie movies={result.data.allMovies}/>} />
          <Route path="/elokuvat" element={<Movies movies={result.data.allMovies}/>} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>
*/

export default App;