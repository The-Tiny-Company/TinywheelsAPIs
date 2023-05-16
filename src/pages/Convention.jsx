import React, { useEffect, useState } from 'react'
import { Search } from 'react-bootstrap-icons'
import EMSI from '../img/emsi.png'
import ENSA from '../img/ensa.png'
import axios from 'axios'

function Convention() {
    const [conventions,setConventions] =useState([])
    const loadData=async ()=>{
        const res = await axios.get("http://localhost:8080/api/v1/convention")
        setConventions(res.data)
        console.log(res.data[0].school.img);
    }

    const Daysleft=(convention)=>{
        var d = new Date();
        var n = new Date(convention);
        var diff = n.getTime() - d.getTime();
        var diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    useEffect(()=>{
            loadData()
    },[])

  return (
    <div className='Convention'>
      <div className="header">
        <div className="title">
            Conventions
        </div>
        <div className="desc">
            Manage Your Conventions Here 
        </div>
        <div className="search">
            <input type="text" placeholder='Search'/>
            <div className="btn-search">
                <Search />
            </div>
        </div>
      </div>
      <div className="Content">
        <div className="conventions">
            {conventions?.map((convention)=>{
                return (
                <div className="convention">
                    <div className="school_image">
                        <img src={require(`../img/${convention.school.img}`)} alt={convention.school.name + "image"} />
                    </div>
                    <div className="school_details">
                        <div className="school_name">
                            {convention.school.name}
                        </div>
                        <div className="school_daysleft">
                            {Daysleft(convention.date)} Days
                        </div>
                        <div className="school_convention_date">
                            {convention.date}
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Convention
