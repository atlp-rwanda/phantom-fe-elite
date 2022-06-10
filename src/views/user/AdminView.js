import React from 'react'
import AdminViewLayout from '../../component/layout/AdminViewLayout';
import Topview from '../../component/Topview';
import BusRoutedata from '../../component/BusRoutedata';
import MapView from '../../component/MapView';
function AdminView() {
  return (
      <AdminViewLayout>
        <div title="users">
          <Topview />
          <MapView />
          <BusRoutedata />
          </div>
      </AdminViewLayout>
    
  )
}

export default AdminView;