import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import image from "../assets/hero.png";
import Featured from "../components/Featured";
const Home = () => {
  return (
    <>
      <Header />
      <section class="bg-white dark:bg-gray-900 flex-grow">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Educate. Innovate. Excel.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to the AICTE Curriculum Collaboration Portal – your
              gateway to shaping the future of technical education in India.
              Here, we bring together the brightest minds, educational experts,
              and curriculum designers to collectively craft a model curriculum
              that sets new standards for excellence. Join us in this
              transformative journey as we collaborate, innovate, and pave the
              way for a brighter future in technical education. Together, we
              empower the next generation of innovators, engineers, and leaders.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" className="rounded-md" />
          </div>
        </div>
      </section>
      <Featured className="p-10 m-5" />
      <Footer />
    </>
  );
};

export default Home;
