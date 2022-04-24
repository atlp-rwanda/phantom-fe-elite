import React from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import rura from "../../assets/images/partners/rura.jpg";
import rftc from "../../assets/images/partners/rftc.jpg";
import jali from "../../assets/images/partners/jali.jpg";
import loyal from "../../assets/images/partners/loyal.jpg";
import kbs from "../../assets/images/partners/kbs.jpg";

const FooterBlock = () => {
  return (
    <footer className='h-17.5%' role='footer'>
      <div className="flex justify-around flex-col border-t border-solid border-darkBluePhant sm:flex-row-reverse  my-2 mx-0">
        <section className="contact-box w-full sm:w-1/3 sm:border-l-4 sm:border-solid sm:border-darkBluePhant my-2">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Contact Us
            </h3>
          </div>
          <div className="flex justify-around ">
            <i className="cursor-pointer">
              <FaGithub
                color="deepSkyBlue"
                size="2em"
              />
            </i>
            <i className="cursor-pointer">
              <FaInstagram color="deepSkyBlue" size="2em" />
            </i>
            <i className="cursor-pointer">
              <FaLinkedin color="deepSkyBlue" size="2em" />
            </i>
            <i className="cursor-pointer ">
              <FaFacebookSquare color="deepSkyBlue" size="2em" />
            </i>
          </div>
        </section>
        <section className="sm:w-2/3 mx-8 sm:mx-0">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Partners
            </h3>
          </div>
          <div className="flex justify-around w-full">
            <img src={rura} alt="RURA" />
            <img src={rftc} alt="rftc" className="hidden sm:block" />
            <img src={jali} alt="jali transport company" />
            <img src={kbs} alt="kigali bus services" />
            <img src={loyal} alt="loyal express" />
          </div>
        </section>
      </div>
      <div>
        <p className="text-center text-xs pb-4">
          Andela 2022. All Rights reserved. Designed by Elite Team
        </p>
      </div>
    </footer>
  );
}

export default FooterBlock
