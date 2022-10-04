import { motion, AnimatePresence } from 'framer-motion';

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="relative overflow-hidden pb-14 text-center w-full">
      <h2 className="relative w-full z-10 mb-2 uppercase text-white antialiased text-4xl font-bold	">
        {title}
      </h2>
      <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-secondary-400 bg-opacity-20">
        <motion.span
          initial={{
            x: 0,
          }}
          animate={{
            x: '1600%',
          }}
          transition={{
            duration: 2.5,

            repeat: Infinity,
          }}
          className="absolute left-0 top-0 inline-block h-full w-2 animate-lefttoright rounded-full  bg-secondary-400"
        ></motion.span>
      </span>
      <span className="text-white text-center absolute pointer-events-none w-full z-0 left-1/2 -top-2  -translate-x-1/2 transform text-8xl md:text-9xl font-bold uppercase text-heading opacity-5">
        {subTitle}
      </span>
    </div>
  );
}
