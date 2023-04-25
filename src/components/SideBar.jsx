
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import {Grid,BusFront,Person,GeoAltFill,Wrench,PiggyBank} from 'react-bootstrap-icons'


function SideBar() {
    const [selected,setSelected] = useState("Dashboard")


  return (
    <div className='SideBar'>
        <div className="logo">
                <img src={Logo} alt="Logo Picture" />
            </div>
            <div className="SideBar_list">
                <ul>
                    <li className={selected ==="Dashboard" ? "selected" : ""} onClick={()=>{setSelected("Dashboard")}}><Grid /><Link to={"/"}>Dashboard</Link></li>
                    <li className={selected ==="Vehicule" ? "selected" : ""} onClick={()=>{setSelected("Vehicule")}}><BusFront /><Link to={"/vehicule"}>Vehicule</Link></li>
                    <li className={selected ==="Driver" ? "selected" : ""} onClick={()=>{setSelected("Driver")}}><Person /><Link to={"/driver"}>Driver</Link></li>
                    <li className={selected ==="ParcAuto" ? "selected" : ""} onClick={()=>{setSelected("ParcAuto")}}><Wrench /><Link to={"/parcauto"}>Parc Auto</Link></li>
                    <li className={selected ==="Trajectory" ? "selected" : ""} onClick={()=>{setSelected("Trajectory")}}><GeoAltFill /><Link to={"/trajectory"}>Trajectory</Link></li>
                    <li className={selected ==="Convention" ? "selected" : ""} onClick={()=>{setSelected("Convention")}}><PiggyBank /><Link to={"/convention"}>Convention</Link></li>
                </ul>
            </div>

            <div className="user">
                <div className="user_image">
                    <img src={User} alt="User Picture" />    
                </div>
                <div className="user__name">
                    <div className="name">
                        Admin 
                    </div>
                    <div className="logout">
                        Logout
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SideBar
