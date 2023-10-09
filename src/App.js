
import './App.css';
import SplashPage from './components/splashPage';
import NavBar from './components/navBar';
import LoginPage from './components/login';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import DogMatchPage from './components/dogMatch';
import { useEffect, useState } from 'react';
import FeedIndex from './components/feedIndex';
import SearchBar from './components/searchBar';
import NotFound from './notFound';

function App() {
  let userInfo = sessionStorage.getItem('currentUser')
    ? JSON.parse(sessionStorage.getItem('currentUser'))
    : null;
  const [user, setUser] = useState(userInfo);

  return (
    <Router>
      {/* Removed the 'basename' attribute as HashRouter doesn't require it */}
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<SplashPage />} /> {/* Updated Route path */}
        <Route path="/login" element={<LoginPage setCurrentUser={setUser} />} /> {/* Updated Route path */}
        <Route path="/feed" element={<SearchBar />} /> {/* Updated Route path */}
        <Route path="/:dogId" element={<DogMatchPage />} /> {/* Updated Route path */}
      </Routes>
    </Router>
  );
}

export default App;
