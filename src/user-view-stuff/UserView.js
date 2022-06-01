import React from 'react'
// leaflet prestyled component configured to link react with leaflet
import { MapContainer, TileLayer } from "react-leaflet";
// layout components imports
import AsideUser from './TemplateComponent/AsideUser';
import HeaderUser from './TemplateComponent/HeaderUser';

const UserView = () => {
  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3] overflow-y-hidden">
      <HeaderUser />
      <main className="flex flex-col col-start-1 sm:col-start-4 md:col-start-5 lg:col-start-4 col-end-13 row-start-3 row-end-13 bg-red-800">
        {/* component for rendering the map on the screen */}
        <MapContainer

          // size of the map
          className="w-full h-full"

          //   focused location to be showed at the initial render of the map
          center={[-1.9441, 30.0619]}

          //   default zoom level at the initial render of the map
          zoom={8}
          scrollWheelZoom={false}
        >
          {/* Using tilelayer provider to get the actual map image hosted on the cloud */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </main>
      <AsideUser />
    </div>
  );
}

export default UserView
