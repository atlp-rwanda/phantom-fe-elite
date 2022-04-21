import React from 'react'
import{FaLinkedin, FaGithub, FaFacebookSquare,FaInstagram} from 'react-icons/fa';
import rura from "../../assets/imgs/rura.jpg";
import rftc from "../../assets/imgs/rftc.jpg";
import jali from "../../assets/imgs/jali.jpg";
import loyal from "../../assets/imgs/loyal.jpg";
import kbs from "../../assets/imgs/kbs.jpg";
import './footer.css';


const FooterBlock = () => {
  
  return (
    <footer className='py-0 mb-0 '>
      <div className="flex justify-around flex-row-reverse border-t border-solid border-sky-500  my-2 mx-0">
        <section className="contact-box hidden lg:block w-1/3 border-l-4 border-solid border-sky-500 my-2">
          <div className='w-full h-auto hidden lg:block  bg-cover rounded-l-lg '>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Contact Us
            </h3>
          </div>
          <div className="flex justify-around">
            <i className='cursor-pointer'><FaGithub color='deepSkyBlue' size='2em'/></i>
            <i className='cursor-pointer'><FaInstagram color='deepSkyBlue' size='2em'/></i>
            <i className='cursor-pointer'><FaLinkedin color='deepSkyBlue' size='2em'/></i>
            <i className='cursor-pointer'><FaFacebookSquare color='deepSkyBlue' size='2em'/></i>
          </div>
        </section>
        <section className="w-2/3">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Partners
            </h3>
          </div>
          <div className="flex justify-between px-12 my-2 md:flex-auto lg:px-12">
            <img src={rura} alt="RURA" className='cursor-pointer'/>
            <img src={rftc} alt="rftc"  className='cursor-pointer' />
            <img src={jali} alt="jali transport company"  className='cursor-pointer' />
            <img src={kbs} alt="kigali bus services"  className='cursor-pointer' />
            <img src={loyal} alt="loyal express"  className='cursor-pointer'/>
          </div>
        </section>
      </div>
      <div>
        <p className="text-center text-xs pb-4">
          Andela  2022. All Rights reserved. Designed by Elite Team
        </p>
      </div>
    </footer>
  );
}

export default FooterBlock