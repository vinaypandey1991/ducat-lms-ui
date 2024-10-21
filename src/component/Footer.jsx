import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <footer className="bg-darkblack">
        <div className="container pt-65px pb-5 lg:pb-10">
          {/* footer top or subscription */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30px md:gap-y-0 items-center pb-45px border-b border-darkcolor">
              <div data-aos="fade-up">
                <h4 className="text-4xl md:text-size-25 lg:text-size-40 font-bold text-whiteColor leading-50px md:leading-10 lg:leading-16">
                  Still You Need Our
                  <span className="text-primaryColor">Support</span> ?
                </h4>
                <p className="text-whiteColor text-opacity-65">
                  Don’t wait make a smart &amp; logical quote here. Its pretty
                  easy.
                </p>
              </div>
              <div data-aos="fade-up">
                <form className="max-w-form-xl md:max-w-form-md lg:max-w-form-lg xl:max-w-form-xl 2xl:max-w-form-2xl bg-deepgray ml-auto rounded relative">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    className="text-whiteColor h-62px pl-15px focus:outline-none border border-deepgray focus:border-whitegrey bg-transparent rounded w-full"
                  />
                  <button
                    type="submit"
                    className="px-3 md:px-10px lg:px-5 bg-primaryColor hover:bg-deepgray text-xs lg:text-size-15 text-whiteColor border border-primaryColor block rounded absolute right-0 top-0 h-full"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </section>
          {/* footer main */}
          <section>
            <div className="grid grid-cols-12 gap-30px md:gap-y-5 lg:gap-y-0 pt-60px pb-50px md:pt-30px md:pb-30px lg:pt-110px lg:pb-20">
              {/* left */}
              <div
                className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mr-30px"
                data-aos="fade-up"
              >
                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                  About us
                </h4>
                <p className="text-base lg:text-sm 2xl:text-base text-darkgray mb-30px leading-1.8 2xl:leading-1.8">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependable safe, and professional chauffeured
                  car end service in major cities across World.
                </p>
              </div>
              {/* middle 1 */}
              <div
                className="col-start-1 col-span-12 md:col-start-7 lg:col-start-5 md:col-span-6 lg:col-span-2"
                data-aos="fade-up"
              >
                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                  Usefull Links
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Teachers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Partner
                    </a>
                  </li>
                  
                </ul>
              </div>
              {/* middle 2 */}
              <div
                className="col-start-1 col-span-12 md:col-start-1 lg:col-start-7 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-60px"
                data-aos="fade-up"
              >
                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                  Course
                </h4>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Ui Ux Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                    >
                      Business Strategy
                    </a>
                  </li>
                  
                </ul>
              </div>
              {/* right */}
              <div
                className="col-start-1 col-span-12 md:col-start-7 lg:col-start-10 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-50px"
                data-aos="fade-up"
              >
                <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                  Recent Post
                </h4>
                <ul className="flex flex-col gap-y-5">
                  <li>
                    <a className="flex items-center gap-3 group cursor-pointer">
                      <div>
                        <img
                          src="https://dummyimage.com/50x50"
                          alt=""
                          className="w-61px h-54px"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-darkgray mb-7px">
                          02 Apr 2024
                        </p>
                        <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                          Best Your Business
                        </h6>
                      </div>
                    </a>
                  </li>
                  
                  <li>
                    <a className="flex items-center gap-3 group cursor-pointer">
                      <div>
                        <img
                          src="https://dummyimage.com/50x50"
                          alt=""
                          className="w-61px h-54px"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-darkgray mb-7px">
                          02 Apr 2024
                        </p>
                        <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                          Nice Your Business
                        </h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* footer copyright  */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-30px pt-10 items-center">
              <div className="lg:col-start-1 lg:col-span-3">
                <a href="index.html">
                  <img src="assets/images/logo/logo_2.png" alt="" />
                </a>
              </div>
              <div className="lg:col-start-4 lg:col-span-6">
                <p className="text-whiteColor">
                  Copyright © <span className="text-primaryColor">2024 </span>{" "}. All Rights Reserved.
                </p>
              </div>
              <div className="lg:col-start-10 lg:col-span-3">
                <ul className="flex gap-3 lg:gap-2 2xl:gap-3 lg:justify-end">
                  <li>
                    <a
                      href="#"
                      className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center flex items-center justify-center"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center flex items-center justify-center"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center flex items-center justify-center"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center flex items-center justify-center"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-40.19px lg:w-35px 2xl:w-40.19px h-37px lg:h-35px 2xl:h-37px leading-37px lg:leading-35px 2xl:leading-37px text-whiteColor bg-whiteColor bg-opacity-10 hover:bg-primaryColor text-center flex items-center justify-center"
                    >
                      <FaSkype />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
