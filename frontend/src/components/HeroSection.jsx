import React from 'react';

const HeroSection = () => {
  return (
    <div className="container py-32 mx-auto text-center sm:px-4">
      <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
        <span className="block">Short links, big results</span>
      </h1>
      <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
        A URL shortener built with powerful tools to help you grow and protect
        your brand.
      </div>
      <div className="relative flex items-center max-w-xl mx-auto mt-12 overflow-hidden text-center rounded-full">
        <input
          type="text"
          name="link"
          placeholder="Shorten your link"
          className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
        />
        <span className="relative top-0 right-0 block">
          <button
            type="button"
            className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
          >
            Shorten
          </button>
        </span>
      </div>
      <div className="bg-gray-100 max-w-xl mx-auto mt-12 overflow-hidden rounded-md px-4 py-5 text-left mt-5">
        <div className="flex items-center justify-between">
          <p>http://google.com</p>
          <div className="flex items-center space-x-4">
            <p>http://localhost:5000/ZiZi</p>
            <button
              type="button"
              className="inline-flex focus:ring ring-indigo-700 focus:ring-offset-2 items-center p-2 rounded-lg text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none active:bg-indigo-700"
              title="Copy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
