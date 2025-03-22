'use client';

import Image from 'next/image';
import futureMobile from './../images/illustration-editor-mobile.svg';
import futureDesktop from './../images/illustration-editor-desktop.svg';
import phones from './../images/illustration-phones.svg';
import laptopMobile from './../images/illustration-laptop-mobile.svg';
import laptopDesktop from './../images/illustration-laptop-desktop.svg';

const Main = () => {
  return (
    <main className="bg-white mx-auto font-ubuntu tracking-wide">
      {/* FUTURE */}
      <section className="p-32P pb-272P">
        <h2 className="mb-32M text-xl text-center text-very-dark-blue font-bold">
          Designed for the future
        </h2>

        <div className="relative flex flex-col-reverse justify-center items-center gap-10 xl:flex-row xl:justify-around xl:my-288M">
          <div className="space-y-8 text-center xl:text-start xl:flex flex-col justify-center items-start xl:w-5/6">
            <h3 className="text-very-dark-blue text-xl font-bold xl:text-2xl">
              Introducing an extensible editor
            </h3>
            <p className="text-very-dark-grayish-blue max-w-container-500">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h3 className="text-very-dark-blue text-xl font-bold xl:text-2xl">
              Robust content management
            </h3>
            <p className="text-very-dark-grayish-blue max-w-container-500">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>

          <Image
            src={futureMobile}
            className="block xl:hidden"
            alt=""
            aria-label="hidden"
          />
          <Image
            src={futureDesktop}
            className="hidden absolute -right-288I xl:block"
            alt=""
            aria-label="hidden"
          />
        </div>
      </section>

      {/* PHONES */}
      <section
        id="art"
        className="flex flex-col justify-center items-center text-center h-600H px-32P rounded-bl-150BR rounded-tr-150BR bg-very-dark-desaturated-blue space-y-5 sm:pb-64P lg:h-480H lg:pb-0"
      >
        <div className="w-full relative -top-128I sm:-top-160I justify-center items-center lg:flex lg:justify-around lg:top-0">
          <Image
            src={phones}
            className="mx-auto mt-0 xs:mt-96M sm:mt-288M lg:mt-0 lg:w-1/2 lg:max-w-container-800 lg:mx-32M"
            alt=""
          />
          <div className="flex-col justify-start items-start text-center lg:text-start lg:flex">
            <h2 className="mb-32M text-xl font-bold sm:text-2xl">
              State of the Art Infrastructure
            </h2>
            <p className="text-md text-grayish-blue mx-auto max-w-container-500 sm:text-lg lg:mx-0">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      {/* LAPTOP */}
      <section className="relative flex flex-col justify-center items-center py-64P xl:flex-row xl:justify-end xl:my-288M">
        <Image
          src={laptopMobile}
          className="mb-32M xl:hidden"
          alt=""
          aria-hidden="true"
        />
        <Image
          src={laptopDesktop}
          className="hidden absolute -left-288I xl:block"
          alt=""
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center items-center gap-5 px-32P xl:items-start xl:w-1/3 xl:mr-128M">
          <h3 className="text-start text-very-dark-blue text-center text-xl font-bold lg:text-2xl">
            Free, open, simple
          </h3>
          <p className="text-very-dark-grayish-blue text-center max-w-container-500 pb-32P xl:text-start">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h3 className="text-very-dark-blue text-center text-xl font-bold xl:text-start lg:text-2xl">
            Powerful tooling
          </h3>
          <p className="text-center text-very-dark-grayish-blue text-center max-w-container-500 xl:text-start">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
