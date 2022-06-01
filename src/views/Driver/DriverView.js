import React from "react";
import Layout from "../../component/layout/DriverDashboard";
import { MapContainer, TileLayer} from 'react-leaflet';


const DEFAULT_LANGITUDE =-123;
const DEFAULT_LATITUDE = 48;


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
           </ MapContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default DriverView;
