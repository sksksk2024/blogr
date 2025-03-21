'use client';

import Image from 'next/image';
import logo from './../images/logo.svg';
import arrowLight from './../images/icon-arrow-light.svg';

export default function Header() {
  return (
    <header className="rounded-bl-100BR mx-auto max-w-container-1400 p-32P pb-160P font-ubuntu tracking-wide">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-20">
          <Image src={logo} alt="blogr" />
          <div className="relative flex justify-center items-start gap-10">
            <div className="">
              <button className="flex justify-center items-center gap-2">
                <span className="cursor-pointer hover:underline">Product</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              <ul className="absolute -translate-x-1/4 top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
                <li className="cursor-pointer hover:font-bold">Overview</li>
                <li className="cursor-pointer hover:font-bold">Pricing</li>
                <li className="cursor-pointer hover:font-bold group">
                  Marketplace
                </li>
              </ul>
            </div>

            <div className="">
              <button className="flex justify-center items-center gap-2">
                <span className="cursor-pointer hover:underline">Company</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              {/* <ul className="absolute top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
            <li className="cursor-pointer hover:font-bold">Overview</li>
            <li className="cursor-pointer hover:font-bold">Pricing</li>
            <li className="cursor-pointer hover:font-bold group">
              Marketplace
            </li>
          </ul> */}
            </div>

            <div className="">
              <button className="flex justify-center items-center gap-2">
                <span className="cursor-pointer hover:underline">Connect</span>

                <Image
                  src={arrowLight}
                  className="relative top-[2px]"
                  alt="expand choices"
                />
              </button>
              {/* <ul className="absolute top-48I max-w-container-176 w-full flex flex-col justify-center items-start text-very-dark-blue pl-32P py-32P bg-white rounded-5BR shadow-md">
            <li className="cursor-pointer hover:font-bold">Overview</li>
            <li className="cursor-pointer hover:font-bold">Pricing</li>
            <li className="cursor-pointer hover:font-bold group">
              Marketplace
            </li>
          </ul> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
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
      </div>
      {/* Features Integrations Company About
    Team Blog Careers Connect Contact Newsletter LinkedIn */}

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
