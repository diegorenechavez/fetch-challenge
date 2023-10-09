import './App.css';
import SplashPage from './components/splashPage';
import NavBar from './components/navBar';
import LoginPage from './components/login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogMatchPage from './components/dogMatch';
import {useEffect, useState} from "react";
import FeedIndex from './components/feedIndex';
import SearchBar from './components/searchBar';
import NotFound from './notFound';
// import ProtectedRoute from './ProtectedRoute';
// import { AuthProvider } from './AuthContext';


function App() {
  let userInfo = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")) : null
  const [user, setUser] = useState(userInfo)

  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<SplashPage/>} />
        <Route exact path="/login" element={<LoginPage setCurrentUser={setUser}/>} />
        <Route exact path="/feed" element={<SearchBar/>} />
        <Route exact path="/:dogId" element={<DogMatchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
