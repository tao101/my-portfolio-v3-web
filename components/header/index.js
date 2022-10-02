import { useContext, useState } from 'react';
import AppContext from '../../lib/appContext';
import MobileMenu from '../mobileMenu.js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header({ settings }) {
  const { mobileMenuVisibility, setMobileMenuVisibility } =
    useContext(AppContext);
  const [hoverdItem, setHoverdItem] = useState('');

  let logo = settings?.logo?.image;
  let title = settings?.logo?.alt;
  //console.log('settings', settings);
  return (
    <>
      <AnimatePresence>
        {mobileMenuVisibility && <MobileMenu />}
      </AnimatePresence>
      <header className="header p-3 items-center   top-0 z-20 h-20 absolute w-screen max-w-screen-2xl mx-auto flex justify-between ">
        <Link href="/">
          <a className="text-secondary-400 text-5xl	font-bold ">
            {title}
            <span className="text-white">.</span>
          </a>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuVisibility(true)}
            className="group  relative text-secondary-400 bg-secondary-400/10 p-2 w-fit rounded-md cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 lg:hidden"
          >
            <div className="absolute rounded-md w-6 h-6 p-2 animate-ping bg-secondary-400/50  "></div>
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
        <div className="hidden lg:flex grow  justify-end  ">
          <ul className="flex-1 flex justify-center items-center ">
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('Home')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-secondary-400 hover:text-secondary-400 overflow-hidden"
                >
                  Home
                  <AnimatePresence>
                    {hoverdItem == 'Home' && (
                      <motion.span
                        key="MenuHome"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('About')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400 overflow-hidden"
                >
                  About
                  <AnimatePresence>
                    {hoverdItem == 'About' && (
                      <motion.span
                        key="MenuAbout"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('RESUME')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400 overflow-hidden"
                >
                  RESUME
                  <AnimatePresence>
                    {hoverdItem == 'RESUME' && (
                      <motion.span
                        key="MenuRESUME"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('WORKS')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400 overflow-hidden"
                >
                  WORKS
                  <AnimatePresence>
                    {hoverdItem == 'WORKS' && (
                      <motion.span
                        key="MenuWORKS"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('BLOG')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400 overflow-hidden"
                >
                  BLOG
                  <AnimatePresence>
                    {hoverdItem == 'BLOG' && (
                      <motion.span
                        key="MenuBLOG"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/">
                <a
                  onMouseEnter={() => setHoverdItem('CONTACT')}
                  onMouseLeave={() => setHoverdItem('')}
                  className="group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400 overflow-hidden"
                >
                  CONTACT
                  <AnimatePresence>
                    {hoverdItem == 'CONTACT' && (
                      <motion.span
                        key="MenuCONTACT"
                        initial={{
                          x: '-100%',
                        }}
                        animate={{
                          x: 0,
                        }}
                        exit={{
                          x: '100%',
                        }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        class="absolute  bottom-0 left-0  bg-secondary-900 w-full h-px 	 "
                      ></motion.span>
                    )}
                  </AnimatePresence>
                </a>
              </Link>
            </li>
          </ul>
          <div className=" flex-2 flex justify-center items-center">
            <Link href="/">
              <a className="group relative  text-main-900 bg-secondary-400 py-3 px-4  rounded-md cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 overflow-hidden ">
                HIRE ME
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
