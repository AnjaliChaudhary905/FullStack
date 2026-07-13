import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok, AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full border-t border-[#C2C7D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="flex flex-col items-start">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                className="w-8 h-8 object-contain"
                src="logo.png"
                alt="logo"
              />
              <h5 className="font-semibold text-[#0C6967] text-2xl">
                momos
              </h5>
            </div>

            <p className="mt-5 text-[#6B788E] text-base leading-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit in. Lorem
              nunc nullam morbi urna amet suspendisse nullam ac vivamus.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-12">

            {/* Momos + Legals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

              <div>
                <h5 className="font-semibold text-[#0C6967] text-xl mb-4">
                  momos
                </h5>

                <div className="space-y-2 text-[#6B788E]">
                  <p>About Us</p>
                  <p>Our Menu</p>
                  <p>Our Services</p>
                  <p>Contact Us</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-[#0C6967] text-xl mb-4">
                  Legals
                </h5>

                <div className="space-y-2 text-[#6B788E]">
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Support</p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="col-span-2 sm:col-span-1">
                <h5 className="font-semibold text-[#0C6967] text-xl mb-4">
                  Follow Us
                </h5>

                <div className="grid grid-cols-3 gap-4 w-fit text-[#6B788E]">

                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="text-3xl" />
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <TiSocialLinkedinCircular className="text-4xl" />
                  </a>

                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <AiFillTwitterCircle className="text-3xl" />
                  </a>

                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <IoLogoYoutube className="text-3xl" />
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagramSquare className="text-3xl" />
                  </a>

                  <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                    <AiFillTikTok className="text-3xl" />
                  </a>

                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="border-t border-[#DFE2E6] my-8"></div>

        <p className="text-center text-[#6B788E] text-sm md:text-base">
          Copyright © 2023 Everest Momo Pvt Ltd. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;