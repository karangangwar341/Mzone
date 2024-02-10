import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homee from './components/Homee';
import Login from './components/Login';
import Signup from './components/Signup';
import Right from './components/Right';
import Sidebar from './components/Sidebar';
import SidebarR from './components/SidebarR';

function App() {
  return (
    <div className="App flex flex-row justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homee />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
