import { useContext, useState } from 'react';
import AppContext from '../../lib/appContext';
import MobileMenu from '../mobileMenu.js';

export default function Header({ settings }) {
  const { mobileMenuVisibility, setMobileMenuVisibility } =
    useContext(AppContext);

  let logo = settings?.logo?.image;
  let title = settings?.logo?.alt;
  //console.log('settings', settings);
  return (
    <>
      {mobileMenuVisibility && <MobileMenu />}
      <header className="header p-2 pl-3 pr-3  top-0 z-20 h-20 absolute w-screen max-w-screen-2xl mx-auto flex justify-between ">
        <p className="text-secondary-400 text-5xl	font-bold ">
          {title}
          <span className="text-white">.</span>
        </p>
        <div>
          <button
            onClick={() => setMobileMenuVisibility(true)}
            className="group relative text-secondary-400 bg-secondary-400/10 p-2 w-fit rounded-md cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 "
          >
            <div className="absolute rounded-md w-6 h-6 p-2 animate-ping bg-secondary-400/50 group-hover:hidden "></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
