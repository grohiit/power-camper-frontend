import React, { useState } from "react";
import { useRouter } from "next/router";
import { HeaderDropdownIcon } from "../common/Icons";

const NavbarDropdown = ({ isSelectShow, setSelectShow }) => {
  const router = useRouter();
  const options = [
    {
      value: "Grand-canyon",
      url: "/campgrounds/grand-canyon",
    },
    {
      value: "Plate River",
      url: "/campgrounds/plate-river",
    },
    {
      value: "Yosemite",
      url: "/campgrounds/yosemite",
    },
  ];

  const handleLanguageChange = (value) => {
    console.log(value);
  };
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      {isSelectShow && (
        <div
          onClick={() => setSelectShow(!isSelectShow)}
          className="nav-dropdown-overlay"
        ></div>
      )}

      <div className="relative " onClick={() => setSelectShow(!isSelectShow)}>
        <button className="custom_select text-[#4F535D] hover:text-[#754C29] font-Balsamiq text-sm lg:text-base flex items-center  mx-auto cursor-pointer ">
          <span>Campgrounds</span> <HeaderDropdownIcon />
        </button>
        {isSelectShow && (
          <div className="relative z-[30]  ">
            <ul className="select_body mx-0 list-unstyled cursor-pointer">
              {options.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => router.push(obj.url)}
                  className="py-2 px-3 text-xs lg:text-sm cursor-pointer"
                >
                  {obj.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarDropdown;
