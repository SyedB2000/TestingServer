import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "bg-indigo-700" : "hover:bg-indigo-900";

    return (
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-14">
            <p
                onClick={() => navigate("/")}
                className={`bg-black ${isActive("/")} cursor-pointer text-white px-4 py-[2px]`}
            >
                HOME
            </p>
            <p
                onClick={() => navigate("/about-us")}
                className={`bg-black ${isActive("/about-us")} cursor-pointer text-white px-4 py-[2px]`}
            >
                ABOUT
            </p>
            <p
                onClick={() => navigate("/gallery")}
                className={`bg-black ${isActive("/contact-us")} cursor-pointer text-white px-4 py-[2px]`}
            >
                GALLERY
            </p>
        </div>

        <div className="h-[0.5px] w-full bg-[#929292]" />
        </div>
    );
};

export default NavBar;