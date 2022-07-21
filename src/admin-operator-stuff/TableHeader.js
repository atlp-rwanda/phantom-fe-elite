import React from "react";
import { useTranslation } from "react-i18next";

const TableHeader = () => {
  const {t, i18n} = useTranslation();
  return (
    <div
      className="grid grid-cols-12 border-b-2 border-black font-bold border-solid"
      role="row-header"
    >
      <div className="col-span-1">No</div>
      <div className="col-span-3 ">{t("oname")}</div>
      <div className="col-span-3 ">{t("oemail")}</div>
      <div className="col-span-3 ">{t("roles")}</div>
      <div className="col-span-2 ">{t("actions")}</div>
    </div>
  );
};

export default TableHeader;
