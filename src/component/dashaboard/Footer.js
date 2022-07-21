/** @format */

import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const {t, i18n} = useTranslation();
	return (
		<div className="sm: invisible md:visible bg-adminFooterBackground font-Montserrat font-medium col-start-3 col-end-13 row-start-12 row-end-13  flex justify-center items-center ">
			<p className="text-white text-xs">
			{t("copy")}
			</p>
		</div>
	);
};

export default Footer;
