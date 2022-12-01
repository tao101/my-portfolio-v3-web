import SocialIcons from '../socialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { urlFor } from '../../lib/sanity';
import Link from 'next/link';

export default function Home({ settings, homePage }) {
  const description = homePage?.description;
  const profilePic = homePage?.profilePic?.image;
  const profilePicAlt = homePage?.profilePic?.alt;
  //console.log('description ', description);
  return (
    <>
      <section
        id="home"
        className="relative h-screen z-20 flex flex-col   justify-center items-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: '100%',
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mb-5 relative z-20 flex justify-center items-center rounded-full  w-52 h-52   "
        >
          <div className="herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-secondary-400 to-transparent  "></div>

          <div className="z-20 w-48 h-48  bg-transparent rounded-full overflow-hidden bg-main-900">
            <img
              alt={profilePicAlt}
              src={urlFor(profilePic).width(192).height(192)}
              className="w-48 h-48 bg-gradient-to-tr from-secondary-400 to-transparent"
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{
            opacity: 0,
            y: '100%',
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mb-5 z-20 text-center flex flex-col lg:flex-row"
        >
          <span className="text-white  font-bold text-3xl antialiased lg:pr-2 lg:text-5xl">
            {'Hi, I am'}
          </span>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              '',
              800,
              'Taoufiq Lotfi',
              1000,
              'Full-stack Developer',
              1000,
              'React-native Developer',
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            className="text-secondary-400 font-bold text-3xl antialiased lg:text-5xl"
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </motion.h1>

        <AnimatePresence>
          {homePage && (
            <motion.p
              initial={{
                opacity: 0,
                y: '100%',
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="max-w-screen-lg text-center  font-normal text-lg antialiased"
              style={{ color: '#bfbecb' }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="z-20 mt-5">
          <SocialIcons settings={settings} />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: '100%',
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className=" z-20 absolute left-0 top-auto bottom-5 w-full justify-between text-center"
        >
          <Link href="/#about">
            <a className="cursor-pointer  w-12 h-12 z-20 text-[#bfbecb] text-xs font-medium uppercase tracking-widest transition-all hover:text-secondary-400 antialiased ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-8 h-8 sm:w-12 sm:h-12  inline animate-bounce text-base hover:text-secondary-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
                </g>
              </svg>
              <span className="pl-2 sm:text-lg  antialiased z-20 hover:text-secondary-400 text-[#bfbecb]">
                SCROLL DOWN
              </span>
            </a>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
