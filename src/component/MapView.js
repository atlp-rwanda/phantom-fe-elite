/* istanbul ignore file */

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
function MapView() {

  const markerIcon = new L.Icon({
    iconUrl:'/phantom-fe-elite/public/trackroute.jpg',
    iconSize:[35,35]
  })
  return (
    <MapContainer
      style={{ height: "60vh", width: "80vw" }}
      center={[-1.940278, 29.873888]}
      zoom={8}
      scrollWheelZoom={true}
      data-testid="google-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-1.940278,29.873888]} icon={markerIcon}>
        <Popup>
          <h1>Kigali town</h1>
        </Popup>

      </Marker>
    </MapContainer>
  );
}

export default MapView;
