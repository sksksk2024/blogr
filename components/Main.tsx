'use client';

import Image from 'next/image';
import future from './../images/illustration-editor-mobile.svg';
import phones from './../images/illustration-phones.svg';
import laptop from './../images/illustration-laptop-mobile.svg';

const Main = () => {
  return (
    <main className="bg-white mx-auto font-ubuntu tracking-wide">
      {/* FUTURE */}
      <section className="p-32P pb-272P">
        <h2 className="mb-32M text-xl text-center text-very-dark-blue font-bold">
          Designed for the future
        </h2>

        <div className="flex flex-col-reverse justify-center items-center gap-10">
          <div className="space-y-8">
            <h3 className="text-very-dark-blue text-center text-xl font-bold">
              Introducing an extensible editor
            </h3>
            <p className="text-very-dark-grayish-blue text-center max-w-container-500">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h3 className="text-very-dark-blue text-center text-xl font-bold">
              Robust content management
            </h3>
            <p className="text-very-dark-grayish-blue text-center max-w-container-500">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>

          <Image src={future} className="" alt="" aria-label="hidden" />
        </div>
      </section>

      {/* PHONES */}
      <section
        id="art"
        className="flex flex-col justify-center items-center text-center h-624H px-32P rounded-bl-150BR rounded-tr-150BR bg-very-dark-desaturated-blue space-y-5 sm:pb-64P"
      >
        <div className="relative -top-128I sm:-top-160I">
          <Image src={phones} className="mt-0 xs:mt-96M sm:mt-288M" alt="" />
          <h2 className=" mb-32M text-xl text-center font-bold sm:text-2xl">
            State of the Art Infrastructure
          </h2>
          <p className="text-md text-center text-grayish-blue text-center mx-auto max-w-container-500 sm:text-lg">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>

      {/* LAPTOP */}
      <section className="flex flex-col justify-center items-center py-64P">
        <Image src={laptop} className="mb-32M" alt="" aria-hidden="true" />
        <div className="flex flex-col justify-center items-center gap-5 px-32P">
          <h3 className="text-very-dark-blue text-center text-xl font-bold">
            Free, open, simple
          </h3>
          <p className="text-very-dark-grayish-blue text-center max-w-container-500 pb-32P">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h3 className="text-very-dark-blue text-center text-xl font-bold">
            Powerful tooling
          </h3>
          <p className="text-very-dark-grayish-blue text-center max-w-container-500">
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
