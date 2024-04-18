import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Navbar/Sidebar";

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://country-state-city-search-rest-api.p.rapidapi.com/allcountries",
          {
            headers: {
              "X-RapidAPI-Key":
                "a49b4f5e57msh311052f07c9060ap10860cjsn9b617ecce4d4",
              "X-RapidAPI-Host":
                "country-state-city-search-rest-api.p.rapidapi.com",
            },
          }
        );
        if (response.status === 200) {
          setCountries(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // fetchData();
  }, []);

  return (
    <div className="bg-darkyellow relative">
      <span>
        <Sidebar className="" />
      </span>
      <div className="flex w-11/12 sm:flex-row sm:justify-between sm:h-14 h-28 items-center md:w-11/12 m-auto justify-center flex-col">
        <div className="sm:w-8/12  w-full order-2 text-lg text-center sm:text-start sm:order-1">
          <FontAwesomeIcon
            icon={faPhone}
            className="mx-2 h-4 hover:text-darkred"
          />
          <span className="hover:text-darkred"> 0000 - 123456789</span>
          <br className="sm:hidden block" />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mx-2 hover:text-darkred"
          />
          <span className="hover:text-darkred"> sample@example.com</span>
        </div>
        <div className="sm:w-3/12 w-full sm:text-end order-1 text-center sm:order-2">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select>
              {countries.map((country, index) => (
                <option key={index}>{country.name.substring(0, 7)}</option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
