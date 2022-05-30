import React from "react";
import AppContainer from "../utilis/AppContainer";

const Header = () => {
  return (
    <AppContainer>
      <header className="flex items-center justify-between px-3">
        <div>
          <h1 className="text-3xl text-violet">Here will be a Title</h1>
          <h3 className="text-2xl my-16">Here will be a text</h3>
        </div>
        <div className="border border-white bg-[#FFFFFF] px-40 py-32 text-2xl font-bold">
          Artwork for title 1
        </div>
      </header>
    </AppContainer>
  );
};

export default Header;
