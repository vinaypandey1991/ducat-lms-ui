import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <>
      <section className="bg-lightGrey10 dark:dark:bg-lightGrey10-dark relative">
        <div>
          <img
            src="assets/images/about/about_6.png"
            alt=""
            className="absolute top-[110px] left-[216px] animate-move-hor z-1"
          />
          <img
            src="assets/images/about/about_7.png"
            alt=""
            className="absolute top-[360px] left-[162px] md:left-[262px] lg:left-[318px] 2xl:left-[162px] animate-spin-slow z-1"
          />
          <img
            src="assets/images/about/about_9.png"
            alt=""
            className="absolute top-[430px] left-[156px] md:top-[630px] md:left-[476px] lg:top-[433px] lg:left-[196px] 2xl:top-[430px] 2xl:left-[156px] animate-move-var z-1"
          />
        </div>
        <div className="container pt-20 pb-20 2xl:pt-30 2xl:pb-90px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
            <div
              className="lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2"
              data-aos="fade-up"
            >
              <div className="relative">
                <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                  Course List
                </span>
                <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor pb-25px dark:text-blackColor-dark">
                  What They Say About us
                </h3>
                <p className="text-sm md:text-base text-contentColor mb-5 2xl:mb-45px dark:text-contentColor-dark">
                  Construction is a general term meaning the art and science to
                  form systems organizations and comes from Latin Construction
                  is
                </p>
                <div>
                  <a
                    className="text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded dark:hover:text-whiteColor dark:hover:bg-secondaryColor"
                    href="#"
                  >
                    Explore More <i className="icofont-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-whiteColor px-25px py-50px mb-22px relative dark:bg-whiteColor-dark">
                <p className="text-base lg:text-sm 2xl:text-base text-contentColor dark:text-contentColor-dark">
                  “The other hand we denounce righteou indg ation men who are so
                  beguiled and demoraliz by the the mo ment.Dislike men who so
                  development co”
                </p>
                <div className="text-xl lg:text-3xl text-whiteColor bg-primaryColor w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center absolute top-0 left-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20">
                  <FaQuoteLeft/>
                </div>
                <span className="w-0 h-0 border-l-12 border-r-12 border-t-15 border-l-transparent border-r-transparent border-t-whiteColor absolute bottom-[-14px] left-[27px] dark:border-t-whiteColor-dark" />
              </div>
              <div className="flex items-center gap-5 2xl:gap-20">
                <div>
                  <img
                    src="assets/images/about/about_5.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl lg:text-lg 2xl:text-xl font-semibold text-blackColor dark:text-blackColor-dark">
                    Robind Jon
                  </h4>
                  <p className="text-base lg:text-size-15 2xl:text-base text-lightGrey9 dark:text-lightGrey9-dark">
                    Desginer TechBoot
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-whiteColor px-25px py-50px mb-22px relative dark:bg-whiteColor-dark">
                <p className="text-base lg:text-sm 2xl:text-base text-contentColor dark:text-contentColor-dark">
                  “The other hand we denounce righteou indg ation men who are so
                  beguiled and demoraliz by the the mo ment.Dislike men who so
                  development co”
                </p>
                <div className="text-xl lg:text-3xl text-whiteColor bg-primaryColor w-10 h-10 lg:w-15 lg:h-15 flex items-center justify-center absolute top-0 left-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20">
                  <FaQuoteLeft />
                </div>
                <span className="w-0 h-0 border-l-12 border-r-12 border-t-15 border-l-transparent border-r-transparent border-t-whiteColor absolute bottom-[-14px] left-[27px] dark:border-t-whiteColor-dark" />
              </div>
              <div className="flex items-center gap-5 2xl:gap-20">
                <div>
                  <img
                    src="assets/images/about/about_5.png"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl lg:text-lg 2xl:text-xl font-semibold text-blackColor dark:text-blackColor-dark">
                    Robind Jon
                  </h4>
                  <p className="text-base lg:text-size-15 2xl:text-base text-lightGrey9 dark:text-lightGrey9-dark">
                    Desginer TechBoot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
