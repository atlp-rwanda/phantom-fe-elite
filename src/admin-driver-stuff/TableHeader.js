import React from "react";
import { useTranslation } from "react-i18next";

const TableHeader = () => {
  const {t, i18n} = useTranslation();
  return (
    <div
      className="grid grid-cols-12 border-b-2 border-black font-bold border-solid"
      role="row-header"
    >
      <div className="col-span-1">N</div>
      <div className="col-span-2">{t("name")}</div>
      <div className="col-span-2 ">{t("id")}</div>
      <div className="col-span-2">{t("license")}</div>
      <div className="col-span-3">{t("mobile")}</div>
      <div className="col-span-2">{t("actions")}</div>
    </div>
  );
};

export default TableHeader;
