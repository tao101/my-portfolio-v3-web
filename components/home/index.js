import SocialIcons from '../socialIcons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home({ settings, homePage }) {
  const description = homePage?.description;
  console.log('description ', description);
  return (
    <>
      <div className=" absolute left-0 top-0 flex h-screen z-10	 w-full justify-around">
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
        <span className="border-r border-white border-opacity-5"></span>
      </div>
      <section className="h-screen flex flex-col justify-center items-center	  ">
        <h1 className="text-secondary-400 font-bold mb-5 text-3xl">LOTFI</h1>

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
              className="max-w-screen-lg text-center  font-normal text-lg  antialiased"
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
