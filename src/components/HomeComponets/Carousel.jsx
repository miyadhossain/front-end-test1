import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import "../../styles/Carousel.css";
import AppContainer from "../utilis/AppContainer";

const carouselItemsArr = [
  {
    id: 1,
    content: (
      <div className="max-w-[500px] bg-[#FFFFFF] border rounded-2xl">
        <div className="border border-dotted border-orange rounded-xl m-2">
          <div className="flex space-x-10 p-3">
            <div className="bg-[#D9D9D9] w-[150px] h-[150px]"></div>
            <div className="flex flex-col space-y-4 mt-4 text-violet text-base">
              <h4>Title 1</h4>
              <h4>Hello, Here will be a text</h4>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="max-w-[500px] bg-[#FFFFFF] border rounded-2xl">
        <div className="border border-dotted border-orange rounded-xl m-2">
          <div className="flex space-x-10 p-3">
            <div className="bg-[#D9D9D9] w-[150px] h-[150px]"></div>
            <div className="flex flex-col space-y-4 mt-4 text-violet text-base">
              <h4>Title 1</h4>
              <h4>Hello, Here will be a text</h4>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="max-w-[500px] bg-[#FFFFFF] border rounded-2xl">
        <div className="border border-dotted border-orange rounded-xl m-2">
          <div className="flex space-x-10 p-3">
            <div className="bg-[#D9D9D9] w-[150px] h-[150px]"></div>
            <div className="flex flex-col space-y-4 mt-4 text-violet text-base">
              <h4>Title 1</h4>
              <h4>Hello, Here will be a text</h4>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="max-w-[500px] bg-[#FFFFFF] border rounded-2xl">
        <div className="border border-dotted border-orange rounded-xl m-2">
          <div className="flex space-x-10 p-3">
            <div className="bg-[#D9D9D9] w-[150px] h-[150px]"></div>
            <div className="flex flex-col space-y-4 mt-4 text-violet text-base">
              <h4>Title 1</h4>
              <h4>Hello, Here will be a text</h4>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const Carousel = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div className="bg-[#dad8d8] min-h-[400px]">
      <div>
        <h1 className="text-center text-4xl text-violet">Title 1</h1>
      </div>
      <AppContainer>
        <Slider
          dots={true}
          slidesToShow={2}
          slidesToScroll={1}
          ref={sliderRef}
          arrows={false}
          appendDots={(dots) => <ul>{dots}</ul>}
          customPaging={() => (
            <div className="ft-slick__dots--custom">
              <div className="loading" />
            </div>
          )}
        >
          {carouselItemsArr.map((item) => {
            return (
              <div className="mt-12" key={item.id}>
                {item.content}

                {/* buttons */}
              </div>
            );
          })}
        </Slider>
        <div className="flex justify-center space-x-32 items-center mt-10">
          <div onClick={() => sliderRef.current.slickPrev()}>
            <button className="bg-[#FFFFFF] rounded-full p-2">
              <img className="w-6 h-6" src={LeftArrow} alt="left-arrow icon" />
            </button>
          </div>
          <div onClick={() => sliderRef.current.slickNext()}>
            <button className="bg-[#FFFFFF] rounded-full p-2">
              <img
                className="w-6 h-6"
                src={RightArrow}
                alt="right-arrow icon"
              />
            </button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default Carousel;
