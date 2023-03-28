import React from 'react'
import { PersonCheckFill,Cash,CarFrontFill } from 'react-bootstrap-icons'
import Working from '../assets/working.jpg'

function Dashboard() {
  
  
  return (
    <div className='Trajectory'>
      <div className="header">
        <div className="header__title">
            Hi , <span>Admin</span> 
            <br />
            Welcome to your DashBoard
        </div>
      </div>
      <div className="content">
        <div className="content__stats">
          <div className="content__stats__title">Application Stats</div>
          <div className="stats">
            <div className="stat">
              <PersonCheckFill className='stat__icon'/>
              <div className="stat__input">8</div>
              <div className="stat__title">Drivers</div>
            </div>
            <div className="stat">
              <PersonCheckFill className='stat__icon'/>
              <div className="stat__input">8</div>
              <div className="stat__title">Drivers</div>
            </div>
            <div className="stat">
              <Cash className='stat__icon'/>
              <div className="stat__input">4</div>
              <div className="stat__title">Subscriptions</div>
            </div>
            <div className="stat">
              <CarFrontFill className='stat__icon'/>
              <div className="stat__input">Buses : 8 Cars : 9</div>
              <div className="stat__title">Vehicule</div>
            </div>
          </div>
        </div>


        <div className="working">
          <img src={Working} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Dashboard
