import React, { Fragment } from "react";
import NavBar from "../component/NavBar";
import { FaUser } from "react-icons/fa";

const AboutUs = () => {
    return (
        <Fragment>
            <div className="h-screen flex flex-col items-center justify-center gap-4 bg-[#d1d1d1] relative">
                <div className="absolute top-8">
                    <NavBar />
                </div>
                <div className="flex items-center gap-4 text-black">
                    <FaUser className="text-[4.5rem]" />
                    <p className="font-bold text-[5rem] uppercase">About Us</p>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUs