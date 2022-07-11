import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../../assets/FINAL-LOGO.png";
import './style.css';
import LanguageButton from "../../component/LanguageOption"
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const {t, i18n} = useTranslation();
  return (
    <nav className="flex justify-between sm:justify-between w-full px-6 pt-5 sm:px-12 sm:my-5 ">
      <ul className="flex items-end w-2/5 sm:w-1/3 no-underline list-none">
        <li>
          <Link to="/">
          <img src={logoImg} alt="" className='cursor-pointer'/>
          </Link>
        </li>
        <Link to="/" className="logo-brand font-josefin no-underline mt-8 font-medium text-xl sm:text-5xl">
        </Link>
      </ul>

      <ul className="no-underline list-none flex space-x-12 mt-11 sm:justify-evenly items-center w-1/2 sm:w-1/4 ">
        <li>
          <Link to="/login" className="font-medium sm:font-semibold">
          {t("signin")}
          </Link>
        </li>
        <li>
          <Link to="/register" className='text-textBluePhant font-medium sm:font-semibold'>{t("signup")}</Link>
        </li>
        <LanguageButton/>
      </ul>
    </nav>
  );
};

export default NavBar;