import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceBox({ item, index }) {
  const { _key, serviceDescription, serviceTitle } = item;

  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );

  switch (index) {
    case 0:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      );
      break;
    case 1:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      );
      break;
    case 2:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      );
      break;
    default:
      break;
  }

  return (
    <motion.div
      whileHover={{
        y: '-10%',
      }}
      transition={{
        duration: 0.1,
        delay: 0,
      }}
      className="relative group card hovercard circleprogress flex-1 h-full  items-stretch p-4 md:p-5  "
    >
      <span className="absolute right-0 top-0 p-4 md:p-5 text-5xl pointer-events-none z-0 font-bold uppercase text-heading opacity-5 text-white  ">
        0{index + 1}
      </span>
      <div className="mb-6 group-hover:animate-serviceIcon flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-secondary-400 bg-opacity-10 p-5 text-4xl text-secondary-400">
        <div className="fill-current text-secondary-400"> {icon}</div>
      </div>
      <h5 className="text-lg font-medium antialiased text-white mb-3">
        {serviceTitle}
      </h5>
      <p className="text-[#bfbecb] antialiased text-base	font-normal	 ">
        {serviceDescription}
      </p>
    </motion.div>
  );
}
