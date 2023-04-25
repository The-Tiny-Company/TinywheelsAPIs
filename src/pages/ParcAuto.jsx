import React from 'react'
import { Search } from 'react-bootstrap-icons'
import EMSI from '../img/emsi.png'
const Driver=[
    {
      CNE : "EE542451",
      fullname : "Adil Chbaly",
      img : "https://randomuser.me/api/portraits/med/men/36.jpg",
      exp : "12",
      lisence : "A",
      startDate : "12-1-2023",
      rating : "3.5",
    },
    {
      CNE : "EE542151",
      fullname : "khalil Chbaly",
      img : "https://randomuser.me/api/portraits/med/men/26.jpg",
      exp : "5",
      lisence : "D",
      startDate : "12-1-2022",
      rating : "1.5",
    }
    ,
    {
      CNE : "EE588451",
      fullname : "Samiha Benkhalil",
      img : "https://randomuser.me/api/portraits/med/women/36.jpg",
      exp : "10",
      lisence : "A",
      startDate : "12-1-2020",
      rating : "4.5",
    }
    ,
    {
      CNE : "EE544121",
      fullname : "Anas Mourad",
      img : "https://randomuser.me/api/portraits/med/men/6.jpg",
      exp : "2",
      lisence : "A,D",
      startDate : "12-6-2023",
      rating : "5",
    }
    ,
    {
      CNE : "EE542551",
      fullname : "Houssam Haraf",
      img : "https://randomuser.me/api/portraits/med/men/16.jpg",
      exp : "5",
      lisence : "A",
      startDate : "19-1-2023",
      rating : "3",
    }
  ]

const Vehicule =[
    {
        Matricule : "24827/B/26",
        DriverCNE :"EE542451",
        Production_Date : "2012",
        status :"Disponible",
        vehiculeType : "Bus"
    },
    {
        Matricule : "23027/B/26",
        DriverCNE :"EE542151",
        Production_Date : "2020",
        status :"Disponible",
        vehiculeType : "Bus"
    },
    {
        Matricule : "21227/B/26",
        DriverCNE :"EE588451",
        Production_Date : "2023",
        status :"Disponible",
        vehiculeType : "Car"
    },
    {
        Matricule : "21227/B/26",
        DriverCNE :"EE544121",
        Production_Date : "2023",
        status :"Disponible",
        vehiculeType : "Car"
    },
    {
        Matricule : "21227/B/26",
        DriverCNE :"EE542551",
        Production_Date : "2021",
        status :"Disponible",
        vehiculeType : "Car"
    },
]

const ParcAuto = () => {
  return (
    <div className='ParcAuto'>
        <div className="header">
        <div className="title">
            ParcAuto
        </div>
        <div className="desc">
            Manage Your Parc Auto Here 
        </div>
        <div className="search">
            <input type="text" placeholder='Search'/>
            <div className="btn-search">
                <Search />
            </div>
        </div>
      </div>
      <div className="Content">
        <div className="Leases">
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            <div className="lease">
                <div className="trajectory__id">
                    ID : 1
                </div>
                <div className="trajectory__image">
                    <img src={EMSI} alt="" />
                </div>
                <div className="trajectory__client">
                    EMSI
                </div>
                <div className="Actions">
                    <div className="Assign">
                        Assign a Vehicule
                    </div>
                    <div className="Details">
                        Details
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ParcAuto
