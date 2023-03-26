import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useMap } from 'react-leaflet'

function RoutingMachine({waypoints}) {
    const map = useMap()
    useEffect(()=>{
        L.Routing.control({
            waypoints: waypoints,
            routeWhileDragging : false,
            lineOptions : {
                styles :[
                    {
                        color : "#F9B238",
                    }
                ]
            },
          }).addTo(map)
    },[waypoints])

  return null
}


export default RoutingMachine
