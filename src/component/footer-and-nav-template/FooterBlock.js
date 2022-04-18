import React from 'react'
import linkedIn from "../../assets/images/social-media/linkedin.jpg";
import facebook from "../../assets/images/social-media/facebook.jpg";
import github from "../../assets/images/social-media/github.jpg";
import instagram from "../../assets/images/social-media/instagram.jpg";
import rura from "../../assets/images/partners/rura.jpg";
import rftc from "../../assets/images/partners/rftc.jpg";
import jali from "../../assets/images/partners/jali.jpg";
import loyal from "../../assets/images/partners/loyal.jpg";
import kbs from "../../assets/images/partners/kbs.jpg";

const FooterBlock = () => {
  
  return (
    <footer>
      <div className="flex justify-around flex-row-reverse border-t border-solid border-sky-600  my-4 mx-0">
        <section className="contact-box w-1/3 border-l-2 border-solid border-sky-600">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Contact Us
            </h3>
          </div>
          <div className="flex justify-around">
            <img src={linkedIn} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={github} alt="" />
          </div>
        </section>
        <section className="w-2/3">
          <div>
            <h3 className="text-center font-semibold mx-0 mt-1 mb-4">
              Partners
            </h3>
          </div>
          <div className="flex justify-between">
            <img src={rura} alt="RURA" />
            <img src={rftc} alt="rftc" />
            <img src={jali} alt="jali transport company" />
            <img src={kbs} alt="kigali bus services" />
            <img src={loyal} alt="loyal express" />
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
