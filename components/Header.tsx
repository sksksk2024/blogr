'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from './../images/logo.svg';
import arrowLight from './../images/icon-arrow-light.svg';
import burger from './../images/icon-hamburger.svg';
import close from './../images/icon-close.svg';
import arrowDark from './../images/icon-arrow-dark.svg';

export default function Header() {
  const [openCards, setOpenCards] = useState<{
    product: boolean;
    company: boolean;
    connect: boolean;
  }>({
    product: false,
    company: false,
    connect: false,
  });
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleCardToggle = (card: 'product' | 'company' | 'connect') => {
    setOpenCards((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  const handleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <header className="rounded-bl-100BR mx-auto p-48P pb-160P font-ubuntu tracking-wide">
      <div className="relative flex justify-between items-center max-w-container-1400 mx-auto">
        <div className="flex justify-start items-center gap-20">
          <Image src={logo} alt="blogr" />

          {/* DESKTOP MENU */}
          <div className="hidden relative justify-center items-start gap-10 lg:flex">
            <div className="">
              <button
                className="flex justify-center items-center gap-2"
                onClick={() => handleCardToggle('product')}
              >
                <span className="cursor-pointer hover:underline">Product</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              {openCards.product && (
                <ul className="absolute -translate-x-1/4 top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
                  <li className="cursor-pointer hover:font-bold">Overview</li>
                  <li className="cursor-pointer hover:font-bold">Pricing</li>
                  <li className="cursor-pointer hover:font-bold group">
                    Marketplace
                  </li>
                  <li className="cursor-pointer hover:font-bold group">
                    Features
                  </li>
                  <li className="cursor-pointer hover:font-bold group">
                    Integrations
                  </li>
                </ul>
              )}
            </div>

            <div className="">
              <button
                className="flex justify-center items-center gap-2"
                onClick={() => handleCardToggle('company')}
              >
                <span className="cursor-pointer hover:underline">Company</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              {openCards.company && (
                <ul className="absolute top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
                  <li className="cursor-pointer hover:font-bold">About</li>
                  <li className="cursor-pointer hover:font-bold">Team</li>
                  <li className="cursor-pointer hover:font-bold">Blog</li>
                  <li className="cursor-pointer hover:font-bold group">
                    Careers
                  </li>
                </ul>
              )}
            </div>

            <div className="">
              <button
                className="flex justify-center items-center gap-2"
                onClick={() => handleCardToggle('connect')}
              >
                <span className="cursor-pointer hover:underline">Connect</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              {openCards.connect && (
                <ul className="absolute top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
                  <li className="cursor-pointer hover:font-bold">Contact</li>
                  <li className="cursor-pointer hover:font-bold">Newsletter</li>
                  <li className="cursor-pointer hover:font-bold group">
                    LinkedIn
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="hidden justify-center items-center lg:flex">
          <button className="text-grayish-blue">Login</button>
          <button
            id="sign-up"
            className="w-128W group relative -top-8I text-light-red uppercase font-bold cursor-pointer"
          >
            <span className="absolute z-10 text-sm hover:opacity-100 group-hover:text-white">
              Sign Up
            </span>
            <div className="z-0 absolute -top-[12px] left-[30px] w-128W h-48H bg-white px-32P py-16P rounded-full group-hover:opacity-10"></div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          {!openMenu ? (
            <Image
              src={burger}
              className="cursor-pointer"
              alt="click for menu"
              onClick={() => handleMenu()}
            />
          ) : (
            <>
              <Image
                src={close}
                className="cursor-pointer"
                alt="close menu"
                onClick={() => handleMenu()}
              />
              <div className="z-50 absolute left-1/2 top-48I -translate-x-1/2 flex flex-col justify-start items-center gap-5 w-full p-64P bg-white rounded-10BR shadow-xl">
                {/* PRODUCT */}
                <button
                  className="flex justify-center items-center gap-2"
                  onClick={() => handleCardToggle('product')}
                >
                  <span className="text-very-dark-black-blue font-bold cursor-pointer hover:underline">
                    Product
                  </span>

                  <Image
                    src={arrowDark}
                    className="relative top-[2px]"
                    alt="expand choices"
                  />
                </button>
                {openCards.product && (
                  <ul className="relative w-full flex flex-col justify-center items-center gap-4 text-very-dark-blue py-32P -mt-16M mb-32M bg-grayish-blue rounded-5BR shadow-md">
                    <li className="cursor-pointer hover:font-bold">Overview</li>
                    <li className="cursor-pointer hover:font-bold">Pricing</li>
                    <li className="cursor-pointer hover:font-bold group">
                      Marketplace
                    </li>
                    <li className="cursor-pointer hover:font-bold group">
                      Features
                    </li>
                    <li className="cursor-pointer hover:font-bold group">
                      Integrations
                    </li>
                  </ul>
                )}

                {/* COMPANY */}
                <button
                  className="flex justify-center items-center gap-2"
                  onClick={() => handleCardToggle('company')}
                >
                  <span className="text-very-dark-black-blue font-bold cursor-pointer hover:underline">
                    Company
                  </span>

                  <Image
                    src={arrowDark}
                    className="relative top-[2px]"
                    alt="expand choices"
                  />
                </button>
                {openCards.company && (
                  <ul className="relative w-full flex flex-col justify-center items-center gap-4 text-very-dark-blue py-32P -mt-16M mb-32M bg-grayish-blue rounded-5BR shadow-md">
                    <li className="cursor-pointer hover:font-bold">About</li>
                    <li className="cursor-pointer hover:font-bold">Team</li>
                    <li className="cursor-pointer hover:font-bold group">
                      Blog
                    </li>
                    <li className="cursor-pointer hover:font-bold group">
                      Careers
                    </li>
                  </ul>
                )}

                {/* CONNECT */}
                <button
                  className="flex justify-center items-center gap-2"
                  onClick={() => handleCardToggle('connect')}
                >
                  <span className="text-very-dark-black-blue font-bold cursor-pointer hover:underline">
                    Connect
                  </span>

                  <Image
                    src={arrowDark}
                    className="relative top-[2px]"
                    alt="expand choices"
                  />
                </button>
                {openCards.connect && (
                  <ul className="relative w-full flex flex-col justify-center items-center gap-4 text-very-dark-blue py-32P -mt-16M mb-32M bg-grayish-blue rounded-5BR shadow-md">
                    <li className="cursor-pointer hover:font-bold">Contact</li>
                    <li className="cursor-pointer hover:font-bold">
                      Newsletter
                    </li>
                    <li className="cursor-pointer hover:font-bold group">
                      LinkedIn
                    </li>
                  </ul>
                )}

                <div className="w-full border border-gray-300 mt-32M"></div>

                <div className="flex flex-col justify-center items-center gap-10 my-32M">
                  <button className="text-very-dark-black-blue font-bold">
                    Login
                  </button>
                  <button
                    id="sign-up"
                    className="w-128W group relative -top-8I text-white uppercase font-bold cursor-pointer"
                  >
                    <span className="absolute left-[36px] z-10 text-sm hover:opacity-100">
                      Sign Up
                    </span>
                    <div
                      id="signUpMobile"
                      className="z-0 absolute -top-[12px] w-128W h-48H px-32P py-16P rounded-full group-hover:opacity-95"
                    ></div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ////////////////////////////////////////////////// */}
      <div className="flex flex-col justify-center items-center gap-2 mt-176M text-center">
        <h1 className="text-xl xs:text-3xl lg:text-4xl font-semi-bold">
          A modern publishing platform
        </h1>

        <p className="text-grayish-blue">
          Grow your audience and build your online brand
        </p>

        <div className="mt-64M relative right-48I flex flex-col justify-center items-center xs:flex-row">
          <button
            id="sign-up"
            className="w-252.8W group relative -top-8I text-light-red font-bold cursor-pointer"
          >
            <span className="absolute z-10 text-sm hover:opacity-100 group-hover:text-white text-center">
              Start for Free
            </span>
            <div className="z-0 absolute -top-[12px] left-[92px] w-160W h-48H bg-white px-32P py-16P rounded-full group-hover:opacity-10"></div>
          </button>

          <button
            id="sign-up"
            className="w-208W group relative left-8I text-light-red  font-bold cursor-pointer top-64I xs:-top-8I xs:left-0"
          >
            <span className="absolute z-10 text-white text-sm hover:opacity-100 group-hover:text-light-red text-center">
              Learn More
            </span>

            <div className="opacity-100 border-2 border-white bg-transparent z-0 absolute -top-[12px] left-[62px] w-160W h-48H px-32P py-16P rounded-full group-hover:bg-white"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
