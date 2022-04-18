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
    <footer className='py-0 mt-20 w-full'>
      <div className="flex justify-around flex-col border-t border-solid border-sky-500 sm:flex-row-reverse  my-0.5 mx-0">
        <section className="contact-box w-full sm:w-1/3 sm:border-l-4 sm:border-solid sm:border-sky-500 my-2">
          <div className='w-full lg:block  bg-cover rounded-l-lg h-auto '>
            <h3 className="flex justify-around text-center font-semibold mx-0 mt-1 mb-4 sm:block sm:text-center">
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
        <section className="sm:w-2/3 mx-8 sm:mx-0">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Partners
            </h3>
          </div>
          <div className="flex justify-around w-full">
            <img src={rura} alt="RURA" className='cursor-pointer'/>
            <img src={rftc} alt="rftc"  className='cursor-pointer' />
            <img src={jali} alt="jali transport company"  className='cursor-pointer' />
            <img src={kbs} alt="kigali bus services"  className='cursor-pointer' />
            <img src={loyal} alt="loyal express"  className='cursor-pointer'/>
          </div>
        </section>
      </div>
      <div>
        <p className="text-center text-xs pt-5">
          Andela  2022. All Rights reserved. Designed by Elite Team
        </p>
      </div>
    </footer>
  );
}

export default FooterBlock;