import React from "react";

const Login = () => {
  return (
    <>
      <main className="bg-transparent">
        <section className="relative">
          <div className="container py-100px">
            <div className="tab md:w-2/3 mx-auto">
              {/*  tab contents */}
              <div className="shadow-container bg-whiteColor dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
                <div className="tab-contents">
                  {/* login form*/}
                  <div className="opacity-100 transition-opacity duration-150 ease-linear">
                    {/* heading   */}
                    <div className="text-center">
                      <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                        Login
                      </h3>
                      <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                        Don't have an account yet?
                        <a
                          href="login.html"
                          className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                        >
                          Sign up for free
                        </a>
                      </p>
                    </div>
                    <form className="pt-25px" data-aos="fade-up">
                      <div className="mb-25px">
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Username or email
                        </label>
                        <input
                          type="text"
                          placeholder="Your username or email"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div className="mb-25px">
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                      </div>
                      <div className="text-contentColor dark:text-contentColor-dark flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember"
                            className="w-18px h-18px mr-2 block box-content"
                          />
                          <label htmlFor="remember"> Remember me</label>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <div className="my-25px text-center">
                        <button
                          type="submit"
                          className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                          Log in
                        </button>
                      </div>
                      {/* other login */}
                      <div>
                        <p className="text-contentColor dark:text-contentColor-dark text-center relative mb-15px before:w-2/5 before:h-1px before:bg-borderColor4 dark:before:bg-borderColor2-dark before:absolute before:left-0 before:top-4 after:w-2/5 after:h-1px after:bg-borderColor4 dark:after:bg-borderColor2-dark after:absolute after:right-0 after:top-4">
                          or Log-in with
                        </p>
                      </div>
                      <div className="text-center flex gap-x-1 md:gap-x-15px lg:gap-x-25px gap-y-5 items-center justify-center flex-wrap">
                        <button
                          type="submit"
                          className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                          <i className="icofont-facebook" /> Facebook
                        </button>
                        <button
                          type="submit"
                          className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                          <i className="icofont-google-plus" /> Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* animated icons */}
          <div>
            <img
              loading="lazy"
              className="absolute right-[14%] top-[30%] animate-move-var"
              src="assets/images/education/hero_shape2.png"
              alt="Shape"
            />
            <img
              loading="lazy"
              className="absolute left-[5%] top-1/2 animate-move-hor"
              src="assets/images/education/hero_shape3.png"
              alt="Shape"
            />
            <img
              loading="lazy"
              className="absolute left-1/2 bottom-[60px] animate-spin-slow"
              src="assets/images/education/hero_shape4.png"
              alt="Shape"
            />
            <img
              loading="lazy"
              className="absolute left-1/2 top-10 animate-spin-slow"
              src="assets/images/education/hero_shape5.png"
              alt="Shape"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
