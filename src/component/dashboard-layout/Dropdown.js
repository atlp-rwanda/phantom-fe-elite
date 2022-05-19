import React from 'react'
import { useNavigate } from "react-router-dom"

const Dropdown = () => {
    let navigate =useNavigate()
  return (
    <div className='absolute top-20 right-10 bg-white border w-24 h-16'>
        <ul>
            <li>
                <button className='text-center px-4 py-0' data-testid="button1">Settings</button>
            </li>
            <li>
                <button className='text-center px-4 py-0' data-testid="button2" id='click-me' onClick={() => {
                    localStorage.clear();
                    navigate('/', {replace: true});
                }}>Logout</button>
            </li>
        </ul>
    </div>
  )
}
export default Dropdown