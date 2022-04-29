import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../assets/images/logo.jpg";
import usericon from "../assets/images/vector.png";
import dropicon from "../assets/images/polygon.png";
import dropicon1 from "../assets/images/Vector1.png";
import notification from "../assets/images/notification.png";
import { createPopper } from '@popperjs/core';


const NavBar = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div className=' self-end'>
      <div className="inline-flex w-full">
        <button className='font-bold' type="">EN</button>
          <img src={dropicon1} alt="" className='px-2 self-center' />
          <img src={notification} alt="" className='mr-2 px-2 self-center border-r-2 border-indigo-500' />
        <button className="" type="button" ref={btnDropdownRef} onClick={() => { dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();}} >
        <div class="flex">
          <div class="flex-none  w-14 h-14">
            <img src={usericon} alt="" className='w-5/6 sm:w-full ' />
          </div>
          <div class="flex flex-col text-left px-2">
            <span className="font-bold">Andela Rwanda</span>
            <span className="">User</span>
          </div>
          <div class="grid place-content-center">
            <img src={dropicon} alt="" className='w-5/6 sm:w-full ' />
          </div>
        </div>
        </button>
        <div ref={popoverDropdownRef} className={ (dropdownPopoverShow ? "block " : "hidden ")} >
          <div className="z-10 bg-white self-end shadow w-44">
            <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" className="block px-4 py-2 font-bold">Settings</a>
              </li>
              <li>
                <a href="/logout" className="block px-4 py-2 font-bold">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
      </div>
  );
}

export default NavBar
