import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const navlinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "Indian", arrow: <FontAwesomeIcon icon={faCaretDown} /> },
    { id: 3, name: "Italian", arrow: <FontAwesomeIcon icon={faCaretDown} /> },
    { id: 4, name: "Thai", arrow: <FontAwesomeIcon icon={faCaretDown} /> },
    { id: 5, name: "Chinese", arrow: <FontAwesomeIcon icon={faCaretDown} /> },
    { id: 6, name: "Shop" },
    { id: 7, name: "Pages", arrow: <FontAwesomeIcon icon={faCaretDown} /> },
  ];
  return (
    <div className=" ">
      <div className="w-11/12 h-28 flex relative  justify-between m-auto items-center">
        <div className="lg:w-2/12 w-5/12 text-center">
          <img src="/logo.avif" alt="logo" className="" />
        </div>
        <div className="lg:w-6/12 xl:block hidden">
          <ul className="lg:w-full flex text-lg text-gray-600 font-medium sm:justify-between text-center">
            {navlinks.map((nav) => (
              <li className="hover:text-darkred " key={nav.id}>
                {nav.name}
                {nav.arrow}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-3/12 w-7/12 text-end text-gray-900">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="w-6 h-6 mr-4 hover:text-darkred hidden lg:inline-block"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-6 h-6 mr-4 hover:text-darkred"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="w-6 h-6 mr-4 hover:text-darkred"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-6 h-6 hover:text-darkred"
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Navbar;
