import React, { useEffect, useRef, useState } from "react";
import DarkLight from "../DarkLight/DarkLight";
import avatar from "/images/avatar.png";
import { CiMenuFries } from "react-icons/ci";
import Navbar from "../Navbar/Navbar";

const ProfileNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  // DropDown hidden when click outside
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!showNav) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showNav]);
  // ref={popupRef} use in current DropDown div
  // Dropdown program End
  return (
    <div className="flex items-center justify-between gap-3 pb-2 overflow-hidden">
      <div className="flex justify-center items-center gap-5 ml-2">
        {" "}
        <div className="darkAndLight">
          <DarkLight />
        </div>
        <div className="profile group rounded-full w-[100px]">
        <img
            className="w-16 cursor-pointer"
            src={avatar}
            alt="avatar"
          />
          <div className="profileDropDown hidden group-hover:block">
            <ul>
              <li>Mezbah</li>
              <li>email@gmail.com</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
          
      </div>
      <div ref={popupRef}>
        <div>
          <CiMenuFries
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="text-4xl m-3 text-themeColor cursor-pointer lg:hidden block"
          />
        </div>
        {showNav && (
          <div className="dropdown lg:hidden md:top-[120px] top-[200px]">
            <Navbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;
