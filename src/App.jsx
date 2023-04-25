import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import './stylesheet/Main.scss'
import Dashboard from "./pages/Dashboard"
import Driver from "./pages/Driver"
import Trajectory from "./pages/Trajectory"
import Vehicule from "./pages/Vehicule"
import AddDriver from './pages/AddDriver';
import AddVehicule from './pages/AddVehicule';
import ParcAuto from './pages/ParcAuto';
import Convention from './pages/Convention';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <SideBar />
      <div className="content">
      
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/driver' element={<Driver />}/>
          <Route path='/driver/add' element={<AddDriver />}/>
          <Route path='/trajectory' element={<Trajectory />}/>
          <Route path='/vehicule' element={<Vehicule />}/>
          <Route path='/vehicule/add' element={<AddVehicule />}/>
          <Route path='/parcauto' element={<ParcAuto />} />
          <Route path='/convention' element={<Convention />} /> 
        </Routes>
      
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
