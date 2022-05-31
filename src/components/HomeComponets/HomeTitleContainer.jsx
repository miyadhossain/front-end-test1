import React from "react";
import AppContainer from "../utilis/AppContainer";

const titleContes = [
  {
    id: 1,
    contetn1: "1 BN+",
    content2: "Daily Impressions",
    contentsColor: "text-white",
    background: "bg-violet",
    borderColor: "border-[#ccc]",
    borderType: "border-2 border-dashed",
  },
  {
    id: 2,
    contetn1: "$500K+",
    content2: "Paid",
    contentsColor: "text-violet",
    background: "bg-white",
    borderColor: "border-white",
    borderType: "border solid",
  },
  {
    id: 1,
    contetn1: "8K+",
    content2: "Global Publishers",
    contentsColor: "text-white",
    background: "bg-[#ED6A49]",
    borderColor: "border-orange",
    borderType: "border solid",
  },
];

const HomeTitleContainer = () => {
  return (
    <>
      <AppContainer>
        <h1 className="text-center text-white text-4xl pt-10">Title 1</h1>
        <div className="flex justify-between mt-20">
          {titleContes.map((item) => (
            <div
              key={item.id}
              className={`${item.background} ${item.borderType} ${item.borderColor} ${item.contentsColor} flex justify-center items-center rounded-full w-80 h-80 shadow-2xl`}
            >
              <div className="text-center space-y-10">
                <h1 className="text-5xl font-bold">{item.contetn1}</h1>
                <h3 className="text-3xl">{item.content2}</h3>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </>
  );
};

export default HomeTitleContainer;
