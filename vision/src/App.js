import './App.css';
import Login from './components/Login';
import Right from './components/Right';
import Sidebar from './components/Sidebar';
import SidebarR from './components/SidebarR';

function App() {
  return (
    <div className="App flex flex-row justify-center">
         {/* <Sidebar/>
         <Right/>
         <SidebarR/> */}
         <Login/>
    </div>
  );
}

export default App;
