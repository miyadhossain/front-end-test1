import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "../../styles/NavBar.css";
import AppContainer from "../utilis/AppContainer";

const headersElements = [
  {
    id: 1,
    element: "Home",
    color: "text-orange",
  },
  {
    id: 2,
    element: "Advertisers",
    color: "text-violet",
  },
  {
    id: 3,
    element: "Publishers",
    color: "text-violet",
  },
  {
    id: 4,
    element: "Influencers",
    color: "text-violet",
  },
  {
    id: 5,
    element: "Ad Formats",
    color: "text-violet",
  },
  {
    id: 6,
    element: "Blog",
    color: "text-violet",
  },
  {
    id: 7,
    element: "Contact us",
    color: "text-violet",
  },
];

const btns = [
  {
    id: 1,
    text: "BN",
  },
  {
    id: 2,
    text: "EN",
  },
];

const NavBar = () => {
  const [activeColor, setActiveColor] = useState(0);
  return (
    <AppContainer>
      <nav className="mt-6">
        {/* logo language section */}
        <div className="flex justify-between">
          <div>
            <img className="w-32 h-20 object-cover" src={Logo} alt="logo" />
          </div>
          <div className="flex items-center space-x-2">
            {/* <button className="text-xs text-green-400 font-bold">BN</button>{" "}
            <span className="text-xs text-gray font-bold">/</span>{" "}
            <button className="text-xs">EN</button> */}
            {btns.map((btn, index) => (
              <button
                onClick={() => setActiveColor(index)}
                key={btn.id}
                className={`font-bold ${
                  index === activeColor ? "text-green-400" : "text-gray-400"
                }`}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-3 my-6">
          <div className="flex items-center space-x-10">
            {headersElements.map(({ id, element, color }) => (
              <h
                className={`text-base uppercase font-semibold ${color}`}
                key={id}
              >
                {element}
              </h>
            ))}
          </div>
          <div className="bg-[#FFFFFF] rounded-full px-6 py-2 nav_btn">
            <div className="flex items-center space-x-8 P-2">
              <div>
                <button>LOGIN</button>
              </div>
              <div>
                <button className="bg-[#ed6a49] text-white rounded-full px-8 py-2 shadow-2xl">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </AppContainer>
  );
};

export default NavBar;
