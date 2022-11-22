import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BlogItem({ blog }) {
  return (
    <div className="relative group h-unset md:h-full  card hovercard circleprogress w-full  flex flex-col  items-stretch p-4 md:p-5">
      <div className="absolute bg-secondary-400 rounded "></div>
      <Link href={'/blog/' + blog?.slug?.current}>
        <div className="flex-1 rounded-lg overflow-hidden ">
          <img
            className=" hover:scale-125 ease-in duration-500 hover:cursor-pointer"
            src={urlFor(blog?.image?.image)}
            alt={blog?.image?.alt}
          />
        </div>
      </Link>

      <Link href={'/blog/' + blog?.slug?.current}>
        <div className="flex-1">
          <h5 className="text-white mt-6 hover:text-secondary-400 mb-3">
            <Link href={'/blog/' + blog?.slug?.current}>{blog?.title}</Link>
          </h5>

          <p className="text-[#bfbecb] hover:text-secondary-400 hover:cursor-pointer">
            {blog?.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
