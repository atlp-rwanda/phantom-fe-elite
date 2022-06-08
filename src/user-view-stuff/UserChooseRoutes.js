import React from 'react'
import AsideUserPlan from "./TemplateComponent/AsideUserPlan"
import image from '../assets/imgs/Map.png'
import HeaderUserPlan from './TemplateComponent/HeaderUserplan'


const UserChooseRoutes = () => {
  return (
  <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-16 font-Nunito bg-[#f3f3f3] overflow-y-hidden">
    <HeaderUserPlan />
    <main className="flex flex-col col-start-1 sm:col-start-4 md:col-start-6 lg:col-start-4 col-end-13 row-start-3 row-end-17 hidden lg:block md:block">
    <img className="w-full h-full" src={image} alt="" />
    </main>
    <AsideUserPlan />
  </div>
  )
}

export default UserChooseRoutes