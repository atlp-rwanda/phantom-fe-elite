import React,{useState, useEffect} from 'react';
import i18n from "../i18n"

const LanguageButton = () => {
  

  const [toKinyarwanda,setToKinyarwanda] = useState(false);
  const [select, setSelect] = useState("kiny");


  function translate () {
      setToKinyarwanda(true)
  }

  const changeLanguage = (ln) => {
    return ()=>{console.log(`hiiii ${ln}`);}
  }
 
  return (
    <button
      onClick={()=>{
        i18n.changeLanguage(select)
        if(select === "en"){
          setSelect("kiny");
          console.log(select);
        }
        if(select === "kiny"){
          setSelect("en");
          console.log(select);
        }
      }}
     className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-darkBluePhant hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-500">
  <span className="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  {select}
  </span>
</button>
  );
};

export default LanguageButton;