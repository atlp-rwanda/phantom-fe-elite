import React from 'react';
import { useTranslation } from 'react-i18next';

const ListHeader = () => {
  const {t, i18n} = useTranslation();
  return (
<div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
    <div className="col-span-1">N<sup>o</sup></div>
    <div className="col-span-2">{t("origin")}</div>
    <div className="col-span-1"></div>
    <div className="col-span-6">{t("destination")}</div>
    <div className="col-span-2 ">{t("action")}</div>
</div>
  )
}

export default ListHeader