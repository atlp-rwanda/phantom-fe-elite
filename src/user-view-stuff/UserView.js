import React, { useEffect, useRef, useState } from "react";
import Layout from './../component/layout/LayoutUser'
import MapView from "../component/MapView";
import { useTranslation } from "react-i18next";


const UserView = () => {
  const {t, i18n} = useTranslation();
  // const location = BusGeolocation();
  // const [asideOpen, setAsideOpen] = useState(false);
  return (
    <Layout>
    <div className="w-full flex flex-wrap justify-center xl:justify-start -mx-1 overflow-hidden sm:-mx-1  md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div className="">
        <h3
          className="font-bold underline decoration-sky-500 "
          data-testid="head1"
        >
         {t("view")}
        </h3>
      </div>
      <MapView />
    </div>
  </Layout>
  );
};

export default UserView;
