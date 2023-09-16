import React from "react";
import { SiAnalogue } from "react-icons/si";
import { BsFillClipboard2DataFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <BsFillClipboard2DataFill className="m-2 text-white text-2xl" />
          Vidyarthi
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Learn Today, Lead Tomorrow
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a
              href="https://github.com/singhkumaraman/"
              className="mr-4 hover:underline md:mr-6"
            >
              Github
            </a>
          </li>
          <li>
            <a href="/feedback" className="mr-4 hover:underline md:mr-6">
              Feedback
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Vidyarthi™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
