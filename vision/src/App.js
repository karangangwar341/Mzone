import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homee from './components/Homee';
import Login from './components/Login/signup/Login';
import Signup from './components/Login/signup/Signup';
import Profile from './components/Login/signup/Profile';


function App() {
  return (
    <div className="App flex flex-row justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homee homecontent="Home" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/music" element={<Homee homecontent= "Music" />} />
          <Route path="/search" element={<Homee homecontent= "Search" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
