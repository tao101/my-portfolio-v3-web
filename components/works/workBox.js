import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkBox({ item }) {
  return (
    <AnimatePresence>
      <motion.div
        key={item?._id}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="flex-[0_0_100%] sm:flex-[0_0_45%] md:flex-[0_0_45%] lg:flex-[0_0_31%]  relative group card hovercard circleprogress flex flex-col items-stretch p-4 md:p-5 overflow-hidden "
      >
        <div className="mb-4 group">
          <img
            src={urlFor(item?.mainImage?.image).width(345).height(241)}
            alt={item?.mainImage?.alt}
            width="100%"
            height="100%"
            className="z-10"
          />
          <div className="absolute group-hover:translate-x-0 bg-[#292A3F] blur left-0 top-0 z-20 h-full w-full -translate-x-[102%] transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 "></div>
          <div className="flex  absolute group-hover:translate-x-0  left-0 top-0 z-30 h-full w-full -translate-x-[102%] transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 ">
            <button className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                </g>
              </svg>
            </button>
            <button className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"></path>
                </g>
              </svg>
            </button>
            <button className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey">
              g
            </button>
            <a className="cursor-pointer inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <h5 className="text-lg font-medium antialiased text-white">
          {item?.title}
        </h5>
        <p className="text-[#bfbecb] font-normal	text-base antialiased">
          {item?.description}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
