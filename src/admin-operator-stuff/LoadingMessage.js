import React from "react";
import "../main.css";
import { ImSpinner9 } from "react-icons/im";

const LoadingMessage = () => {
  return (
    <div className="w-full bg-adminFooterBackground rounded-md text-black flex h-[30px] p-6 items-center text-[30px] mt-10">
      <ImSpinner9 icon="spinner" className="spinner" />
      <div className="px-4">
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
