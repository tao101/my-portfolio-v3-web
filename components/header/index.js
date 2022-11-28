import { useContext, useState, useEffect } from 'react';
import AppContext from '../../lib/appContext';
import MobileMenu from '../mobileMenu.js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ settings }) {
  const { mobileMenuVisibility, setMobileMenuVisibility } =
    useContext(AppContext);
  const [hoverdItem, setHoverdItem] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let logo = settings?.logo?.image;
  let title = settings?.logo?.alt;
  //console.log('settings', settings);
  const router = useRouter();
  let path = router.asPath;
  console.log('router', path);
  let currentPath = '';
  if (path.includes('blog')) {
    currentPath = 'blog';
  } else if (path.includes('#about')) {
    currentPath = 'about';
  } else if (path.includes('#resume')) {
    currentPath = 'resume';
  } else if (path.includes('#works')) {
    currentPath = 'works';
  } else if (path.includes('#contact')) {
    currentPath = 'contact';
  }

  let homeHeaderClass = 'header p-3 top-0 left-0 z-30 h-20 absolute w-screen  ';

  let scrollHeaderClass =
    'header  p-3  just top-0 left-0 z-50 h-20 w-screen   fixed border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter';

  return (
    <>
      <AnimatePresence>
        {mobileMenuVisibility && (
          <MobileMenu  />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(scrollY <= 180 || scrollY >= 200) && (
          <motion.div
            key="headerAnimation"
            initial={
              scrollY > 205
                ? {
                    y: '-100%',
                  }
                : {
                    y: '0%',
                  }
            }
            animate={{
              y: ['-75%', '-50%', '-25%', '0%'],
            }}
            transition={{
              duration: 0.4,
            }}
            className={scrollY > 200 ? scrollHeaderClass : homeHeaderClass}
          >
            <div className="flex justify-between items-center max-w-screen-xl mx-auto ">
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
                <ul className="navBar flex-1 flex justify-center items-center ">
                  <li className="mx-2">
                    <Link href="/">
                      <a
                        onMouseEnter={() => setHoverdItem('Home')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5	relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == ''
                            ? 'text-secondary-400'
                            : 'text-white'
                        } hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
                            ></motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/#about">
                      <a
                        onMouseEnter={() => setHoverdItem('About')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == 'about'
                            ? 'text-secondary-400'
                            : 'text-white'
                        }  hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
                            ></motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/#resume">
                      <a
                        onMouseEnter={() => setHoverdItem('RESUME')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == 'resume'
                            ? 'text-secondary-400'
                            : 'text-white'
                        } hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
                            ></motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/#works">
                      <a
                        onMouseEnter={() => setHoverdItem('WORKS')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == 'works'
                            ? 'text-secondary-400'
                            : 'text-white'
                        } hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
                            ></motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/blog">
                      <a
                        onMouseEnter={() => setHoverdItem('BLOG')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == 'blog'
                            ? 'text-secondary-400'
                            : 'text-white'
                        } hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
                            ></motion.span>
                          )}
                        </AnimatePresence>
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/#contact">
                      <a
                        onMouseEnter={() => setHoverdItem('CONTACT')}
                        onMouseLeave={() => setHoverdItem('')}
                        className={`group mt-1.5	 relative inline-block cursor-pointer py-2 text-base uppercase tracking-wider text-heading before:text-primary ${
                          currentPath == '#contact'
                            ? 'text-secondary-400'
                            : 'text-white'
                        } hover:text-secondary-400 overflow-hidden`}
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
                              className="absolute  bottom-0 left-0  bg-secondary-400 w-full h-px 	 "
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
