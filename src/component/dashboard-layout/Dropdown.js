import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dropdown = () => {
  let navigate = useNavigate();
  const LogOut = () => {
    toast.success("LogOut SuccessFully", {
      position: "top-center",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
              LogOut();
            }}
          >
            Logout
          </button>
          <ToastContainer />
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
