import { motion, AnimatePresence } from 'framer-motion';

export default function SkillRow({ title, percentage }) {
  return (
    <div className="grow w-full md:w-2/5   ">
      <h5 className="antialiased font-medium text-lg text-white mb-3">
        {title + ' - '}
        <span className="text-secondary-400">({percentage * 100}%)</span>
      </h5>
      <div className="progress-bar relative h-4 w-full rounded-full bg-secondary-400 bg-opacity-20">
        <motion.span
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage * 100}%`,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="progress-progress absolute left-0 top-0 h-full rounded-full bg-secondary-400"
        ></motion.span>
      </div>
    </div>
  );
}
