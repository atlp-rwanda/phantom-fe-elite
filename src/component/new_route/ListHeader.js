import React from 'react'

const ListHeader = () => {
  return (
<div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
    <div className="col-span-1">N<sup>o</sup></div>
    <div className="col-span-2">Origin</div>
    <div className="col-span-1"></div>
    <div className="col-span-6">destination</div>
    <div className="col-span-2 ">Action</div>
</div>
  )
}

export default ListHeader