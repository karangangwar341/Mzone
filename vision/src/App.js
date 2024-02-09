import './App.css';
import Right from './components/Right';
import Sidebar from './components/Sidebar';
import SidebarR from './components/SidebarR';

function App() {
  return (
    <div className="App flex flex-row justify-center">
         <Sidebar/>
         <Right/>
         <SidebarR/>
    </div>
  );
}

export default App;
