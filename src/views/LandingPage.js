/** @format */

import React from "react";
import landing from "../assets/images/landing-image.jpg";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import NavBar from "../component/footer-and-nav-template/NavBar";
import FormSubscribe from "../component/FormSubscribe";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const LandingPage = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <NavBar />
      <main className="mb-auto flex-grow">
        <main className=" py-8 md:pb-28 lg:pb-8 lg:mb-12 sm:pl-20 px-8 h-[70%]">
          <section
            className="flex
      flex-col-reverse
      sm:flex-row-reverse
       items-center sm:justify-between
       "
          >
            <img
              className="w-full sm:w-1/2"
              src={landing}
              alt=""
              role="image"
            />
            <div>
              <h1 className="text-textBluePhant font-bold leading-9 text-3xl sm:text-4xl font-Montserrat">
                {t("headbanner")}
              </h1>
              <h2 className="text-lg font-blackPhant font-medium mt-4 sm:text-4xl font-Montserrat">
                {t("headbanner2")}
              </h2>
            </div>
          </section>
          <div className="image ">
            <section className="mt-8 sm:mt-0">
              <p className="w-full sm:w-2/5 font-normal leading-8 font-Montserrat">
              {t("banner3")}
              </p>
            </section>
            <section className="flex flex-col sm:flex-row sm:justify-around sm:items-center md:h-1/2 mx-0 sm:mt-8 md:pt-24 lg:pt-8 sm:mb-16 my-8">
              <div className="flex w-full justify-around sm:w-2/5 ">
                <Link to='/user-plan'>

                <button className=" w-40 sm:w-72 h-8 sm:h-12 text-whitePhant rounded-3xl p-0 cursor-pointer border-none bg-darkBluePhant font-Montserrat">
                {t("see")}
                </button>
                </Link>
              </div>
              <FormSubscribe />
            </section>
          </div>
        </main>
      </main>
      <FooterBlock />
    </>
  );
};

export default LandingPage;
