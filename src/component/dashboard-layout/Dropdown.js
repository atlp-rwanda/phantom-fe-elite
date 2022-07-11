import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  let navigate = useNavigate();

  const LogOut = () => {
    alert("logout successfully");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div className="absolute top-20 right-10 bg-white border w-24 h-16 z-10">
      <ul>
        <li>
          <button className="text-center px-4 py-0" data-testid="button1">
            Settings
          </button>
        </li>
        <li>
          <button
            className="text-center px-4 py-0"
            data-testid="button2"
            id="click-me"
            onClick={() => {
              // localStorage.clear();
              // navigate('/', {replace: true});
              LogOut();
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
