/** @format */
import React, { useEffect, useRef } from "react";
import { VscCompass } from "react-icons/vsc";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import logo from "../../assets/images/logo.jpg";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const MobileHeader = ({ setAsideOpen }) => {
  let sideRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!sideRef.current.contains(event.target)) {
        setAsideOpen(false);
      }
    };

		document.addEventListener("mousedown", handler);
		return () => {
			document.addEventListener("mousedown", handler);
		};
	});
	return (
		<aside
			className="z-10 bg-white h-screen w-4/6 absolute text-black row-span-full border-2 border-solid border-[#f3f3f3] pb-4"
			ref={sideRef}>
			<div className="flex mx-3 justify-between items-center ">
				<img src={logo} className=" mt-3" />
				<RiCloseFill
					className="m-3 text-4xl"
					onClick={() => {
						setAsideOpen(false);
					}}
				/>
			</div>
			<br />
			<div className="tracking-wider mt-8 ml-5 flex justify-start gap-5">
				<VscCompass className="text-[26px] text-darkBluePhant" />
				<p>Map overview</p>
			</div>
			<p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
				Management
			</p>
			<div className="ml-5 flex flex-col gap-4">
				<div className="flex gap-5">
					<MdAssignmentTurnedIn size={25} className="mt-1 text-darkBluePhant" />
					<p className="ml-1">Bus</p>
				</div>
				<div className="flex gap-5 ">
					<FaBus size={25} className="mt-1 text-darkBluePhant" />
					<p className="ml-1">Route</p>
				</div>
				<div className="flex gap-5">
					<MdAltRoute size={25} className="mt-1 text-darkBluePhant" />
					<Link to="/admin/driver">
						<p className="ml-1">Driver</p>
					</Link>
				</div>

        <div className="flex gap-5">
          <AiOutlineSetting
            size={25}
            className="mt-1 text-darkBluePhant darkBluePhant"
          />
          <Link to="/dmin/operator">
            <p className="ml-1">Operator</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MobileHeader;
