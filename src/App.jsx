import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import './stylesheet/Main.scss'
import Dashboard from "./pages/Dashboard"
import Driver from "./pages/Driver"
import Trajectory from "./pages/Trajectory"
import Vehicule from "./pages/Vehicule"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <SideBar />
      <div className="content">
      
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/driver' element={<Driver />}/>
          <Route path='/trajectory' element={<Trajectory />}/>
          <Route path='/vehicule' element={<Vehicule />}/>
        </Routes>
      
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
