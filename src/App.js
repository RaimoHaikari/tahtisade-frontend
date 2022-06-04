import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import { gql, useQuery } from "@apollo/client";

import FrontPage from "./pages/FrontPage";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Critics from "./pages/Critics";
import Genres from "./pages/Genres";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const ALL_MOVIES = gql`
  query {
    allMovies {
      googleID
      nimi
      wiki
      img
    }
  }
`;

const App = () => {

  const [user, setUser] = useState(null);

  const result = useQuery(ALL_MOVIES);

  const padding = {
    padding: 5
  }

  const login = (user) => {
    setUser(user)
  }

  if(result.loading) {
    return <div>loading...</div>
  }

  /*
      <div>
        <Link style={padding} to="/">Etusivu</Link>
        <Link style={padding} to="/elokuvat">Elokuvat</Link>
        <Link style={padding} to="/kriitikot">Kriitikot</Link>
        <Link style={padding} to="/genret">Genret</Link>
        {
          user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">Kirjaudu</Link>
        }
      </div>
  */
  return (
    <Router>

      <section>
    
        <Navbar user={user} />

        <Sidebar />

        <Routes>
          <Route path="/genret" element={<Genres />} />
          <Route path="/kriitikot" element={<Critics />} />
          <Route path="/elokuvat/:id" element={<Movie movies={result.data.allMovies}/>} />
          <Route path="/elokuvat" element={<Movies movies={result.data.allMovies}/>} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>

        <div>
          <i>Raimo Haikari 2022</i>
        </div>

      </section>

    </Router>
  );
};

export default App;