import React, { useEffect, useRef, useState } from "react";
// leaflet prestyled component configured to link react with leaflet
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
// layout components imports
import AsideUser from "./TemplateComponent/AsideUser";
import AsideUserOnPhoneTwo from "./TemplateComponent/AsideUserOnPhoneTwo";
import HeaderUser from "./TemplateComponent/HeaderUser";
import BusGeolocation from "./TemplateComponent/BusGeolocation";


const UserView = () => {
  const location = BusGeolocation();
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3] overflow-y-hidden">
      <HeaderUser setAsideOpen={setAsideOpen} />
      <main
        className="flex z-0 flex-col col-start-1 lg:col-start-4 col-end-13 row-start-2 lg:row-start-3 row-end-13 bg-red-800"
        data-testid="map-rendering"
      >
        {/* component for rendering the map on the screen */}
        <MapContainer

          // size of the map
          className="w-full h-full"

          //   focused location to be shown at the initial render of the map
          center={[-1.9441, 30.0619]}

          //   default zoom level at the initial render of the map
          zoom={9}

          // enabling zoom with swapping in or out with finger on the mouse or on scrolling
          scrollWheelZoom={true}
        >
          {/* Using tilelayer provider to get the actual map image url hosted on the cloud */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error &&(
            <Marker position={[location.coordinates.lat,location.coordinates.lng]}></Marker>
          )}
        </MapContainer>
      </main>
      {/* normal aside for desktop version */}
      <AsideUser />

      {/* this aside is the modified version of the normal aside component to be popped out easily */}
      {asideOpen && <AsideUserOnPhoneTwo setAsideOpen={setAsideOpen} />}
    </div>
  );
};

export default UserView;
