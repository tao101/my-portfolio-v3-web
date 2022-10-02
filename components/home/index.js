import SocialIcons from '../socialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home({ settings, homePage }) {
  const description = homePage?.description;
  //console.log('description ', description);
  return (
    <>
      <div className=" absolute left-0 top-0 flex h-screen z-10	 w-full justify-around">
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
      </div>
      <section className="h-screen z-20 flex flex-col  justify-center items-center">
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
              1000,
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
        </motion.div>

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

        <div className="bg-white  ">
          <p>sss</p>
        </div>
      </section>
    </>
  );
}
