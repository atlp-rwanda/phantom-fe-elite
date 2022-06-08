import React, { useEffect, useState } from "react";
// leaflet prestyled component configured to link react with leaflet
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
// layout components imports
import AsideUser from "./TemplateComponent/AsideUser";
import AsideUserOnPhoneTwo from "./TemplateComponent/AsideUserOnPhoneTwo";
import HeaderUser from "./TemplateComponent/HeaderUser";
import axios from "axios";

const UserView = () => {
  const [dataJson, setDataJson] = useState([]);
  const [asideOpen, setAsideOpen] = useState(false);
  useEffect(() => {
    const rwandaData = async () => {
      // // this commented lines is are for getting coordinates of the current location of the device. it is to uncomment them and comment other try and catch 
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //     console.log(position);
      //     setDataJson([[position.coords.latitude, position.coords.longitude]]);
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
      //   }); 
      try {
        console.log("fetching from my local server");
        const { data } = await axios.get("http://localhost:7000/user-view");

        console.log("done getting");
        setDataJson(data.coordinate);
      } catch (err) {
        console.log(err);
      }
    };
    rwandaData();
  }, []);

  // The object of color which will make color of line on the map
  const limeOptions = { color: "blue" };

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
          {dataJson.map((coordinate, index) => {
            return (

              // Render the marker each time this component is called with new coordinates
              <Marker key={index} position={[coordinate[0], coordinate[1]]} />
            );
          })}

{/* Polyline is a component from react-leaflet which connects coordinates and draw line joining them on the map */}
{/* In effect it accept array of arrays of positions(coordinates(latitude, longitude)) to connect and object showing the color of line when render.  */}
          <Polyline pathOptions={limeOptions} positions={dataJson} />

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
