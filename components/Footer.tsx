'use client';

import Image from 'next/image';
import logo from './../images/logo.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 text-center py-64P bg-very-dark-black-blue rounded-tr-150BR mx-auto font-ubuntu tracking-wide lg:flex-row lg:justify-around lg:items-start">
      <Image src={logo} alt="" aria-hidden="true" />

      <div className="space-y-4">
        <h3 className="font-bold">Product</h3>
        <ul className="text-grayish-blue">
          <li className="cursor-pointer hover:underline">Overview</li>
          <li className="cursor-pointer hover:underline">Pricing</li>
          <li className="cursor-pointer hover:underline">Marketplace</li>
          <li className="cursor-pointer hover:underline">Features</li>
          <li className="cursor-pointer hover:underline">Integrations</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Company</h3>
        <ul className="text-grayish-blue">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Team</li>
          <li className="cursor-pointer hover:underline">Blog</li>
          <li className="cursor-pointer hover:underline">Careers</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Connect</h3>
        <ul className="text-grayish-blue">
          <li className="cursor-pointer hover:underline">Contact</li>
          <li className="cursor-pointer hover:underline">Newsletter</li>
          <li className="cursor-pointer hover:underline">LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
