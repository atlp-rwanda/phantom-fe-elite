import React from "react";
import { useTranslation } from "react-i18next";

const FooterUser = () => {
  const {t, i18n} = useTranslation();
  return (
    <footer
      className="bg-adminFooterBackground font-Montserrat font-medium col-start-1 sm:col-start-4 md:col-start-5 lg:col-start-4
       col-end-13 row-start-16 row-end-17 flex justify-center items-center
       "
    >
      <p className="text-white text-xs">
      {t("copy")}
      </p>
    </footer>
  );
};

export default FooterUser;
