import React, { useState } from 'react'
import {GeoAlt,Flag,ArrowsAngleExpand,Speedometer2,Telephone} from 'react-bootstrap-icons'
import {MapContainer,TileLayer} from "react-leaflet"
import RoutingMachine from '../components/RoutingMachine'
import L from 'leaflet'




//This Fake Data to Change Later When Linked to Back End 

const ordersList = [{
  id : "1",
  status:"Done",
  client:"EMSI",
  StartTime:"19:10",
  EndTime:"20:10",
  StartAddress:"Hay Zitoune",
  EndAddress:"Hay Chraf",
},{
  id : "2",
  status:"Pending",
  client:"EMSI",
  StartTime:"19:10",
  EndTime:"20:10",
  StartAddress:"Hay Limon",
  EndAddress:"Hay Pascal",
},{
  id : "3",
  status:"Pending",
  client:"EMSI",
  StartTime:"19:10",
  EndTime:"20:10",
  StartAddress:"Hay Kachir",
  EndAddress:"Hay 7lib",
},{
  id : "4",
  status:"Done",
  client:"Parent",
  StartTime:"19:10",
  EndTime:"20:10",
  StartAddress:"Hay Timoma",
  EndAddress:"Hay Milka ;)",
},{
  id : "5",
  status:"Canceled",
  client:"EMSI",
  StartTime:"19:10",
  EndTime:"20:10",
  StartAddress:"Hay jacketa",
  EndAddress:"Hay survet",
}]

const geoLocationData = [
  [
    L.latLng(31.634943,-8.0359188),
    L.latLng(31.704943,-8.1059188)
  ],
  [
    L.latLng(31.704943,-8.1259188),
    L.latLng(31.714943,-8.2559188)
  ],
  [
    L.latLng(31.714943,-8.1259188),
    L.latLng(31.724943,-8.2059188)
  ],
  [
    L.latLng(31.734943,-8.1859188),
    L.latLng(31.744943,-8.1759188)
  ],
  [
    L.latLng(31.754943,-8.1559188),
    L.latLng(31.764943,-8.1459188)
  ],
]

const orderMetaData = [
  {
    orderid : "1",
    CurrentLocation:"Location 1",
    Distance:3,
    LastStop:2,
    Speed:40,
  },
  {
    orderid : "2",
    CurrentLocation:"Location 2",
    Distance:10,
    LastStop:10,
    Speed:30,
  },
  {
    orderid : "3",
    CurrentLocation:"Location 3",
    Distance:20,
    LastStop:10,
    Speed:3,
  },
  {
    orderid : "4",
    CurrentLocation:"Location 4",
    Distance:30,
    LastStop:20,
    Speed:30,
  },
  {
    orderid : "5",
    CurrentLocation:"Location 5",
    Distance:30,
    LastStop:20,
    Speed:30,
  },
]


const orderDriver=[
  {
    CNE : "EE542451",
    fullname : "Adil Chbaly",
    img : "https://randomuser.me/api/portraits/med/men/36.jpg",
    exp : "12",
    lisence : "A",
    startDate : "12-1-2023",
    rating : "3.5",
    orderid : "1",
  },
  {
    CNE : "EE542151",
    fullname : "khalil Chbaly",
    img : "https://randomuser.me/api/portraits/med/men/26.jpg",
    exp : "5",
    lisence : "D",
    startDate : "12-1-2022",
    rating : "1.5",
    orderid : "5",
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
    orderid : "4",
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
    orderid : "3",
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
    orderid : "2",
  }
]


//This Handles he Orders Meta Data Such Distance Speed Etc .. 
const OrdersMetaData = ({MetaData})=>{
  return(
<div class="map_details">
                    <div class="map_details__info">
                        <div class="map_details__info__icon">
                        <GeoAlt color='#40c764'/>
                        </div>
                        <div class="map_details__info__content">
                            <div class="map_details__info__content__title">
                                  Current Location
                            </div>
                            <div class="map_details__info__content__input">
                                {MetaData.CurrentLocation}
                            </div>
                        </div>
                    </div>
                    <div class="map_details__info">
                        <div class="map_details__info__icon">
                        <Flag color='#40c764'/> 
                        </div>
                        <div class="map_details__info__content">
                            <div class="map_details__info__content__title">
                            Last Stop
                            </div>
                            <div class="map_details__info__content__input">
                                {MetaData.LastStop}s ago
                            </div>
                        </div>
                    </div>
                    <div class="map_details__info">
                        <div class="map_details__info__icon">
                            <ArrowsAngleExpand color='#40c764' />
                        </div>
                        <div class="map_details__info__content">
                            <div class="map_details__info__content__title">
                                Distance
                            </div>
                            <div class="map_details__info__content__input">
                                {MetaData.Distance}km
                            </div>
                        </div>
                    </div>
                    <div class="map_details__info">
                        <div class="map_details__info__icon">
                        <Speedometer2 color='#40c764' />
                        </div>
                        <div class="map_details__info__content">
                            <div class="map_details__info__content__title">
                                Current Speed
                            </div>
                            <div class="map_details__info__content__input">
                                {MetaData.Speed} km/h
                            </div>
                        </div>
                    </div>
                </div>
  )
}


