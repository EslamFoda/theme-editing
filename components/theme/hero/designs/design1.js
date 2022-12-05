import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { useState } from "react";
import Button from "../../../ui/Button";
import ImageComp from "../../gallery/common/imageComp";
const Design1 = ({
  heroData,
  handleEdit,
  compIndex,
  comp,themeData
}) => {
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <>
    
        <div className="bg-gradient-to-b from-primary to-secondary ">
          <Container>
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                <span  className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Logo
                  </span>
                </span>
                <button
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-primary dark:focus:ring-secondary"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`${
                    openNav ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0  md:text-sm md:font-medium md:border-0 md:bg-white  md:dark:bg-transparent dark:border-white">
                    <li>
                      <span
                        className="block cursor-pointer md:px-2  py-2 pl-3 pr-4 text-white bg-secondary rounded md:bg-secondary  text-lg md:text-primary md:p-0 dark:text-primary"
                        aria-current="page"
                      >
                        Home
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        About
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-white rounded hover:bg-primary md:hover:bg-primary md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Services
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Pricing
                      </span>
                    </li>
                    <li>
                      <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-secondary dark:hover:text-white md:dark:hover:bg-transparent">
                        Contact
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="flex   mx-auto  lg:justify-between md:justify-center  justify-center items-center py-16 gap-3 flex-wrap ">
              <div className="flex text-white  flex-col lg:w-[450px] md:w-[400px] w-[450px]">
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.title}
                  keys="title"
                />
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.subTitle}
                  keys="subTitle"
                />
                <div className="flex items-center w-full justify-between gap-4 mt-4">
                  <Button className="flex-1 !bg-white font-semibold !text-md !text-primary !rounded-none">
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.primaryBtn}
                      keys="primaryBtn"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 !border-white !rounded-none !text-white hover:!bg-transparent !bg-transparent"
                  >
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.secondaryBtn}
                      keys="secondaryBtn"
                    />
                  </Button>
                </div>
              </div>
              <div className="h-96 lg:w-[450px] md:w-[400px] w-[450px]">
                <ImageComp
                themeData={themeData}
                  comp={comp}
                  compIndex={compIndex}
                  image={heroData.pic}
                />
              </div>
            </div>
          </Container>
        </div>
    </>
  );
};

export default Design1;
