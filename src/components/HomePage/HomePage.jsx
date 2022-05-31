import React from "react";
import AvailableHomeSection from "../HomeComponets/AvailableHomeSection";
import Carousel from "../HomeComponets/Carousel";
import Footer from "../HomeComponets/Footer";
import Header from "../HomeComponets/Header";
import HomeTitleContainer from "../HomeComponets/HomeTitleContainer";
import NavBar from "../HomeComponets/NavBar";
import VersatitleAddComponent from "../HomeComponets/VersatitleAddComponent";

const HomePage = () => {
  return (
    <>
      <section>
        <NavBar />
        <div className="mt-10">
          <Header />
        </div>
        <AvailableHomeSection />
        <VersatitleAddComponent />
        <div className="bg-violet my-20 min-h-[600px]">
          <HomeTitleContainer />
        </div>
        <Carousel />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
