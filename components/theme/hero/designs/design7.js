import React, { useState } from "react";
import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import Button from "../../../ui/Button";
const Design7 = ({ heroData, handleEdit }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="w-[482px] h-[482px] top-12  absolute bg-primary opacity-40 rotate-[65deg] rounded-3xl drop-shadow-lg backdrop-filter -right-[420px]"></div>
        <div className="w-[482px] h-[482px] top-12 opacity-90  absolute bg-primary rotate-45 rounded-3xl drop-shadow-lg backdrop-filter -right-[420px]"></div>
        <div className="w-[260px] h-[260px] drop-shadow-lg backdrop-filter rotate-45 absolute left-[27px] bottom-[-224px] rounded-3xl   bg-primary opacity-40"></div>

        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <span className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
                Logo
              </span>
            </span>
            <button
              onClick={() => {
                setOpenNav(!openNav);
              }}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black dark:hover:bg-primary dark:focus:ring-secondary"
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
                    className="block cursor-pointer md:px-2  py-2 pl-3 pr-4 text-black bg-primary rounded md:bg-primary  text-lg md:text-secondary md:p-0 dark:text-secondary"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-black md:dark:hover:bg-transparent">
                    About
                  </span>
                </li>
                <li>
                  <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-black rounded hover:bg-primary md:hover:bg-primary md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-black md:dark:hover:bg-transparent">
                    Services
                  </span>
                </li>
                <li>
                  <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-black md:dark:hover:bg-transparent">
                    Pricing
                  </span>
                </li>
                <li>
                  <span className="block text-lg cursor-pointer py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-secondary dark:hover:text-black md:dark:hover:bg-transparent">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Container className="flex h-[500px] relative space-y-10 flex-col justify-center text-center items-center">
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
          <div className="flex items-center gap-6">
            <Button variant="primary" className="font-semibold  ">
              <EditorComp
                handleEdit={handleEdit}
                initialValue={heroData.primaryBtn}
                keys="primaryBtn"
              />
            </Button>
            <Button variant="outline">
              <EditorComp
                handleEdit={handleEdit}
                initialValue={heroData.secondaryBtn}
                keys="secondaryBtn"
              />
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design7;
