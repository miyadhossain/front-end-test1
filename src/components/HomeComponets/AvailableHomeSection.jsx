import React from "react";
import MessageImg from "../../assets/message.png";
import NetworkImg from "../../assets/network.png";
import SpeakerImg from "../../assets/speaker.png";
import AppContainer from "../utilis/AppContainer";
import AppDividerTitle from "../utilis/AppDividerTitle";

const imgArr = [
  {
    id: 1,
    source: SpeakerImg,
    text: "Text 1",
    btnText: "Hello 1",
  },
  {
    id: 2,
    source: MessageImg,
    text: "Text 2",
    btnText: "Hello 2",
  },
  {
    id: 3,
    source: NetworkImg,
    text: "Text 3",
    btnText: "Hello 3",
  },
];

const AvailableHomeSection = () => {
  return (
    <div className="my-20">
      <AppDividerTitle title="AVAILABLE FOR EVERYONE" />
      <div className="flex justify-center text-2xl">Here will be a text</div>
      <AppContainer>
        <div className="mt-20">
          <div className="flex items-center justify-evenly">
            {imgArr.map(({ id, source, text, btnText }) => (
              <div className="flex flex-col items-center space-y-8" key={id}>
                <img
                  className="w-44 h-44 object-cover border border-light rounded-full p-10 bg-[#FFFFFF] shadow"
                  src={source}
                  alt="items image"
                />
                <div className="text-2xl">{text}</div>
                <button className="bg-violet text-lg px-24 py-2 rounded-full text-white shadow-2xl shadow-black/20">
                  {btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default AvailableHomeSection;
