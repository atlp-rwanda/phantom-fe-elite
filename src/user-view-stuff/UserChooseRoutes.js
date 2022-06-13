import React from 'react'
import AsideUserPlan from "./TemplateComponent/AsideUserPlan"
import BusGeolocation from "./TemplateComponent/BusGeolocation";
import HeaderUserPlan from './TemplateComponent/HeaderUserplan'
import { MapContainer, TileLayer, Marker } from "react-leaflet";


const UserChooseRoutes = () => {
  const location = BusGeolocation();
  return (
  <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-16 font-Nunito bg-[#f3f3f3] overflow-y-hidden">
    <HeaderUserPlan />
    <main className="flex z-0 flex-col col-start-4 col-end-13 row-start-2 row-end-13 bg-red-800 md:col-start-6 lg:col-start-4 hidden md:block lg:block" data-testid = "map-render">
        {/* component for rendering the map on the screen */}
        <MapContainer
          // size of the map
          className="w-full h-full"
          //   focused location to be showed at the initial render of the map
          center={[-1.9441, 30.0619]}
          //   default zoom level at the initial render of the map
          zoom={10}
          scrollWheelZoom={true}
        >
          {/* Using tilelayer provider to get the actual map image hosted on the cloud */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error &&(
            <Marker position={[location.coordinates.lat,location.coordinates.lng]}></Marker>
          )}
        </MapContainer>
      </main>
    <AsideUserPlan />
  </div>
  )
}

export default UserChooseRoutes