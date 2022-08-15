import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import FrontPage from "./pages/FrontPage";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Critics from "./pages/Critics";
import Critic from "./pages/Critic";
import Genres from "./pages/Genres";
import Genre from "./pages/Genre";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { checkLoginState, login } from "./reducers/userReducer";

const App = () => {

  const dispatch = useDispatch();

  const { token } = useSelector(state => state.user);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(checkLoginState());
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const loginUser = async (user) => {
    dispatch(login({username: user.username,password: user.password}));
  }

  return (
    <Router>

      <section>
    
        <Navbar 
          user={token}
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
          <Route path="/kirjaudu" element={<Login onLogin={loginUser} />} />
          <Route path="/kirjauduUlos" element={<Logout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>

        <Footer />

      </section>

    </Router>
  );
};

export default App;