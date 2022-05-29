import React from "react";
import Header from "../HomeComponets/Header";
import NavBar from "../HomeComponets/NavBar";
import AppContainer from "../utilis/AppContainer";

const HomePage = () => {
  return (
    <AppContainer>
      <section>
        <NavBar />
        <div className="mt-10">
          <Header />
        </div>
      </section>
    </AppContainer>
  );
};

export default HomePage;
