import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../../lib/appContext';

export default function MobileMenu() {
  const { mobileMenuVisibility, setMobileMenuVisibility } =
    useContext(AppContext);
  return (
    <div
      style={{
        transform: 'translateY(0vh) translateZ(0px)',
      }}
      className="fixed flex flex-col bg-main-900 z-50 w-screen h-screen lg:hidden p-2 pl-3 pr-3"
    >
      <div className="flex justify-end ">
        <div
          onClick={() => setMobileMenuVisibility(false)}
          className=" group relative  text-secondary-400 bg-secondary-400/10 p-2 w-fit rounded-full cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 "
        >
          <div className="absolute rounded-full w-6 h-6 p-2 animate-ping bg-secondary-400/50 group-hover:hidden "></div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="p-2  h-80  grow ">
        <ul className="pb-[34px] flex flex-col justify-center items-center h-full	">
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                RESUME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                WORKS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                BLOG
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary text-white hover:text-secondary-400">
                CONTACT
              </a>
            </Link>
          </li>
          <li className="mt-8">
            <Link href="/">
              <a className="group text-main-900 bg-secondary-400 py-3 px-4  rounded-md cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 ">
                HIRE ME
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
