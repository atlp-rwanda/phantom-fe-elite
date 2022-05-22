import React from 'react'
import "../views/leaflet.css"
// import  mapData from "../../mapdata/countries.json"
import { MapContainer, TileLayer, Marker ,Popup} from 'react-leaflet'
function MapView() {

  // const filteredStations = mapData.filter(newData=>newData.address.country==="Rwanda")

  return (
    <div  title="mapview">

    
    <MapContainer center={[-1.940278,29.873888]} zoom={8} scrollWheelZoom={true}
    id="map"
    >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    id="google-map-script"
  />
 
</MapContainer>
</div>
  )
}

export default MapView;
