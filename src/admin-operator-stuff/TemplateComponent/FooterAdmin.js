import React from "react";
import { useTranslation } from "react-i18next";

const FooterAdmin = () => {
  const {t, i18n} = useTranslation();
  return (
    <footer
      className="bg-adminFooterBackground font-Montserrat font-medium col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3
       col-end-13 row-start-12 row-end-13 flex justify-center items-center
       ">
      <p className="text-white text-xs">
      {t("copy")}
      </p>
    </footer>
  );
};

export default FooterAdmin;
