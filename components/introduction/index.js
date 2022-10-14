import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';

export default function Introduction({ homePage }) {
  const languages = homePage?.languages;
  const address = homePage?.address;
  const freelance = homePage?.freelance;
  const resumeLink = homePage?.resumeLink;
  const aboutImageAlt = homePage?.aboutImage?.alt;
  const aboutImage = homePage?.aboutImage?.image;
  const age = Math.floor(
    (Date.now() - 836571600000) / 1000 / 60 / 60 / 24 / 365
  );

  return (
    <div className="mb-3 lg:pt-14 flex flex-col lg:flex-row w-full justify-center items-center gap-7  overflow-hidden margin-auto  ">
      <motion.div
        whileInView={{ opacity: [0, 0.5, 1], x: [-200, 50, 0] }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="flex-1 relative lg:flex lg:justify-end rounded-lg border-8 border-secondary-400 border-opacity-20 lg:mr-4 w-full md:w-3/5  mx-auto lg:w-4/5  "
      >
        <div className="absolute flex -top-2  z-40 left-1/2 transform -translate-x-1/2  w-[calc(100%_+_20px)] h-2 overflow-hidden">
          <motion.span
            initial={{
              x: '-80%',
            }}
            animate={{
              x: '1850%',
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              repeat: Infinity,
            }}
            className="w-8 h-full   rounded-r-full bg-gradient-to-r from-transparent  to-secondary-400 "
          ></motion.span>
        </div>
        <div className="absolute flex -bottom-2  z-40 left-1/2 transform -translate-x-1/2  w-[calc(100%_+_20px)] h-2 overflow-hidden">
          <motion.span
            initial={{
              x: '1930%',
            }}
            animate={{
              x: '-100%',
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              repeat: Infinity,
            }}
            className="w-8 h-full   rounded-l-full bg-gradient-to-l from-transparent  to-secondary-400 "
          ></motion.span>
        </div>
        <div className="absolute flex -top-2  z-40 -left-2  w-2 h-[calc(100%_+_20px)] overflow-hidden ">
          <motion.span
            initial={{
              y: '1410%',
            }}
            animate={{
              y: '-100%',
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              repeat: Infinity,
            }}
            className="w-full h-8   rounded-t-full bg-gradient-to-t from-transparent  to-secondary-400 "
          ></motion.span>
        </div>
        <div className="absolute flex -top-2  z-40 -right-2  w-2 h-[calc(100%_+_20px)] overflow-hidden ">
          <motion.span
            initial={{
              y: '-80%',
            }}
            animate={{
              y: '1380%',
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              repeat: Infinity,
            }}
            className="w-full h-8   rounded-b-full bg-gradient-to-b from-transparent  to-secondary-400 "
          ></motion.span>
        </div>
        <img
          className="lg:object-cover w-full "
          src={urlFor(aboutImage).width(594).height(432)}
          alt={aboutImageAlt}
        />
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 0.5, 1], x: [200, -50, 0] }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="flex-1 flex flex-col "
      >
        <h3
          className="text-white antialiased font-semibold mb-3	"
          style={{ fontSize: 26 }}
        >
          Hi, I am <span className="text-secondary-400">Taoufiq Lotfi</span>
        </h3>
        <ul className="aboutMe list-disc mb-6	">
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              First Name
            </span>
            <span className="text-[#bfbecb] font-medium">{': '} Taoufiq</span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Last Name
            </span>
            <span className="text-[#bfbecb] font-medium">{': '} Lotfi</span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Age
            </span>
            <span className="text-[#bfbecb] font-medium">
              {': ' + age + ' years'}
            </span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Nationality
            </span>
            <span className="text-[#bfbecb] font-medium">{': '} Moroccan</span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Languages
            </span>
            <span className="text-[#bfbecb] font-medium">
              {': ' + languages}
            </span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Address
            </span>
            <span className="text-[#bfbecb] font-medium">{': ' + address}</span>
          </li>
          <li className="mb-1 text-secondary-400 antialiased text-lg font-normal">
            <span className=" text-[#bfbecb] inline-block w-[150px] font-medium">
              Freelance
            </span>
            <span className="text-[#bfbecb] font-medium">
              {': ' + (freelance ? 'Available' : 'Unavailable')}
            </span>
          </li>
        </ul>

        <div className="my-3">
          <Link href={resumeLink}>
            <a className="text-main-900  bg-secondary-400  py-3 px-5  rounded-md cursor-pointer hover:text-black hover:bg-white hover:transition-colors duration-500 overflow-hidden">
              Download Resume
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
