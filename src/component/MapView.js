
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import UseGeolocation from "./UseGeaolocation";
function MapView() {
  const location = UseGeolocation();
  
  return (
    <MapContainer
    style={{ height: "70vh", width: "80vw" }}
    center={[-1.9445974084430695, 30.056136193521816]}
    zoom={12}
    scrollWheelZoom={true}
    data-testid="google-map"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {
     location.loaded && !location.error && (
       <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
         <Popup>Your are Here</Popup>
       </Marker>
     ) 
   }
     
  </MapContainer>
  );
}

export default MapView;
