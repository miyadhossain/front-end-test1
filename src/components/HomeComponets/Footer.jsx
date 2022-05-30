import React from "react";
import FacebookImg from "../../assets/fb.png";
import InstragramImg from "../../assets/instragram.png";
import Logo from "../../assets/logo.png";
import YoutubeImg from "../../assets/yt.png";
import AppContainer from "../utilis/AppContainer";

const Footer = () => {
  return (
    <AppContainer>
      <footer class="pt-10">
        <div class="max-w-6xl m-auto flex flex-wrap">
          <div class="w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-lg text-violet font-medium mb-6">
              We are social
            </div>

            <a href="#" class="my-3 block text-lg font-medium">
              FOLLOW US
            </a>
            <div className="flex items-center space-x-4">
              <div>
                <img
                  className="w-6 h-6"
                  src={InstragramImg}
                  alt="instragram logo"
                />
              </div>
              <div>
                <img
                  className="w-6 h-6"
                  src={FacebookImg}
                  alt="facebook logo"
                />
              </div>
              <div>
                <img className="w-6 h-6" src={YoutubeImg} alt="youtube logo" />
              </div>
            </div>
            <div className="mt-8 m-0 w-32 h-20">
              <img className="w-32 h-20 object-cover" src={Logo} alt="logo" />
            </div>
          </div>

          <div class="w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-lg text-violet font-medium mb-6">Links</div>

            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Advertisers
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Publishers
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Influencers
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Ad Formats
            </a>
          </div>

          <div class="w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-lg text-violet font-medium mb-6">
              Documentation
            </div>

            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Cancelation Policy
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-bold"
            >
              Blog
            </a>
          </div>

          <div class="w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-lg text-violet font-medium mb-6">Support</div>

            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-semibold"
            >
              Faq
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-semibold"
            >
              Media Kit
            </a>
            <a
              href="#"
              class="my-3 block text-lg uppercase duration-700 font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </AppContainer>
  );
};

export default Footer;
