import { motion, AnimatePresence } from 'framer-motion';

export default function SkillBox({ title, percentage }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.1,
      }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col w-full  md:w-2/5  lg:flex-1 justify-center items-center circleprogress card hovercard relative p-4 text-center md:p-5  "
    >
      <div className="relative mb-2 inline-block text-secondary-400">
        <svg className="circle" width="120" height="120" viewBox="0 0 120 120">
          <circle
            className="circlebg"
            cx="60"
            cy="60"
            r="54"
            pathLength="1"
            strokeLinecap="round"
            strokeWidth="12"
          ></circle>
          <circle
            cx="60"
            cy="60"
            r="54"
            strokeLinecap="round"
            strokeWidth="12"
            opacity="1"
            pathLength="1"
            strokeDashoffset="0px"
            strokeDasharray={`${percentage}px 1px`}
          ></circle>
        </svg>
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body text-[#bfbecb]">
          {percentage * 100}%
        </span>
      </div>
      <h5 className="antialiased font-medium text-lg text-white "> {title}</h5>
    </motion.div>
  );
}
