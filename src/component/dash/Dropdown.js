import React from 'react'
import { useNavigate } from "react-router-dom"

const Dropdown = () => {
    let navigate =useNavigate()
  return (
    <div className='absolute top-20 right-10 bg-white border w-24 h-16'>
        <ul>
            <li>
                <button className='text-center px-4 py-0'>Settings</button>
            </li>
            <li>
                <button className='text-center px-4 py-0' onClick={() => {
                    localStorage.clear();
                    navigate(-1);
                }}>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default Dropdown