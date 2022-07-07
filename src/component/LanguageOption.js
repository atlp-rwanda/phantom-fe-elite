import React from 'react';

const LanguageButton = () => {
 
  return (
    <div>
      <select
        className="bg-background border outline-none md:ml-6 lg:ml-6 xl:ml-6 mt-0 flex py-2 px-7 text-sm hover:font-bold"
      >
        <option
          value="en"
          className=" border-none bg-background w-full cursor-pointer"
        >
          Eng
        </option>
        <option
          value="fr"
          className=" border-none bg-background w-full cursor-pointer"
        >
          Fr
        </option>
        <option
          value="kn"
          className=" border-none bg-background cursor-pointer"
        >
          Kiny
        </option>
      </select>
    </div>
  );
};

export default LanguageButton;