//This Handle The Order and Click System for each Trajectory Added
const Orders=({order , setMetaData,selected,setSelected,setDriver,setGeoLocation,geolocationarray})=>{
  const handleOrder = ()=>{
    const foundMetaData = orderMetaData.find(obj => {
      return obj.orderid===order.id;
    })
    const foundDriver = orderDriver.find(obj =>{
      return obj.orderid === order.id;
    })
    setGeoLocation(geolocationarray[order.id-1])
    setDriver(foundDriver)
    setSelected(order.id)
    setMetaData(foundMetaData)
  }


  return(
    <div class="order" onClick={handleOrder}>
    <div class={selected === order.id ? "order__selected" : ""}></div>
    <div class="order__title">
        <div class="order__id">ID : {order.id}</div>
        <div class={"order__status "+order.status}>{order.status}</div>
    </div>
    <div class="order__client">{order.client}</div>
    <div class="order__trajectory">
        <div class="order__trajectory__time">
            <div class="order__trajectory__time__start">
                {order.StartTime}
            </div>
            <div class="order__trajectory__time__end">
                {order.EndTime}
            </div>
        </div>
        <div class="order__trajectory__line"></div>
        <div class="order__trajectory__adress">
            <div class="order__trajectory__adress__start">
                {order.StartAddress}
            </div>
            <div class="order__trajectory__adress__end">
                {order.EndAddress}
            </div>
        </div>
    </div>

</div>
  )
}

//this Handles the Orders Driver Data 
const OrdersDriver = ({Driver})=>{
  return (
    <div class="driver_info">

    <div class="driver">
    <div class="driver__info">
        <div class="driver__info__image">
            <img src={Driver.img} alt="" />
        </div>
        <div class="driver__info__name">
            {Driver.fullname}
            <div class="name">
                Driver
            </div>
           
        </div>
      </div>
      <div class="driver__call">
        <Telephone />
        Call
      </div>
  </div>
  <div class="driver__details">
    <div class="driver__details__detail">
        <div class="driver__details__detail__title">
            Experience
        </div>
        <div class="driver__details__detail__description">
            {Driver.exp} Years
        </div>
    </div>
    <div class="driver__details__detail">
        <div class="driver__details__detail__title">
            Driver License
        </div>
        <div class="driver__details__detail__description">
            {Driver.lisence}
        </div>
    </div>
    <div class="driver__details__detail">
        <div class="driver__details__detail__title">
            Start Date
        </div>
        <div class="driver__details__detail__description">
            {Driver.startDate}
        </div>
    </div>
    <div class="driver__details__detail">
        <div class="driver__details__detail__title">
            Rating
        </div>
        <div class="driver__details__detail__description">
            {Driver.rating}/5
        </div>
    </div>
  </div>
    </div>
  )
}

const center=[31.634943,-8.0359188]

function Trajectory() {

  const [metaData,setMetaData] = useState(orderMetaData[0])

  const [driver,setDriver] = useState(orderDriver[0])

  const [selectedOrder,isSelectedOrder] = useState(ordersList[0].id)

  const [geoLocation,setGeoLocation]=useState(geoLocationData[0])


  return (
    <div className='Dashboard'>
      <div class="orders">
                <div class="static">
                    <div class="orders__title">
                        Active Trajectory : {ordersList.filter(order=>order.status==="Done").length}
                    </div>
    
                    <div class="orders__search">
                        <input type="text" placeholder="Search" />
                        <div class="orders__filter">
                            <i class="bi bi-filter"></i>
                            Filters
                        </div>
                    </div>
                </div>

                <div class="orders__all">
                    
                  {ordersList.map((order)=>
                    <Orders 
                    key={order.id} 
                    order={order} 
                    setMetaData={setMetaData}
                    selected ={selectedOrder}
                    setSelected={isSelectedOrder}
                    setDriver = {setDriver}
                    setGeoLocation = {setGeoLocation}
                    geolocationarray ={geoLocationData}
                    />
                  )}
                </div>
            </div>
            <div class="map_info">
                <OrdersMetaData MetaData={metaData}/>
                <div className="map">
                <MapContainer center={center} zoom={9}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <RoutingMachine waypoints={geoLocation}/>
                  </MapContainer>
                </div>
               <OrdersDriver Driver={driver}/>
            </div>
    </div>
  )
}


let DefaultIcon = L.icon({
  iconUrl : "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
  iconSize:  [25, 41],
  popupAnchor: [-3, -76],
})

L.Marker.prototype.options.icon = DefaultIcon


export default Trajectory

