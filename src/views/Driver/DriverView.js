import React from "react";
import Layout from "../../component/layout/Layout";
import { MapContainer,Marker,Popup, TileLayer} from 'react-leaflet';


const DEFAULT_LANGITUDE =-1.959829494;
const DEFAULT_LATITUDE =  30.126499494;


const DriverView = () => {
  return (
    <Layout>
      <div>
        <h3
          className="font-bold underline decoration-sky-500"
          data-testid="head1"
        >
          Simulate Bus Motion
        </h3>
        <div className="justify-center items-center fixed">
          <div class="mapouter">
           < MapContainer center ={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}
           zoom={12}>
             <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
             <Marker position={[-1.959829494, 30.126499494]}>
        <Popup>KIGALI RWANDA</Popup>

      </Marker>
             <Marker className='text-red-400' position={[-1.9445974084430695, 30.056136193521816]}>
      
        <Popup> DownTown KIGALI</Popup>

      </Marker>
             <Marker className='text-red-400' position={[ -1.9581, 30.0604]}>
      
        <Popup> kigali bus station, kigali, rwanda</Popup>

      </Marker>
           </ MapContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default DriverView;
