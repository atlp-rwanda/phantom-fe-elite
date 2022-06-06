import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaFontAwesome } from "react-icons/fa";



const markerIcon = new L.Icon({
  iconUrl: require("./../assets/images/pin.jpg"),
  iconSize:[55, 65],
});
function MapView() {
  return (
    <MapContainer
      style={{ height: "70vh", width: "80vw" }}
      center={[-1.9445974084430695, 30.056136193521816]}
      zoom={8}
      scrollWheelZoom={true}
      data-testid="google-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
      <Marker position={[-1.9445974084430695, 30.056136193521816]}
      
     >
          
        <Popup ><a >KIGALI RWANDA</a></Popup>

      </Marker>
       
    </MapContainer>
  );
}

export default MapView;