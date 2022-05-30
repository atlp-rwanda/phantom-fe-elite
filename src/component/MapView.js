/* istanbul ignore file */

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function MapView() {
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
      <Marker position={[-1.940278,29.873888]}>
        <Popup>KIGALI RWANDA</Popup>

      </Marker>
    </MapContainer>
  );
}

export default MapView;
