import React from 'react';
import "../main.css"

const ErrorMessageDisplay = ({ error }) => {
  return (
    <div className="w-full bg-red-200 rounded-md text-red-700 flex h-[30px] p-6 items-center text-[30px] mt-10">
      <div className="px-4">
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessageDisplay
