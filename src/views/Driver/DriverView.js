import React from "react";
import Layout from "../../component/layout/DriverDashboard";
import MapView from "../../component/MapView";

const DriverView = () => {
  return (
    <Layout>
      <div className="w-full flex flex-wrap justify-center xl:justify-start -mx-1 overflow-hidden sm:-mx-1  md:-mx-1 lg:-mx-1 xl:-mx-1">
        <div className="">
          <h3
            className="font-bold underline decoration-sky-500 "
            data-testid="head1"
          >
            Simulate Bus Motion
          </h3>
        </div>
        <MapView />
      </div>
    </Layout>
  );
};

export default DriverView;
