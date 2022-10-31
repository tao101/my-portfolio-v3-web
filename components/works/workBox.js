import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

export default function WorkBox({ item, index }) {
  let [openPhotoGalarey, setOpenPhotoGalarey] = useState(false);
  let [openYoutubeVideo, setOpenYoutubeVideo] = useState(false);
  let photoGallery = item?.photoGallery;
  let liveUrl = item?.liveUrl;
  let githubUrl = item?.githubUrl;
  let youtubeUrl = item?.youtubeUrl;

  console.log('item', item);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={item?._id + '-' + index}
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{
            duration: 0.2,
            delay: 0.1 + index / 30,
          }}
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
              {photoGallery && photoGallery?.length > 0 && (
                <button
                  onClick={() => {
                    setOpenPhotoGalarey(!openPhotoGalarey);
                  }}
                  className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                    </g>
                  </svg>
                </button>
              )}
              {youtubeUrl && youtubeUrl != '' && (
                <button
                  onClick={() => setOpenYoutubeVideo(!openYoutubeVideo)}
                  className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"></path>
                    </g>
                  </svg>
                </button>
              )}
              {githubUrl && githubUrl != '' && (
                <Link href={githubUrl}>
                  <a
                    className="cursor-pointer inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="inline-block"
                      height="1.25em"
                      width="1.25em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                      </g>
                    </svg>
                  </a>
                </Link>
              )}
              {liveUrl && liveUrl != '' && (
                <Link href={liveUrl}>
                  <a
                    className="cursor-pointer inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-secondary-400 p-0 text-center text-lg text-grey"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.25em"
                      width="1.25em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </Link>
              )}
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
      {youtubeUrl && youtubeUrl != '' && (
        <div className="absolute">
          <FsLightbox
            key={item?._id + '-FsLightbox-youtube-' + index}
            toggler={openYoutubeVideo}
            sources={[youtubeUrl]}
          />
        </div>
      )}
      {photoGallery && photoGallery?.length > 0 && (
        <div className="absolute">
          <FsLightbox
            key={item?._id + '-FsLightbox-Gallery-' + index}
            toggler={openPhotoGalarey}
            sources={photoGallery?.map((photo) => {
              return (
                <motion.div
                  key={photo?._key}
                  className="w-fit h-fit flex  flex-col justify-center items-center bg-transparent "
                  onClick={() => setOpenPhotoGalarey(false)}
                  initial={{
                    opacity: 0,
                    scale: 0.01,
                    y: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.2,
                  }}
                >
                  <div className="flex flex-col w-fit h-fit  justify-start items-center ">
                    <img
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                      src={urlFor(photo?.image?.image)}
                      alt={photo?.image?.alt}
                      className=" w-[75vw] h-full  object-contain	"
                    />
                    <h5
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                      className="pt-8 w-full text-white text-3xl text-center font-medium"
                    >
                      {photo?.title}
                    </h5>
                  </div>
                </motion.div>
              );
            })}
          />
        </div>
      )}
    </>
  );
}
