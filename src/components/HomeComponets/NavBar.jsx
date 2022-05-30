import React from "react";
import Logo from "../../assets/logo.png";
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

const NavBar = () => {
  return (
    <AppContainer>
      <nav className="my-6">
        {/* logo language section */}
        <div className="flex justify-between">
          <div>
            <img className="w-32 h-20 object-cover" src={Logo} alt="logo" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-xs text-green-400 font-bold">BN</button>{" "}
            <span className="text-xs text-gray font-bold">/</span>{" "}
            <button className="text-xs">EN</button>
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
        </div>
      </nav>
    </AppContainer>
  );
};

export default NavBar;
