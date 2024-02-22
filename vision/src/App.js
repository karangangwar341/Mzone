import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homee from './components/Homee';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Altu from './components/Altu';
import Right from './components/Right';
import Sidebar from './components/Sidebar';
import SidebarR from './components/SidebarR';

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
