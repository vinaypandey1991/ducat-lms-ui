import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa6";

const Course = () => {
  return (
    <>
      <main className="bg-transparent">
        {/* banner section */}
        <section>
          {/* banner section */}
          <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-100px 2xl:pb-150px 2xl:pt-40.5">
            {/* animated icons */}
            <div>
              <img
                className="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
                src="assets/images/herobanner/herobanner__1.png"
                alt=""
              />
              <img
                className="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
                src="assets/images/herobanner/herobanner__2.png"
                alt=""
              />
              <img
                className="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
                src="assets/images/herobanner/herobanner__3.png"
                alt=""
              />
              <img
                className="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
                src="assets/images/herobanner/herobanner__5.png"
                alt=""
              />
            </div>
            <div className="container">
              <div className="text-center">
                <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-blackColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
                  Featured Courses
                </h1>
                <ul className="flex gap-1 justify-center">
                  <li>
                    <a
                      href="index.html"
                      className="text-lg text-blackColor2 dark:text-blackColor2-dark"
                    >
                      Home <i className="icofont-simple-right" />
                    </a>
                  </li>
                  <li>
                    <span className="text-lg text-blackColor2 dark:text-blackColor2-dark">
                      Featured Course
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* courses section */}
        <div>
          <div className="container tab py-10 md:py-50px lg:py-60px 2xl:py-100px">
            {/* courses header */}
            <div
              className="courses-header flex justify-between items-center flex-wrap px-13px py-10px border border-borderColor dark:border-borderColor-dark mb-30px gap-y-5"
              data-aos="fade-up"
            >
              <div>
                <p className="text-blackColor dark:text-blackColor-dark">
                  Showing 1–12 of 54 Results
                </p>
              </div>
              <div className="flex items-center">
                <div className="tab-links transition-all duraton-300 text-contentColor dark:text-contentColor-dark flex gap-11px">
                  <button className="inline-block hover:text-primaryColor active">
                    <i className="icofont-layout" />
                  </button>
                  <button className="inline-block hover:text-primaryColor">
                    <i className="icofont-listine-dots" />
                  </button>
                </div>
                <div className="pl-50px sm:pl-20 pr-10px">
                  <select className="text-blackColor bg-whiteColor py-3px pr-2 pl-3 rounded-md outline-none border-4 border-transparent focus:border-blue-light box-border">
                    <option value="Short by New">Short by New</option>
                    <option value="Short by New">Short by New</option>
                    <option value="One">One</option>
                    <option value="Tow">Tow</option>
                    <option value="Three">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-30px">
              {/* courses sidebar */}
              <div className="md:col-start-1 md:col-span-4 lg:col-span-3">
                <div className="flex flex-col">
                  {/* search input */}
                  <div
                    className="pt-30px pr-15px pl-10px pb-23px 2xl:pt-10 2xl:pr-25px 2xl:pl-5 2xl:pb-33px mb-30px border border-borderColor dark:border-borderColor-dark"
                    data-aos="fade-up"
                  >
                    <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-25px">
                      Search here
                    </h4>
                    <form className="w-full px-4 py-15px text-sm text-contentColor bg-lightGrey10 dark:bg-lightGrey10-dark dark:text-contentColor-dark flex justify-center items-center leading-26px">
                      <input
                        type="text"
                        placeholder="Search Produce"
                        className="placeholder:text-placeholder bg-transparent focus:outline-none placeholder:opacity-80 w-full"
                      />
                      <button type="submit">
                        <i className="icofont-search-1 text-base" />
                      </button>
                    </form>
                  </div>
                  {/* categories */}
                  <div
                    className="pt-30px pr-15px pl-10px pb-23px 2xl:pt-10 2xl:pr-25px 2xl:pl-5 2xl:pb-33px mb-30px border border-borderColor dark:border-borderColor-dark"
                    data-aos="fade-up"
                  >
                    <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-25px">
                      categories
                    </h4>
                    <ul className="flex flex-col gap-y-4">
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Mobile Set</a> <a href="#">03</a>
                      </li>
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Mobile Set</a> <a href="#">03</a>
                      </li>
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Raxila Dish nonyte</a> <a href="#">09</a>
                      </li>
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Fresh Vegetable</a> <a href="#">01</a>
                      </li>
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Fruites</a> <a href="#">00</a>
                      </li>
                      <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor text-sm font-medium px-13px py-2 border border-borderColor dark:border-borderColor-dark flex justify-between leading-7 transition-all duration-300">
                        <a href="#">Gesuriesey</a> <a href="#">26</a>
                      </li>
                    </ul>
                  </div>
                  {/* tags */}
                  <div
                    className="pt-30px pr-15px pl-10px pb-23px 2xl:pt-10 2xl:pr-25px 2xl:pl-5 2xl:pb-33px mb-30px border border-borderColor dark:border-borderColor-dark"
                    data-aos="fade-up"
                  >
                    <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-25px">
                      Tag
                    </h4>
                    <ul className="flex flex-col gap-y-23px">
                      <li className="text-primaryColor text-size-15 font-medium dark:text-contentColor-dark flex justify-between leading-26px group">
                        <a
                          href="#"
                          className="w-full flex items-center gap-11px"
                        >
                          <span className="w-14px h-15px border border-primaryColor bg-primaryColor group-hover:border-primaryColor group-hover:bg-primaryColor" />
                          <span>Mechanic</span>
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark flex justify-between leading-26px group">
                        <a
                          href="#"
                          className="w-full flex items-center gap-11px"
                        >
                          <span className="w-14px h-15px border border-darkdeep6 group-hover:border-primaryColor group-hover:bg-primaryColor" />
                          <span>English</span>
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark flex justify-between leading-26px group">
                        <a
                          href="#"
                          className="w-full flex items-center gap-11px"
                        >
                          <span className="w-14px h-15px border border-darkdeep6 group-hover:border-primaryColor group-hover:bg-primaryColor" />
                          <span>Computer Science</span>
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark flex justify-between leading-26px group">
                        <a
                          href="#"
                          className="w-full flex items-center gap-11px"
                        >
                          <span className="w-14px h-15px border border-darkdeep6 group-hover:border-primaryColor group-hover:bg-primaryColor" />
                          <span>Data &amp; Tech</span>
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:hover:text-primaryColor dark:text-contentColor-dark flex justify-between leading-26px group">
                        <a
                          href="#"
                          className="w-full flex items-center gap-11px"
                        >
                          <span className="w-14px h-15px border border-darkdeep6 group-hover:border-primaryColor group-hover:bg-primaryColor" />
                          <span>Ux Desgin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* skills */}
                  <div
                    className="pt-30px pr-15px pl-10px pb-23px 2xl:pt-10 2xl:pr-25px 2xl:pl-5 2xl:pb-33px mb-30px border border-borderColor dark:border-borderColor-dark"
                    data-aos="fade-up"
                  >
                    <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold leading-30px mb-25px">
                      Skill Level
                    </h4>
                    <ul className="flex flex-col gap-y-10px">
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:text-contentColor-darkdark:hover:text-primaryColor flex justify-between leading-26px">
                        <a href="#" className="w-full">
                          {" "}
                          All{" "}
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:text-contentColor-darkdark:hover:text-primaryColor flex justify-between leading-26px">
                        <a href="#" className="w-full">
                          {" "}
                          Fullstack{" "}
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:text-contentColor-darkdark:hover:text-primaryColor flex justify-between leading-26px">
                        <a href="#" className="w-full">
                          {" "}
                          English Learn{" "}
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:text-contentColor-darkdark:hover:text-primaryColor flex justify-between leading-26px">
                        <a href="#" className="w-full">
                          {" "}
                          Intermediate{" "}
                        </a>
                      </li>
                      <li className="text-contentColor text-size-15 font-medium hover:text-primaryColor dark:text-contentColor-darkdark:hover:text-primaryColor flex justify-between leading-26px">
                        <a href="#" className="w-full">
                          {" "}
                          Wordpress{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* courses main */}
              <div className="md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-9 space-y-[30px]">
                <div className="tab-contents">
                  {/* grid ordered cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-30px">
                    {/* card 1 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_1.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold">
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    23 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    1 hr 30 min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Foundation course to under stand about softwere
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $32.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-3 pt-15px">
                              <div>
                                <a class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                  <FaCartPlus />
                                </a>
                              </div>
                              <div>
                                <a class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                  <FaHeart />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 2 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_2.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                                  Mechanical
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    29 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    2 hr 10 min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Nidnies course to under stand about softwere
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $32.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-greencolor">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                              <div>
                                <a
                                  href="instructor-details.html"
                                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                  <img
                                    className="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_2.jpg"
                                    alt=""
                                  />
                                  Rinis Jhon
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 3 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_3.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
                                  Development
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    25 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    1 hr 40 min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Minws course to under stand about solution
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $40.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                              <div>
                                <a
                                  href="instructor-details.html"
                                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                  <img
                                    className="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_3.jpg"
                                    alt=""
                                  />
                                  Micle John
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 4 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_4.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold">
                                  Ui &amp; UX Design
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    36 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    3 hr 40 min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Design course to under stand about solution
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $40.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                              <div>
                                <a
                                  href="instructor-details.html"
                                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                  <img
                                    className="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_4.jpg"
                                    alt=""
                                  />
                                  <span className="flex flex-shrink-0">
                                    Micle Robin
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 5 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_5.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-orange rounded font-semibold">
                                  Data &amp; Tech
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    36 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    3 hr 40 min
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Data course to under stand about solution
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $40.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                              <div>
                                <a
                                  href="instructor-details.html"
                                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                  <img
                                    className="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span className="flex flex-shrink-0">
                                    Micle Robin
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card 6 */}
                    <div className="group">
                      <div className="tab-content-wrapper" data-aos="fade-up">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                          {/* card image */}
                          <div className="relative mb-4">
                            <a
                              href="course-details.html"
                              className="w-full overflow-hidden rounded"
                            >
                              <img
                                src="assets/images/grid/grid_6.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110"
                              />
                            </a>
                            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                              <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold">
                                  Big Data
                                </p>
                              </div>
                              <a
                                className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                href="#"
                              >
                                <i className="icofont-heart-alt text-base py-1 px-2" />
                              </a>
                            </div>
                          </div>
                          {/* card content */}
                          <div>
                            <div className="grid grid-cols-2 mb-15px">
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    30 Lesson
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                </div>
                                <div>
                                  <span className="text-sm text-black dark:text-blackColor-dark">
                                    3 hr 40 min
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-start md:text-end flex">
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <FaStar className="text-size-15 text-yellow" />
                              <span className="text-xs text-lightGrey6">
                                (44)
                              </span>
                            </div>
                            <a
                              href="course-details.html"
                              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                              Big data to under stand about solution pacage
                            </a>
                            {/* price */}
                            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                              $40.00
                              <del className="text-sm text-lightGrey4 font-semibold">
                                / $67.00
                              </del>
                              <span className="ml-6">
                                <del className="text-base font-semibold text-secondaryColor3">
                                  Free
                                </del>
                              </span>
                            </div>
                            {/* author and rating*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                              <div>
                                <a
                                  href="instructor-details.html"
                                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                >
                                  <img
                                    className="w-[30px] h-[30px] rounded-full mr-15px"
                                    src="assets/images/grid/grid_small_1.jpg"
                                    alt=""
                                  />
                                  <span className="flex flex-shrink-0">
                                    Micle Robin
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* pagination */}
                <div>
                  <ul className="flex items-center justify-center gap-15px mt-60px mb-30px">
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor cursor-not-allowed flex items-center justify-center"
                      >
                        <FaAngleDoubleLeft />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-whiteColor hover:text-whiteColor bg-primaryColor hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-primaryColor dark:hover:bg-primaryColor"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor flex items-center justify-center"
                      >
                        <FaAngleDoubleRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Course;
