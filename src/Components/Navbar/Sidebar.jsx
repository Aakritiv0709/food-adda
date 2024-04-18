import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ className }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const navlinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "Indian", arrow: <FontAwesomeIcon icon={faArrowRight} /> },
    { id: 3, name: "Italian", arrow: <FontAwesomeIcon icon={faArrowRight} /> },
    { id: 4, name: "Thai", arrow: <FontAwesomeIcon icon={faArrowRight} /> },
    { id: 5, name: "Chinese", arrow: <FontAwesomeIcon icon={faArrowRight} /> },
    { id: 6, name: "Shop" },
    { id: 7, name: "Pages", arrow: <FontAwesomeIcon icon={faArrowRight} /> },
  ];

  return (
    <>
      {/* Hamburger icon */}
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleSidebar}
        className={`absolute top-5 left-4 cursor-pointer w-4 mr-4 lg:hidden block ${
          open ? "hidden" : "block"
        }`}
      />

      {/* Cross icon */}
      <FontAwesomeIcon
        icon={faTimes}
        onClick={toggleSidebar}
        className={`absolute top-5 left-4 cursor-pointer z-50 ${
          open ? "block" : "hidden"
        }`}
      />

      {/* Sidebar */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } flex-col justify-center items-center h-screen absolute z-20 top-0 w-56 bg-gray-200 ${className}`}
      >
        {navlinks.map((nav) => (
          <li key={nav.id} className="py-2">
            {nav.name} {nav.arrow && nav.arrow}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
