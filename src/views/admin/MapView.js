import React from 'react'
import "./leaflet.css"
import  mapData from "./data/map.json"
import { MapContainer, TileLayer, Marker ,Popup} from 'react-leaflet'
function MapView() {

  const filteredStations = mapData.filter(newData=>newData.address.country==="Rwanda")

  return (
    <div  data-testid="map">

    
    <MapContainer center={[-1.940278,29.873888]} zoom={6} scrollWheelZoom={true}
    >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    id="google-map-script"
  />
  {
    filteredStations.map(newData=>(
      <Marker 
      key={newData.id}
      position={[newData.gps.latitude, newData.gps.longitude]}>
   
  </Marker>
    ))
  }
  
</MapContainer>
</div>
  )
}

export default MapView;
